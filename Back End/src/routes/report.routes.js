const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const reportController = require("../controllers/report.controller");

router.get(
  "/visitors",
  authenticate,
  authorize("ADMIN"),
  reportController.getVisitorReport
);

router.get(
  "/meetings",
  authenticate,
  authorize("ADMIN"),
  reportController.getMeetingReport
);

router.get(
  "/checkins",
  authenticate,
  authorize("ADMIN"),
  reportController.getCheckInReport
);

router.get(
  "/feedback",
  authenticate,
  authorize("ADMIN"),
  reportController.getFeedbackReport
);

router.get(
  "/export",
  authenticate,
  authorize("ADMIN"),
  reportController.exportReport
);
router.get(
  "/summary",
  authenticate,
  authorize("ADMIN"),
  reportController.getReportSummary
);

router.get(
  "/monthly",
  authenticate,
  authorize("ADMIN"),
  reportController.getMonthlyVisitorReport
);

router.get(
  "/status",
  authenticate,
  authorize("ADMIN"),
  reportController.getVisitorStatusReport
);
router.get(
  "/activity",
  authenticate,
  authorize("ADMIN"),
  reportController.getRecentActivity
);
module.exports = router;