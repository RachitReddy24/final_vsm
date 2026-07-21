const prisma = require("../config/prisma");
const crypto = require("crypto");
const saveVisitorPhoto = require("../utils/saveVisitorPhoto");
const transporter = require("../config/mailer");
const bookingTemplate = require("../templates/booking.template");
const { createEmailLog } = require("./emailLog.service");
const { createNotification } = require("./notification.service");
const createMeeting = async (data) => {

  // Check Host
  const host = await prisma.user.findUnique({
    where: {
      id: Number(data.hostId),
    },
  });

  if (!host) {
    throw new Error("Host not found");
  }

  if (host.role !== "HOST") {
    throw new Error("Selected employee is not a host");
  }

  // Generate Booking Token
  const bookingToken = crypto.randomBytes(32).toString("hex");

  // Booking Link Expiry (24 Hours)
  const bookingTokenExpiry = new Date(
    Date.now() + 24 * 60 * 60 * 1000
  );

  const meeting = await prisma.meeting.create({
    data: {
      title: data.title,
      description: data.description,
      meetingDate: new Date(data.meetingDate),

      hostId: Number(data.hostId),

      bookingToken,
      bookingTokenExpiry,
    },

    include: {
      host: {
        select: {
          id: true,
          name: true,
          email: true,
          employeeId: true,
        },
      },
    },
  });
 
const bookingUrl =
`${process.env.FRONTEND_URL}/register?token=${bookingToken}`;

try {

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: meeting.host.email,
    subject: "Meeting Scheduled - Visitor Registration",
    html: bookingTemplate(meeting, bookingUrl),
  });

  await createEmailLog({
    recipientName: meeting.host.name,
    recipientEmail: meeting.host.email,
    recipientType: "HOST",
    emailType: "BOOKING_URL",
    subject: "Meeting Scheduled - Visitor Registration",
    status: "SENT",
  });

} catch (error) {

  await createEmailLog({
    recipientName: meeting.host.name,
    recipientEmail: meeting.host.email,
    recipientType: "HOST",
    emailType: "BOOKING_URL",
    subject: "Meeting Scheduled - Visitor Registration",
    status: "FAILED",
    errorMessage: error.message,
  });

  console.error("Booking email failed:", error);
}
await createNotification({
  userId: meeting.hostId,
  title: "New Meeting Scheduled",
  message: `A new meeting "${meeting.title}" has been scheduled for you.`,
});
  return meeting;
};
const getAllMeetings = async ({
  search = "",
  page = 1,
  limit = 10,
}) => {
  page = Number(page);
  limit = Number(limit);

  const where = {
    OR: [
      {
        title: {
          contains: search,
        },
      },
      {
        host: {
          name: {
            contains: search,
          },
        },
      },
    ],
  };

  const meetings = await prisma.meeting.findMany({
    where,
    include: {
      host: {
        select: {
          id: true,
          employeeId: true,
          name: true,
          email: true,
          role: true,
        },
      },
      visitor: true,
    },
    orderBy: {
      meetingDate: "desc",
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  const total = await prisma.meeting.count({
    where,
  });

  return {
    meetings,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};
const getMeetingById = async (id) => {

  const meeting = await prisma.meeting.findUnique({
    where: {
      id,
    },
    include: {
      host: true,
      visitor: true,
    },
  });

  if (!meeting) {
    throw new Error("Meeting not found");
  }

  return meeting;
};
const updateMeeting = async (id, data) => {

  const meeting = await prisma.meeting.findUnique({
    where: {
      id,
    },
  });

  if (!meeting) {
    throw new Error("Meeting not found");
  }

  return await prisma.meeting.update({
    where: {
      id,
    },
    data: {
      title: data.title,
      description: data.description,
      meetingDate: new Date(data.meetingDate),
      hostId: Number(data.hostId),
    },
    include: {
      host: true,
      visitor: true,
    },
  });
};
const deleteMeeting = async (id) => {

  const meeting = await prisma.meeting.findUnique({
    where: {
      id,
    },
  });

  if (!meeting) {
    throw new Error("Meeting not found");
  }

  await prisma.meeting.delete({
    where: {
      id,
    },
  });
};
const getMeetingByBookingToken = async (token) => {

  const meeting = await prisma.meeting.findUnique({

    where: {
      bookingToken: token,
    },

    include: {
      host: {
        select: {
          id: true,
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

  if (meeting.status !== "SCHEDULED") {
    throw new Error("Meeting is no longer available for booking");
  }

  return {
    meetingId: meeting.id,
    title: meeting.title,
    description: meeting.description,
    meetingDate: meeting.meetingDate,
    host: meeting.host,
  };

};
const registerVisitor = async (token, data) => {

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
    throw new Error("Visitor already registered");
  }

  const visitorCode =
    "VIS" +
    crypto.randomBytes(4).toString("hex").toUpperCase();

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

      photo: data.photo
        ? saveVisitorPhoto(data.photo, visitorCode)
        : null,

      idProof: data.idProof,

      visitType: "PLANNED",

      status: "PENDING",

    },

    include: {
      meeting: true,
      host: true,
    },

  });

  return visitor;

};
module.exports = {
  createMeeting,
  getAllMeetings,
  getMeetingById,
  updateMeeting,
  deleteMeeting,
  getMeetingByBookingToken,
  registerVisitor,
};