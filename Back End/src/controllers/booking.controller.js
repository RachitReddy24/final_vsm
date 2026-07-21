const bookingService = require("../services/booking.service");

const getBookingDetails = async (req, res) => {

    try {

        const meeting = await bookingService.getBookingDetails(
            req.params.token
        );

        res.status(200).json({
            success: true,
            data: meeting,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};

const submitBooking = async (req, res) => {

    try {

        const visitor = await bookingService.submitBooking(
            req.params.token,
            req.body
        );

        res.status(201).json({
            success: true,
            message: "Visitor registered successfully",
            data: visitor,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    getBookingDetails,
    submitBooking,
};