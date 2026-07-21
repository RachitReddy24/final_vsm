const { body } = require("express-validator");

const createVisitorValidation = [

  body("name")
    .notEmpty()
    .withMessage("Visitor name is required"),

  body("email")
    .optional()
    .isEmail()
    .withMessage("Invalid email format"),

  body("mobileNumber")
    .notEmpty()
    .withMessage("Mobile number is required")
    .isLength({ min: 10, max: 10 })
    .withMessage("Mobile number must be 10 digits")
    .isNumeric()
    .withMessage("Mobile number must contain only numbers"),

  body("company")
    .notEmpty()
    .withMessage("Company is required"),

  body("designation")
    .notEmpty()
    .withMessage("Designation is required"),

  body("purpose")
    .notEmpty()
    .withMessage("Purpose is required"),

  body("hostId")
    .notEmpty()
    .withMessage("Host ID is required")
    .isInt()
    .withMessage("Host ID must be a number"),

];

module.exports = {
  createVisitorValidation,
};