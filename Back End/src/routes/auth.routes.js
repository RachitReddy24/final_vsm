const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const authenticate = require("../middleware/auth.middleware");
const validate = require("../middleware/validation.middleware");

const {
  loginValidation,
} = require("../validators/user.validator");

router.post("/login",loginValidation,validate,authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);
router.post("/change-password", authenticate, authController.changePassword);
router.get("/profile", authenticate, authController.profile);

module.exports = router;