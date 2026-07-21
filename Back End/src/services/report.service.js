const prisma = require("../config/prisma");
const getReportSummary = async () => {

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);

  tomorrow.setDate(today.getDate() + 1);

  const [
    totalVisitors,
    todayVisitors,
    approvedVisitors,
    checkedInVisitors,
    checkedOutVisitors,
    feedbackCount,
    meetings
  ] = await Promise.all([

    prisma.visitor.count(),

    prisma.visitor.count({
      where: {
        createdAt: {
          gte: today,
          lt: tomorrow,
        },
      },
    }),

    prisma.visitor.count({
      where: {
        status: "APPROVED",
      },
    }),

    prisma.visitor.count({
      where: {
        status: "CHECKED_IN",
      },
    }),

    prisma.visitor.count({
      where: {
        status: "CHECKED_OUT",
      },
    }),

    prisma.feedback.count(),

    prisma.meeting.count(),

  ]);

  return {
    totalVisitors,
    todayVisitors,
    approvedVisitors,
    checkedInVisitors,
    checkedOutVisitors,
    feedbackCount,
    totalMeetings: meetings,
  };

};
const getVisitorReport = async () => {

  return await prisma.visitor.findMany({

    include: {
      host: {
        select: {
          employeeId: true,
          name: true,
        },
      },

      meeting: true,

      qrCode: true,

      checkIn: true,

      checkOut: true,

      feedback: true,
    },

    orderBy: {
      createdAt: "desc",
    },

  });

};
const getMeetingReport = async () => {

  return await prisma.meeting.findMany({

    include: {
      host: {
        select: {
          employeeId: true,
          name: true,
        },
      },

      visitor: true,
    },

    orderBy: {
      meetingDate: "desc",
    },

  });

};
const getCheckInReport = async () => {

  return await prisma.checkIn.findMany({

    include: {
      visitor: {
        include: {
          host: {
            select: {
              employeeId: true,
              name: true,
            },
          },
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },

  });

};
const getFeedbackReport = async () => {

  return await prisma.feedback.findMany({

    include: {
      visitor: {
        include: {
          host: {
            select: {
              employeeId: true,
              name: true,
            },
          },
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },

  });

};
const exportReport = async () => {

  return await prisma.visitor.findMany({

    include: {
      host: true,
      meeting: true,
      qrCode: true,
      checkIn: true,
      checkOut: true,
      feedback: true,
    },

  });

};
const getMonthlyVisitorReport = async () => {

  const visitors = await prisma.visitor.findMany({

    select: {
      createdAt: true,
    },

  });

  const months = {};

  visitors.forEach((visitor) => {

    const month = visitor.createdAt.toLocaleString("default", {
      month: "short",
    });

    months[month] = (months[month] || 0) + 1;

  });

  return Object.keys(months).map((month) => ({
    month,
    visitors: months[month],
  }));

};
const getVisitorStatusReport = async () => {

  const result = await prisma.visitor.groupBy({

    by: ["status"],

    _count: {
      id: true,
    },

  });

  return result;

};

module.exports = {
  getVisitorReport,
  getMeetingReport,
  getCheckInReport,
  getFeedbackReport,
  getReportSummary,
  getMonthlyVisitorReport,
  getVisitorStatusReport,
  exportReport,
};
  