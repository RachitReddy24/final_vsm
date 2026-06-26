const prisma = require("../config/prisma");

// Create
const createNotification = async (data) => {

  const user = await prisma.user.findUnique({
    where: {
      id: Number(data.userId),
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return await prisma.notification.create({
    data: {
      userId: Number(data.userId),
      title: data.title,
      message: data.message,
    },
  });
};

// Get All
const getAllNotifications = async () => {
  return await prisma.notification.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

// Get By Id
const getNotificationById = async (id) => {

  const notification = await prisma.notification.findUnique({
    where: { id },
    include: {
      user: true,
    },
  });

  if (!notification) {
    throw new Error("Notification not found");
  }

  return notification;
};

// Mark as Read
const markAsRead = async (id) => {

  const notification = await prisma.notification.findUnique({
    where: { id },
  });

  if (!notification) {
    throw new Error("Notification not found");
  }

  return await prisma.notification.update({
    where: { id },
    data: {
      isRead: true,
    },
  });
};

// Delete
const deleteNotification = async (id) => {

  const notification = await prisma.notification.findUnique({
    where: { id },
  });

  if (!notification) {
    throw new Error("Notification not found");
  }

  await prisma.notification.delete({
    where: { id },
  });

  return;
};

module.exports = {
  createNotification,
  getAllNotifications,
  getNotificationById,
  markAsRead,
  deleteNotification,
};