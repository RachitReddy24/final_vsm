const express = require("express");
const router = express.Router();

const meetingController = require("../controllers/meeting.controller");
const authenticate = require("../middleware/auth.middleware");
const validate = require("../middleware/validation.middleware");
const upload = require("../middleware/upload.middleware");
const {
  createMeetingValidation,
  updateMeetingValidation,
} = require("../validators/meeting.validator");

router.post("/",authenticate,createMeetingValidation,validate,meetingController.createMeeting);
router.get("/", authenticate, meetingController.getAllMeetings);

router.get("/booking/:token",meetingController.getMeetingByBookingToken);
router.post(
  "/booking/:token/register",
  upload.single("photo"),
  validate,
  meetingController.registerVisitor
);
router.get("/:id", authenticate, meetingController.getMeetingById);

router.put("/:id",authenticate,updateMeetingValidation,validate,meetingController.updateMeeting);
router.delete("/:id", authenticate, meetingController.deleteMeeting);

module.exports = router;