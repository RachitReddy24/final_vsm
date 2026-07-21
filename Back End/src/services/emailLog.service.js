const prisma = require("../config/prisma");

const createEmailLog = async (data) => {
  return await prisma.emailLog.create({
    data: {
      recipientName: data.recipientName,
      recipientEmail: data.recipientEmail,
      recipientType: data.recipientType,
      emailType: data.emailType,
      subject: data.subject,
      status: data.status,
      errorMessage: data.errorMessage || null,
    },
  });
};

const getEmailLogs = async ({
  page = 1,
  limit = 10,
  search = "",
}) => {
  page = Number(page);
  limit = Number(limit);

  const where = {
    OR: [
      {
        recipientName: {
          contains: search,
        },
      },
      {
        recipientEmail: {
          contains: search,
        },
      },
      {
        subject: {
          contains: search,
        },
      },
    ],
  };

  const emailLogs = await prisma.emailLog.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  const total = await prisma.emailLog.count({
    where,
  });

  return {
    emailLogs,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};

module.exports = {
  createEmailLog,
  getEmailLogs,
};