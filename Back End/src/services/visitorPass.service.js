const prisma = require("../config/prisma");

const getVisitorPass = async (visitorCode) => {

  const visitor = await prisma.visitor.findUnique({

    where: {
      visitorCode,
    },

    include: {

      host: {
        include: {
          department: true,
        },
      },

      meeting: true,

      qrCode: true,

    },

  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  if (visitor.status !== "APPROVED" &&
      visitor.status !== "CHECKED_IN" &&
      visitor.status !== "CHECKED_OUT") {

    throw new Error("Visitor pass is not available");

  }

  return {

    visitorCode: visitor.visitorCode,

    name: visitor.name,

    email: visitor.email,

    mobileNumber: visitor.mobileNumber,

    company: visitor.company,

    designation: visitor.designation,

    purpose: visitor.purpose,

    photo: visitor.photo,

    status: visitor.status,

    host: {
      name: visitor.host.name,
      email: visitor.host.email,
      department: visitor.host.department?.name || null,
    },

    meeting: visitor.meeting
      ? {
          title: visitor.meeting.title,
          meetingDate: visitor.meeting.meetingDate,
        }
      : null,

    qrCode: visitor.qrCode
      ? {
          qrImage: visitor.qrCode.qrImage,
          expiryDate: visitor.qrCode.expiryDate,
        }
      : null,

    checkedInAt: visitor.checkedInAt,

    checkedOutAt: visitor.checkedOutAt,

  };

};

module.exports = {
  getVisitorPass,
};