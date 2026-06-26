const express = require("express");
const router = express.Router();

const checkoutController = require("../controllers/checkout.controller");
const authenticate = require("../middleware/auth.middleware");

router.post("/", authenticate, checkoutController.createCheckOut);
router.get("/", authenticate, checkoutController.getAllCheckOuts);
router.get("/:id", authenticate, checkoutController.getCheckOutById);

module.exports = router;