const notificationService = require("../services/notification.service");

const createNotification = async (req, res) => {
  try {
    const notification = await notificationService.createNotification(req.body);

    res.status(201).json({
      success: true,
      message: "Notification created successfully",
      data: notification,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllNotifications = async (req, res) => {
  try {
    const notifications = await notificationService.getAllNotifications();

    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getNotificationById = async (req, res) => {
  try {
    const notification = await notificationService.getNotificationById(
      Number(req.params.id)
    );

    res.status(200).json({
      success: true,
      data: notification,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const markAsRead = async (req, res) => {
  try {
    const notification = await notificationService.markAsRead(
      Number(req.params.id)
    );

    res.status(200).json({
      success: true,
      message: "Notification marked as read",
      data: notification,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteNotification = async (req, res) => {
  try {
    await notificationService.deleteNotification(Number(req.params.id));

    res.status(200).json({
      success: true,
      message: "Notification deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createNotification,
  getAllNotifications,
  getNotificationById,
  markAsRead,
  deleteNotification,
};