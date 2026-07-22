const settingsService = require("../services/settings.service");

const getSettings = async (req, res) => {

  try {

    const settings = await settingsService.getSettings();

    res.status(200).json({
      success: true,
      data: settings,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }

};

const updateSettings = async (req, res) => {
  try {
    if (req.file) {
      req.body.companyLogo = req.file.filename;
    }

    const settings = await settingsService.updateSettings(req.body);

    res.status(200).json({
      success: true,
      message: "Settings updated successfully",
      data: settings,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  getSettings,
  updateSettings,
};