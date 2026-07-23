const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const dashboardController = require("../controllers/dashboard.controller");

router.get(
  "/summary",
  authenticate,
  authorize("ADMIN", "RECEPTIONIST"),
  dashboardController.getDashboardSummary
);
router.get(
  "/visitor-chart",
  authenticate,
  authorize("ADMIN", "RECEPTIONIST"),
  dashboardController.getVisitorChart
);

router.get(
  "/recent-visitors",
  authenticate,
  authorize("ADMIN", "RECEPTIONIST"),
  dashboardController.getRecentVisitors
);

router.get(
  "/today-meetings",
  authenticate,
  authorize("ADMIN", "RECEPTIONIST"),
  dashboardController.getTodayMeetings
);

router.get(
  "/recent-activities",
  authenticate,
  authorize("ADMIN", "RECEPTIONIST"),
  dashboardController.getRecentActivities
);
module.exports = router;