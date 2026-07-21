const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const checkinController = require("../controllers/checkin.controller");

router.post(
  "/",
  authenticate,
  authorize("RECEPTIONIST", "ADMIN"),
  checkinController.checkInVisitor
);

router.post(
  "/verify-qr",
  authenticate,
  authorize("RECEPTIONIST", "ADMIN"),
  checkinController.verifyQRCode
);

router.get(
  "/status/:visitorCode",
  authenticate,
  authorize("RECEPTIONIST", "ADMIN"),
  checkinController.getVisitorStatus
);

module.exports = router;