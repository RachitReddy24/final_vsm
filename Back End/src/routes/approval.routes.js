const express = require("express");

const router = express.Router();

const authenticate = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const approvalController = require("../controllers/approval.controller");

router.get(
  "/pending",
  authenticate,
  authorize("ADMIN"),
  approvalController.getPendingVisitors
);

router.post(
  "/:id/approve",
  authenticate,
  authorize("ADMIN"),
  approvalController.approveVisitor
);

router.post(
  "/:id/reject",
  authenticate,
  authorize("ADMIN"),
  approvalController.rejectVisitor
);

module.exports = router;