const meetingService = require("../services/meeting.service");

const createMeeting = async (req, res) => {
  try {

    const meeting = await meetingService.createMeeting(req.body);

    res.status(201).json({
      success: true,
      message: "Meeting scheduled successfully",
      data: meeting,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};

const getAllMeetings = async (req, res) => {

  try {

    const meetings = await meetingService.getAllMeetings(req.query);

    res.status(200).json({
      success: true,
      data: meetings,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }

};

const getMeetingById = async (req, res) => {

  try {

    const meeting = await meetingService.getMeetingById(
      Number(req.params.id)
    );

    res.status(200).json({
      success: true,
      data: meeting,
    });

  } catch (error) {

    res.status(404).json({
      success: false,
      message: error.message,
    });

  }

};

const updateMeeting = async (req, res) => {

  try {

    const meeting = await meetingService.updateMeeting(
      Number(req.params.id),
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Meeting updated successfully",
      data: meeting,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }

};

const deleteMeeting = async (req, res) => {

  try {

    await meetingService.deleteMeeting(
      Number(req.params.id)
    );

    res.status(200).json({
      success: true,
      message: "Meeting deleted successfully",
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }

};
const getMeetingByBookingToken = async (req, res) => {

  try {

    const meeting = await meetingService.getMeetingByBookingToken(
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
const registerVisitor = async (req, res) => {

  try {

    const visitor = await meetingService.registerVisitor(
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
  createMeeting,
  getAllMeetings,
  getMeetingById,
  updateMeeting,
  deleteMeeting,
  getMeetingByBookingToken,
  registerVisitor,
};