const express = require("express");
const router = express.Router();

const otpController = require("../controllers/otp.controller");
const authenticate = require("../middleware/auth.middleware");

router.post("/send", authenticate, otpController.sendOTP);
router.post("/verify", authenticate, otpController.verifyOTP);
router.post("/resend", authenticate, otpController.resendOTP);

module.exports = router;