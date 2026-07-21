const notificationService = require("../services/notification.service");
 
const getNotifications = async (req, res) => {
  try {
 
    const notifications = await notificationService.getNotifications(req.user.id);
 
    res.status(200).json({
      success: true,
      data: notifications,
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

    const notifications =
      await notificationService.getAllNotifications(req.query);

    res.status(200).json({
      success: true,
      data: notifications,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }

};
const markAsRead = async (req, res) => {
  try {
 
    const notification = await notificationService.markAsRead(req.params.id);
 
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
 
module.exports = {
  getNotifications,
  getAllNotifications,
  markAsRead,
};
 