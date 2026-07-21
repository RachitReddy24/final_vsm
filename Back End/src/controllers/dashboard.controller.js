const dashboardService = require("../services/dashboard.service");

const getDashboardSummary = async (req, res) => {
  try {
    const data = await dashboardService.getDashboardSummary();

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

const getVisitorChart = async (req, res) => {
  try {
    const data = await dashboardService.getVisitorChart();

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

const getRecentVisitors = async (req, res) => {
  try {
    const data = await dashboardService.getRecentVisitors();

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

const getTodayMeetings = async (req, res) => {
  try {
    const data = await dashboardService.getTodayMeetings();

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
const getRecentActivities = async (req, res) => {

  try {

    const data = await dashboardService.getRecentActivities();

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

module.exports = {
  getDashboardSummary,
  getVisitorChart,
  getRecentVisitors,
  getTodayMeetings,
  getRecentActivities,
};
