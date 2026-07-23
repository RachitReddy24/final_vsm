const prisma = require("../config/prisma");

const getDashboardSummary = async () => {

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);

  tomorrow.setDate(today.getDate() + 1);

 const [
  totalEmployees,
  totalDepartments,
  totalVisitors,
  todayVisitors,
  pendingApprovals,
  approvedVisitors,
  checkedInVisitors,
  checkedOutVisitors,
  todayMeetings,
  walkInVisitors,
] = await Promise.all([
    prisma.user.count(),

    prisma.department.count(),

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
        status: "PENDING",
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

    prisma.meeting.count({
      where: {
        meetingDate: {
          gte: today,
          lt: tomorrow,
        },
      },
    }),
    prisma.visitor.count({
  where: {
    visitType: "WALK_IN",
    createdAt: {
      gte: today,
      lt: tomorrow,
    },
  },
}),
  ]);

 return {
  totalEmployees,
  totalDepartments,
  totalVisitors,
  todayVisitors,
  pendingApprovals,
  approvedVisitors,
  checkedInVisitors,
  checkedOutVisitors,
  todayMeetings,
  walkInVisitors,
 };
};
const getVisitorChart = async () => {

  const visitors = await prisma.visitor.groupBy({

    by: ["visitType"],

    _count: {
      id: true,
    },

  });

  return visitors;

};
const getRecentVisitors = async () => {

  return await prisma.visitor.findMany({

    include: {
      host: {
        select: {
          name: true,
          employeeId: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },

    take: 10,

  });

};
const getTodayMeetings = async () => {

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);

  tomorrow.setDate(today.getDate() + 1);

  return await prisma.meeting.findMany({

    where: {
      meetingDate: {
        gte: today,
        lt: tomorrow,
      },
    },

    include: {
      host: {
        select: {
          name: true,
          employeeId: true,
        },
      },

      visitor: true,
    },

    orderBy: {
      meetingDate: "asc",
    },

  });

};

const getRecentActivities = async () => {

  const visitors = await prisma.visitor.findMany({

    take: 10,

    orderBy: {
      updatedAt: "desc",
    },

    include: {
      host: {
        select: {
          name: true,
        },
      },
    },

  });

  return visitors.map((visitor) => ({

    visitorName: visitor.name,

    hostName: visitor.host.name,

    status: visitor.status,

    updatedAt: visitor.updatedAt,

  }));

};
module.exports = {
  getDashboardSummary,
  getVisitorChart,
  getRecentVisitors,
  getTodayMeetings,
  getRecentActivities,
};