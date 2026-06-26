const express = require("express");
const router = express.Router();

const notificationController = require("../controllers/notification.controller");
const authenticate = require("../middleware/auth.middleware");

router.post("/", authenticate, notificationController.createNotification);

router.get("/", authenticate, notificationController.getAllNotifications);

router.get("/:id", authenticate, notificationController.getNotificationById);

router.put("/:id/read", authenticate, notificationController.markAsRead);

router.delete("/:id", authenticate, notificationController.deleteNotification);

module.exports = router;