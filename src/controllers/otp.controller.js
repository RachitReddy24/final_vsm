const otpService = require("../services/otp.service");

const sendOTP = async (req, res) => {
  try {
    const otp = await otpService.sendOTP(req.body);

    res.status(201).json({
      success: true,
      message: "OTP sent successfully",
      data: otp,
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
    const result = await otpService.verifyOTP(req.body);

    res.status(200).json({
      success: true,
      message: "OTP verified successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const resendOTP = async (req, res) => {
  try {
    const otp = await otpService.resendOTP(req.body);

    res.status(200).json({
      success: true,
      message: "OTP resent successfully",
      data: otp,
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
  resendOTP,
};