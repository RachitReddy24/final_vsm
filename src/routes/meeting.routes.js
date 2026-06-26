const express = require("express");
const router = express.Router();

const meetingController = require("../controllers/meeting.controller");
const authenticate = require("../middleware/auth.middleware");

router.post("/", authenticate, meetingController.createMeeting);
router.get("/", authenticate, meetingController.getAllMeetings);
router.get("/:id", authenticate, meetingController.getMeetingById);
router.put("/:id", authenticate, meetingController.updateMeeting);
router.delete("/:id", authenticate, meetingController.deleteMeeting);
module.exports = router;