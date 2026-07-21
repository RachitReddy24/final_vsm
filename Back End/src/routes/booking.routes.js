const express = require("express");

const router = express.Router();

const bookingController = require("../controllers/booking.controller");

router.get("/:token", bookingController.getBookingDetails);

router.post("/:token", bookingController.submitBooking);

module.exports = router;