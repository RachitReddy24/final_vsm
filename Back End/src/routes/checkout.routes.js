const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const checkoutController = require("../controllers/checkout.controller");

router.post(
  "/:visitorId",
  authenticate,
  authorize("RECEPTIONIST"),
  checkoutController.checkOutVisitor
);

module.exports = router;