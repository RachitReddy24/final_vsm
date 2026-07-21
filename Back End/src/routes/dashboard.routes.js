const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const dashboardController = require("../controllers/dashboard.controller");

router.get(
  "/summary",
  authenticate,
  authorize("ADMIN"),
  dashboardController.getDashboardSummary
);

router.get(
  "/visitor-chart",
  authenticate,
  authorize("ADMIN"),
  dashboardController.getVisitorChart
);

router.get(
  "/recent-visitors",
  authenticate,
  authorize("ADMIN"),
  dashboardController.getRecentVisitors
);

router.get(
  "/today-meetings",
  authenticate,
  authorize("ADMIN"),
  dashboardController.getTodayMeetings
);
router.get(
  "/recent-activities",
  authenticate,
  authorize("ADMIN"),
  dashboardController.getRecentActivities
);

module.exports = router;