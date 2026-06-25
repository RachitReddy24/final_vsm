const prisma = require("../config/prisma");

const getAllAuditLogs = async () => {
  return await prisma.auditLog.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getAuditLogById = async (id) => {
  return await prisma.auditLog.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      user: true,
    },
  });
};

module.exports = {
  getAllAuditLogs,
  getAuditLogById,
};