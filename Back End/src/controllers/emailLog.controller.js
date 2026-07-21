const emailLogService = require("../services/emailLog.service");

const getEmailLogs = async (req, res) => {
  try {
    const logs = await emailLogService.getEmailLogs(req.query);

    res.status(200).json({
      success: true,
      data: logs,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getEmailLogs,
};