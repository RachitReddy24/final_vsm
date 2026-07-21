const authService = require("../services/auth.service");

const login = async (req, res) => {
  try {
    const user = await authService.login(req.body);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: user,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const forgotPassword = async (req, res) => {
  try {
    await authService.forgotPassword(req.body.email);

    res.status(200).json({
      success: true,
      message: "Password reset email sent",
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    await authService.resetPassword(req.body);

    res.status(200).json({
      success: true,
      message: "Password reset successful",
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const profile = async (req, res) => {
  try {
    const user = await authService.profile(req.user.id);

    res.status(200).json({
      success: true,
      data: user,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
const changePassword = async (req, res) => {
  try {
    await authService.changePassword(req.user.id, req.body);

    res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  login,
  forgotPassword,
  resetPassword,
  profile,
  changePassword,
};