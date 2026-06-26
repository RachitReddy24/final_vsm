const checkinService = require("../services/checkin.service");

const createCheckIn = async (req, res) => {
  try {
    const checkin = await checkinService.createCheckIn(req.body);

    res.status(201).json({
      success: true,
      message: "Visitor checked in successfully",
      data: checkin,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllCheckIns = async (req, res) => {
  try {
    const checkins = await checkinService.getAllCheckIns();

    res.status(200).json({
      success: true,
      data: checkins,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCheckInById = async (req, res) => {
  try {
    const checkin = await checkinService.getCheckInById(
      Number(req.params.id)
    );

    res.status(200).json({
      success: true,
      data: checkin,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCheckIn,
  getAllCheckIns,
  getCheckInById,
};