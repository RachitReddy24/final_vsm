const { body } = require("express-validator");

const createMeetingValidation = [

  body("title")
    .notEmpty()
    .withMessage("Meeting title is required"),

  body("hostId")
    .notEmpty()
    .withMessage("Host ID is required")
    .isInt()
    .withMessage("Host ID must be a number"),

  body("meetingDate")
    .notEmpty()
    .withMessage("Meeting date is required")
    .isISO8601()
    .withMessage("Invalid meeting date format")
    .custom((value) => {
      if (new Date(value) < new Date()) {
        throw new Error("Meeting date cannot be in the past");
      }
      return true;
    }),

];

const updateMeetingValidation = [

  body("title")
    .optional()
    .notEmpty()
    .withMessage("Meeting title cannot be empty"),

  body("hostId")
    .optional()
    .isInt()
    .withMessage("Host ID must be a number"),

  body("meetingDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid meeting date format"),

];

module.exports = {
  createMeetingValidation,
  updateMeetingValidation,
};