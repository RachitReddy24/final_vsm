const { body } = require("express-validator");

const createUserValidation = [

  body("employeeId")
    .notEmpty()
    .withMessage("Employee ID is required"),

  body("name")
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  body("role")
    .notEmpty()
    .withMessage("Role is required"),

];

const updateUserValidation = [

  body("email")
    .optional()
    .isEmail()
    .withMessage("Invalid email format"),

  body("password")
    .optional()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

];
const loginValidation = [

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),

  body("password")
    .notEmpty()
    .withMessage("Password is required"),

];

module.exports = {
  createUserValidation,
  updateUserValidation,
  loginValidation,
};