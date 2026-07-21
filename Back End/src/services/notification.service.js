const prisma = require("../config/prisma");

const createNotification = async (data) => {

  return await prisma.notification.create({
    data: {
      userId: data.userId,
      title: data.title,
      message: data.message,
    },
  });

};

const getNotifications = async (userId) => {

  return await prisma.notification.findMany({
    where: {
      userId: Number(userId),
    },
    orderBy: {
      createdAt: "desc",
    },
  });

};
const getAllNotifications = async ({
  page = 1,
  limit = 10,
}) => {

  page = Number(page);
  limit = Number(limit);

  const notifications = await prisma.notification.findMany({
    include: {
      user: {
        select: {
          id: true,
          employeeId: true,
          name: true,
          role: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },

    skip: (page - 1) * limit,

    take: limit,
  });

  const total = await prisma.notification.count();

  return {
    notifications,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const markAsRead = async (id) => {

  return await prisma.notification.update({
    where: {
      id: Number(id),
    },
    data: {
      status: "READ",
    },
  });

};

module.exports = {
  createNotification,
  getNotifications,
  getAllNotifications,
  markAsRead,
};