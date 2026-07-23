const prisma = require("../config/prisma");
const crypto = require("crypto");

const transporter = require("../config/mailer");
const saveVisitorPhoto = require("../utils/saveVisitorPhoto");
const { createNotification } = require("./notification.service");
const { createEmailLog } = require("./emailLog.service");
const { generateQRCode } = require("../utils/qr");
const approvalTemplate = require("../templates/approval.template");
const rejectionTemplate = require("../templates/rejection.template");

const createUnplannedVisit = async (data) => {

  // Check Host
  const host = await prisma.user.findUnique({
    where: {
      id: Number(data.hostId),
    },
    include: {
      department: true,
    },
  });

  if (!host) {
    throw new Error("Host not found");
  }

  if (!host.isActive) {
    throw new Error("Host is inactive");
  }

  // Generate Visitor Code
  const visitorCode =
    "VIS" +
    crypto.randomBytes(4).toString("hex").toUpperCase();

    const photo = saveVisitorPhoto(
  data.photo,
  visitorCode
);

const otpRecord = await prisma.oTP.findFirst({
  where: {
    mobileNumber: data.mobileNumber,
    verified: true,
  },
  orderBy: {
    createdAt: "desc",
  },
});

if (!otpRecord) {
  throw new Error("Mobile number is not verified");
}
  // Create Visitor
  const visitor = await prisma.visitor.create({
    data: {
      visitorCode,

      hostId: host.id,

      meetingId: null,

      name: data.name,

      email: data.email,

      mobileNumber: data.mobileNumber,

      company: data.company,

      designation: data.designation,

      purpose: data.purpose,

      cameFrom: data.cameFrom,

      photo: saveVisitorPhoto(data.photo, visitorCode),

      idProof: data.idProof,

      visitType: "WALK_IN",

      status: "PENDING",
    },
      
    include: {
      host: true,
    },
  });

 await prisma.oTP.delete({
  where: {
    id: otpRecord.id,
  },
});
  // Notification
  await createNotification({
    userId: host.id,
    title: "Walk-in Visitor",
    message: `${visitor.name} is waiting for your approval.`,
  });

  // Email
  try {

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: host.email,
      subject: "Walk-in Visitor Waiting",

      html: `
        <h2>Walk-in Visitor</h2>

        <p>${visitor.name} is waiting at reception.</p>

        <p><b>Company:</b> ${visitor.company}</p>

        <p><b>Purpose:</b> ${visitor.purpose}</p>
      `,
    });

    await createEmailLog({
      recipientName: host.name,
      recipientEmail: host.email,
      recipientType: "HOST",
      emailType: "BOOKING_URL",
      subject: "Walk-in Visitor Waiting",
      status: "SENT",
    });

  } catch (error) {

    await createEmailLog({
      recipientName: host.name,
      recipientEmail: host.email,
      recipientType: "HOST",
      emailType: "BOOKING_URL",
      subject: "Walk-in Visitor Waiting",
      status: "FAILED",
      errorMessage: error.message,
    });

  }

  return visitor;
};

const getAllUnplannedVisits = async (query) => {
  const where = {
    visitType: "WALK_IN",
  };

  if (query.status) {
    where.status = query.status;
  }

  return await prisma.visitor.findMany({
    where,
    include: {
      host: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getUnplannedVisitById = async (id) => {

  const visitor = await prisma.visitor.findUnique({

    where: {
      id,
    },

    include: {
      host: true,
    },

  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  return visitor;

};
const approveUnplannedVisit = async (id) => {

  const visitor = await prisma.visitor.findUnique({
    where: { id },
    include: {
      host: true,
    },
  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  if (visitor.status !== "PENDING") {
    throw new Error("Visitor already processed");
  }

  const updatedVisitor = await prisma.visitor.update({
    where: { id },
    data: {
      status: "APPROVED",
      approvedAt: new Date(),
    },
    include: {
      host: true,
    },
  });

  const qr = await generateQRCode(updatedVisitor.visitorCode);

console.log("QR generated:", qr);

try {

  const qrRecord = await prisma.qRCode.create({
    data: {
      visitorId: updatedVisitor.id,
      qrImage: qr.fileName,
      expiryDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
  });

  console.log("QR saved:", qrRecord);

} catch (err) {

  console.error("QR DB Error:", err);

  throw err;

}
try {

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: updatedVisitor.email,
    subject: "Walk-in Visitor Approved",
    html: approvalTemplate({
      ...updatedVisitor,
      meeting: {
        meetingDate: new Date(),
      },
    }),
    attachments: [
      {
        filename: qr.fileName,
        path: qr.filePath,
      },
    ],
  });

  await createEmailLog({
    recipientName: updatedVisitor.name,
    recipientEmail: updatedVisitor.email,
    recipientType: "VISITOR",
    emailType: "APPROVAL",
    subject: "Walk-in Visitor Approved",
    status: "SENT",
  });

} catch (error) {

  await createEmailLog({
    recipientName: updatedVisitor.name,
    recipientEmail: updatedVisitor.email,
    recipientType: "VISITOR",
    emailType: "APPROVAL",
    subject: "Walk-in Visitor Approved",
    status: "FAILED",
    errorMessage: error.message,
  });

}
await createNotification({
  userId: updatedVisitor.hostId,
  title: "Walk-in Visitor Approved",
  message: `${updatedVisitor.name} has been approved.`,
});
  return updatedVisitor;
};
const rejectUnplannedVisit = async (id) => {

  const visitor = await prisma.visitor.findUnique({
    where: { id },
  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  if (visitor.status !== "PENDING") {
    throw new Error("Visitor already processed");
  }

 const updatedVisitor = await prisma.visitor.update({
  where: {
    id,
  },
  data: {
    status: "REJECTED",
  },
  include: {
    host: true,
  },
});
try {

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: updatedVisitor.email,
    subject: "Walk-in Visitor Rejected",
    html: rejectionTemplate(updatedVisitor),
  });

  await createEmailLog({
    recipientName: updatedVisitor.name,
    recipientEmail: updatedVisitor.email,
    recipientType: "VISITOR",
    emailType: "REJECTION",
    subject: "Walk-in Visitor Rejected",
    status: "SENT",
  });

} catch (error) {

  await createEmailLog({
    recipientName: updatedVisitor.name,
    recipientEmail: updatedVisitor.email,
    recipientType: "VISITOR",
    emailType: "REJECTION",
    subject: "Walk-in Visitor Rejected",
    status: "FAILED",
    errorMessage: error.message,
  });

}
await createNotification({
  userId: updatedVisitor.hostId,
  title: "Walk-in Visitor Rejected",
  message: `${updatedVisitor.name} has been rejected.`,
});
  return updatedVisitor;
};

module.exports = {
  createUnplannedVisit,
  getAllUnplannedVisits,
  getUnplannedVisitById,
  approveUnplannedVisit,
  rejectUnplannedVisit,
};