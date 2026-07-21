const otpService = require("../services/otp.service");

const sendOTP = async (req, res) => {
  try {

    await otpService.sendOTP(req.body.mobileNumber);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};

const verifyOTP = async (req, res) => {
  try {

    await otpService.verifyOTP(req.body);

    res.status(200).json({
      success: true,
      message: "OTP verified successfully",
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  sendOTP,
  verifyOTP,
};