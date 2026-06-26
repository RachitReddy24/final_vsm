const prisma = require("../config/prisma");

const createMeeting = async (data) => {

  // Check Visitor
  const visitor = await prisma.visitor.findUnique({
    where: {
      id: Number(data.visitorId),
    },
  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

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
    throw new Error("Selected user is not a host");
  }

  const meeting = await prisma.meeting.create({
    data: {
      visitorId: Number(data.visitorId),
      hostId: Number(data.hostId),
      title: data.title,
      description: data.description,
      meetingDate: new Date(data.meetingDate),
    },

    include: {
      visitor: true,
      host: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    },
  });

  return meeting;
};
const getAllMeetings = async () => {
  return await prisma.meeting.findMany({
    include: {
      visitor: {
        select: {
          id: true,
          name: true,
          visitorCode: true,
          mobileNumber: true,
        },
      },
      host: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    },
    orderBy: {
      meetingDate: "desc",
    },
  });
};
const getMeetingById = async (id) => {

  const meeting = await prisma.meeting.findUnique({
    where: {
      id,
    },

    include: {
      visitor: {
        select: {
          id: true,
          name: true,
          visitorCode: true,
          mobileNumber: true,
          email: true,
        },
      },

      host: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          role: true,
        },
      },
    },
  });

  if (!meeting) {
    throw new Error("Meeting not found");
  }

  return meeting;
};
const updateMeeting = async (id, data) => {

  const meeting = await prisma.meeting.findUnique({
    where: { id },
  });

  if (!meeting) {
    throw new Error("Meeting not found");
  }

  const visitor = await prisma.visitor.findUnique({
    where: {
      id: Number(data.visitorId),
    },
  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  const host = await prisma.user.findFirst({
    where: {
      id: Number(data.hostId),
      role: "HOST",
    },
  });

  if (!host) {
    throw new Error("Host not found");
  }

  return await prisma.meeting.update({
    where: {
      id,
    },
    data: {
      visitorId: Number(data.visitorId),
      hostId: Number(data.hostId),
      title: data.title,
      description: data.description,
      meetingDate: new Date(data.meetingDate),
    },
    include: {
      visitor: true,
      host: true,
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

  return;
};
module.exports = {
  createMeeting,
  getAllMeetings,
  getMeetingById,
  updateMeeting,
  deleteMeeting,
};