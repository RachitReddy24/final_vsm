const profileService = require("../services/profile.service");

const getProfile = async (req, res) => {

  try {

    const profile = await profileService.getProfile(req.user.id);

    res.status(200).json({
      success: true,
      data: profile,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }

};

const updateProfile = async (req, res) => {

  try {

    const profile = await profileService.updateProfile(
      req.user.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: profile,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }

};

module.exports = {
  getProfile,
  updateProfile,
};