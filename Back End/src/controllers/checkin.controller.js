const checkinService = require("../services/checkin.service");

const verifyQRCode = async (req, res) => {
  try {
    const visitor = await checkinService.verifyQRCode(req.body.visitorCode);

    res.status(200).json({
      success: true,
      data: visitor,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const checkInVisitor = async (req, res) => {
  try {
    const visitor = await checkinService.checkInVisitor(req.body.visitorCode);

    res.status(200).json({
      success: true,
      message: "Visitor checked in successfully",
      data: visitor,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getVisitorStatus = async (req, res) => {
  try {
    const visitor = await checkinService.getVisitorStatus(
      req.params.visitorCode
    );

    res.status(200).json({
      success: true,
      data: visitor,
    });

  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  verifyQRCode,
  checkInVisitor,
  getVisitorStatus,
};