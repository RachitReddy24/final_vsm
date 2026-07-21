const prisma = require("../config/prisma");
const { generateQRCode } = require("../utils/qr");
const transporter = require("../config/mailer");
const approvalTemplate = require("../templates/approval.template");
const rejectionTemplate = require("../templates/rejection.template");
const { createEmailLog } = require("./emailLog.service");
const { createNotification } = require("./notification.service");
const getPendingVisitors = async ({
  search = "",
  page = 1,
  limit = 10,
}) => {

  page = Number(page);
  limit = Number(limit);

  const where = {
    status: "PENDING",

    OR: [
      {
        name: {
          contains: search,
        },
      },
      {
        visitorCode: {
          contains: search,
        },
      },
      {
        email: {
          contains: search,
        },
      },
    ],
  };

  const visitors = await prisma.visitor.findMany({
    where,

    include: {
      meeting: true,
      host: {
        include: {
          department: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },

    skip: (page - 1) * limit,

    take: limit,
  });

  const total = await prisma.visitor.count({
    where,
  });

  return {
    visitors,

    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};


const approveVisitor = async (id) => {

  const visitor = await prisma.visitor.findUnique({
    where: {
      id,
    },
    include: {
      host: true,
      meeting: true,
    },
  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  if (visitor.status !== "PENDING") {
    throw new Error("Visitor already processed");
  }

  // Update visitor status
  const updatedVisitor = await prisma.visitor.update({
    where: {
      id,
    },
    data: {
      status: "APPROVED",
      approvedAt: new Date(),
    },
    include: {
      meeting: true,
      host: true,
    },
  });

  // ✅ Generate QR Code
  const qr = await generateQRCode(updatedVisitor.visitorCode);

  // ✅ Save QR Code in Database
  await prisma.qRCode.create({
    data: {
      visitorId: updatedVisitor.id,
      qrImage: qr.fileName,
      expiryDate: updatedVisitor.meeting.meetingDate,
    },
  });
  try {

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: updatedVisitor.email,
    subject: "Visitor Request Approved",
    html: approvalTemplate(updatedVisitor),
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
    subject: "Visitor Request Approved",
    status: "SENT",
  });

} catch (error) {

  await createEmailLog({
    recipientName: updatedVisitor.name,
    recipientEmail: updatedVisitor.email,
    recipientType: "VISITOR",
    emailType: "APPROVAL",
    subject: "Visitor Request Approved",
    status: "FAILED",
    errorMessage: error.message,
  });

  console.error(error);
}

  // ✅ Return updated visitor with QR details
  return await prisma.visitor.findUnique({
    where: {
      id: updatedVisitor.id,
    },
    include: {
      meeting: true,
      host: true,
      qrCode: true,
    },
  });
};
const rejectVisitor = async (id) => {

  const visitor = await prisma.visitor.findUnique({
    where: {
      id,
    },
    include: {
      meeting: true,
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
    where: {
      id,
    },
    data: {
      status: "REJECTED",
    },
    include: {
      meeting: true,
      host: true,
    },
  });

  try {

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: updatedVisitor.email,
      subject: "Visitor Request Rejected",
      html: rejectionTemplate(updatedVisitor),
    });

    await createEmailLog({
      recipientName: updatedVisitor.name,
      recipientEmail: updatedVisitor.email,
      recipientType: "VISITOR",
      emailType: "REJECTION",
      subject: "Visitor Request Rejected",
      status: "SENT",
    });

  } catch (error) {

    await createEmailLog({
      recipientName: updatedVisitor.name,
      recipientEmail: updatedVisitor.email,
      recipientType: "VISITOR",
      emailType: "REJECTION",
      subject: "Visitor Request Rejected",
      status: "FAILED",
      errorMessage: error.message,
    });

    console.error(error);
  }
await createNotification({
  userId: updatedVisitor.hostId,
  title: "Visitor Approved",
  message: `${updatedVisitor.name} has been approved.`,
});
  return updatedVisitor;
};

module.exports = {
  getPendingVisitors,
  approveVisitor,
  rejectVisitor,
};