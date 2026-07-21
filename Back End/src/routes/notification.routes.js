const express = require("express");
const router = express.Router();
const authorize = require("../middleware/role.middleware");
const authenticate = require("../middleware/auth.middleware");

const notificationController = require("../controllers/notification.controller");

router.get(
  "/",
  authenticate,
  notificationController.getNotifications
);
router.get(
  "/all",
  authenticate,
  authorize("ADMIN"),
  notificationController.getAllNotifications
);
router.put(
  "/:id/read",
  authenticate,
  notificationController.markAsRead
);

module.exports = router;