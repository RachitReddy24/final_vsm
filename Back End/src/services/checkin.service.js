const prisma = require("../config/prisma");
const transporter = require("../config/mailer");
const arrivalTemplate = require("../templates/arrival.template");
const { createEmailLog } = require("./emailLog.service");
const { createNotification } = require("./notification.service");
const verifyQRCode = async (visitorCode) => {

  const visitor = await prisma.visitor.findUnique({
    where: {
      visitorCode,
    },
    include: {
      qrCode: true,
      meeting: true,
      host: true,
    },
  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  if (!visitor.qrCode) {
    throw new Error("QR Code not found");
  }

  if (visitor.qrCode.isUsed) {
    throw new Error("QR Code already used");
  }

  if (new Date() > visitor.qrCode.expiryDate) {
    throw new Error("QR Code has expired");
  }

  if (visitor.status !== "APPROVED") {
    throw new Error("Visitor is not approved");
  }

  return visitor;
};

const checkInVisitor = async (visitorCode) => {

  const visitor = await verifyQRCode(visitorCode);

  await prisma.checkIn.create({
    data: {
      visitorId: visitor.id,
    },
  });

  await prisma.qRCode.update({
    where: {
      visitorId: visitor.id,
    },
    data: {
      isUsed: true,
    },
  });

  // Save the updated visitor in a variable
  const updatedVisitor = await prisma.visitor.update({
    where: {
      id: visitor.id,
    },
    data: {
      status: "CHECKED_IN",
      checkedInAt: new Date(),
    },
    include: {
      host: true,
      meeting: true,
      qrCode: true,
      checkIn: true,
    },
  });

  // Send arrival email
  try {

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: updatedVisitor.host.email,
      subject: "Visitor Arrived",
      html: arrivalTemplate(updatedVisitor),
    });

    await createEmailLog({
      recipientName: updatedVisitor.host.name,
      recipientEmail: updatedVisitor.host.email,
      recipientType: "HOST",
      emailType: "VISITOR_ARRIVED",
      subject: "Visitor Arrived",
      status: "SENT",
    });

  } catch (error) {

    await createEmailLog({
      recipientName: updatedVisitor.host.name,
      recipientEmail: updatedVisitor.host.email,
      recipientType: "HOST",
      emailType: "VISITOR_ARRIVED",
      subject: "Visitor Arrived",
      status: "FAILED",
      errorMessage: error.message,
    });

    console.error("Arrival email failed:", error);
  }
  await createNotification({
  userId: updatedVisitor.hostId,
  title: "Visitor Arrived",
  message: `${updatedVisitor.name} has arrived at reception.`,
});

  return updatedVisitor;
 };

const getVisitorStatus = async (visitorCode) => {

  const visitor = await prisma.visitor.findUnique({
    where: {
      visitorCode,
    },
    include: {
      host: true,
      meeting: true,
      qrCode: true,
      checkIn: true,
      checkOut: true,
    },
  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  return visitor;
};

module.exports = {
  verifyQRCode,
  checkInVisitor,
  getVisitorStatus,
};