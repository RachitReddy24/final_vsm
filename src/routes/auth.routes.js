const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const authenticate = require("../middleware/auth.middleware");

// Authentication
router.post("/login", authController.login);
router.post("/logout", authController.logout);

// Profile
router.get("/profile", authenticate, authController.getProfile);
//change password
router.post("/change-password", authenticate, authController.changePassword);
//forgot password
router.post("/forgot-password", authController.forgotPassword);
//reset password
router.post("/reset-password", authController.resetPassword);
module.exports = router;