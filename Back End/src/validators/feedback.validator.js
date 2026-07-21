const { body } = require("express-validator");

const createFeedbackValidation = [

  body("rating")
    .notEmpty()
    .withMessage("Rating is required")
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5"),

  body("comment")
    .notEmpty()
    .withMessage("Comment is required")
    .isLength({ min: 5 })
    .withMessage("Comment must be at least 5 characters"),

];

module.exports = {
  createFeedbackValidation,
};