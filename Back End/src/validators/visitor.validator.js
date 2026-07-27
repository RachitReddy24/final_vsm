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
  .matches(/^(\+91\s?)?[6-9]\d{9}$/)
  .withMessage(
    "Enter a valid Indian mobile number (e.g. 6300450242 or +91 6300450242)"
  ),
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