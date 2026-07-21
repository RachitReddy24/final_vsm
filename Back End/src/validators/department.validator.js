const { body } = require("express-validator");

const createDepartmentValidation = [

  body("name")
    .notEmpty()
    .withMessage("Department name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Department name must be between 2 and 100 characters"),

];

const updateDepartmentValidation = [

  body("name")
    .optional()
    .notEmpty()
    .withMessage("Department name cannot be empty")
    .isLength({ min: 2, max: 100 })
    .withMessage("Department name must be between 2 and 100 characters"),

];

module.exports = {
  createDepartmentValidation,
  updateDepartmentValidation,
};