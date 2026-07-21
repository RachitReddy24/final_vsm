const reportService = require("../services/report.service");

const getVisitorReport = async (req, res) => {
  try {
    const data = await reportService.getVisitorReport();

    res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getMeetingReport = async (req, res) => {
  try {
    const data = await reportService.getMeetingReport();

    res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getCheckInReport = async (req, res) => {
  try {
    const data = await reportService.getCheckInReport();

    res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getFeedbackReport = async (req, res) => {
  try {
    const data = await reportService.getFeedbackReport();

    res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const exportReport = async (req, res) => {
  try {
    const data = await reportService.exportReport();

    res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
const getReportSummary = async (req, res) => {
  try {
    const data = await reportService.getReportSummary();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getMonthlyVisitorReport = async (req, res) => {
  try {
    const data = await reportService.getMonthlyVisitorReport();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getVisitorStatusReport = async (req, res) => {
  try {
    const data = await reportService.getVisitorStatusReport();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  getVisitorReport,
  getMeetingReport,
  getCheckInReport,
  getFeedbackReport,
  getReportSummary,
  getMonthlyVisitorReport,
  getVisitorStatusReport,
    exportReport,
};
  