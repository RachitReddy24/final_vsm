const visitLogService = require("../services/visitLog.service");

const getAllVisitLogs = async (req, res) => {
  try {
    const logs = await visitLogService.getAllVisitLogs();

    res.status(200).json({
      success: true,
      data: logs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getVisitLogById = async (req, res) => {
  try {
    const log = await visitLogService.getVisitLogById(
      Number(req.params.id)
    );

    res.status(200).json({
      success: true,
      data: log,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllVisitLogs,
  getVisitLogById,
};