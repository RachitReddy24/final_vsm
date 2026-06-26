const express = require("express");
const router = express.Router();

const checkinController = require("../controllers/checkin.controller");
const authenticate = require("../middleware/auth.middleware");

router.post("/", authenticate, checkinController.createCheckIn);
router.get("/", authenticate, checkinController.getAllCheckIns);
router.get("/:id", authenticate, checkinController.getCheckInById);

module.exports = router;