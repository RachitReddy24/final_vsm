const prisma = require("../config/prisma");

const getAllVisitLogs = async () => {
  return await prisma.visitLog.findMany({
    include: {
      visitor: {
        select: {
          id: true,
          name: true,
          visitorCode: true,
          mobileNumber: true,
          status: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getVisitLogById = async (id) => {

  const log = await prisma.visitLog.findUnique({
    where: {
      id,
    },
    include: {
      visitor: true,
    },
  });

  if (!log) {
    throw new Error("Visit log not found");
  }

  return log;
};

module.exports = {
  getAllVisitLogs,
  getVisitLogById,
};