const auditLogService = require("../services/auditLog.service");

const getAllAuditLogs = async (req, res) => {
  try {
    const logs = await auditLogService.getAllAuditLogs();

    res.status(200).json({
      success: true,
      message: "Audit logs fetched successfully",
      data: logs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAuditLogById = async (req, res) => {
  try {
    const { id } = req.params;

    const log = await auditLogService.getAuditLogById(id);

    if (!log) {
      return res.status(404).json({
        success: false,
        message: "Audit log not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Audit log fetched successfully",
      data: log,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllAuditLogs,
  getAuditLogById,
};