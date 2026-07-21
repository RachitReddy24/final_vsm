const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/auth.middleware");

const feedbackController = require("../controllers/feedback.controller");
const validate = require("../middleware/validation.middleware");

const {
  createFeedbackValidation,
} = require("../validators/feedback.validator");

router.get(
  "/:visitorId",
  authenticate,
  feedbackController.getFeedbackPage
);

router.post(
  "/",
  authenticate,
  createFeedbackValidation,
  validate,
  feedbackController.submitFeedback
);

module.exports = router;