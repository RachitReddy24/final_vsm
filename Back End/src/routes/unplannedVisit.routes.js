const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const unplannedVisitController = require("../controllers/unplannedVisit.controller");
const validate = require("../middleware/validation.middleware");

const {
  createVisitorValidation,
} = require("../validators/visitor.validator");

router.post(
  "/",
  authenticate,
  authorize("RECEPTIONIST", "ADMIN"),
  createVisitorValidation,
  validate,
  unplannedVisitController.createUnplannedVisit
);

router.get(
  "/",
  authenticate,
  authorize("RECEPTIONIST", "ADMIN"),
  unplannedVisitController.getAllUnplannedVisits
);

router.get(
  "/:id",
  authenticate,
  authorize("RECEPTIONIST", "ADMIN"),
  unplannedVisitController.getUnplannedVisitById
);

router.post(
  "/:id/approve",
  authenticate,
  authorize("ADMIN"),
  unplannedVisitController.approveUnplannedVisit
);

router.post(
  "/:id/reject",
  authenticate,
  authorize("ADMIN"),
  unplannedVisitController.rejectUnplannedVisit
);

module.exports = router;