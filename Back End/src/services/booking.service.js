const prisma = require("../config/prisma");
const crypto = require("crypto");
const { createNotification } = require("./notification.service");
const getBookingDetails = async (token) => {

  const meeting = await prisma.meeting.findUnique({
    where: {
      bookingToken: token,
    },
    include: {
      host: {
        select: {
          id: true,
          employeeId: true,
          name: true,
          email: true,
          department: true,
        },
      },
    },
  });

  if (!meeting) {
    throw new Error("Invalid booking link");
  }

  if (
    meeting.bookingTokenExpiry &&
    new Date() > meeting.bookingTokenExpiry
  ) {
    throw new Error("Booking link has expired");
  }

  if (meeting.visitor) {
    throw new Error("Visitor details already submitted");
  }

  return meeting;
};

const submitBooking = async (token, data) => {

  const meeting = await prisma.meeting.findUnique({
    where: {
      bookingToken: token,
    },
    include: {
      host: true,
      visitor: true,
    },
  });

  if (!meeting) {
    throw new Error("Invalid booking link");
  }

  if (
    meeting.bookingTokenExpiry &&
    new Date() > meeting.bookingTokenExpiry
  ) {
    throw new Error("Booking link has expired");
  }

  if (meeting.visitor) {
    throw new Error("Booking already completed");
  }

  // Generate Visitor Code
  const visitorCode =
    "VIS" +
    crypto.randomBytes(4).toString("hex").toUpperCase();

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
  const visitor = await prisma.visitor.create({
    data: {

      meetingId: meeting.id,

      hostId: meeting.hostId,

      visitorCode,

      name: data.name,

      email: data.email,

      mobileNumber: data.mobileNumber,

      company: data.company,

      designation: data.designation,

      purpose: data.purpose,

      cameFrom: data.cameFrom,

      visitType: "PLANNED",

      status: "PENDING",

      photo: data.photo,

      idProof: data.idProof,

    },
  });
await createNotification({
  userId: meeting.hostId,
  title: "Visitor Registered",
  message: `${visitor.name} has registered for your meeting.`,
});
  return visitor;
};

module.exports = {
  getBookingDetails,
  submitBooking,
};