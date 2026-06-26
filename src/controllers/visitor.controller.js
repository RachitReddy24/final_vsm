const visitorService = require("../services/visitor.service");

const createVisitor = async (req, res) => {
  try {
    const visitor = await visitorService.createVisitor(req.body);

    res.status(201).json({
      success: true,
      message: "Visitor created successfully",
      data: visitor,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
const getAllVisitors = async (req, res) => {
  try {
    const visitors = await visitorService.getAllVisitors();

    res.status(200).json({
      success: true,
      data: visitors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getVisitorById = async (req, res) => {
  try {
    const visitor = await visitorService.getVisitorById(
      Number(req.params.id)
    );

    res.status(200).json({
      success: true,
      data: visitor,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
const updateVisitor = async (req, res) => {
  try {
    const visitor = await visitorService.updateVisitor(
      Number(req.params.id),
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Visitor updated successfully",
      data: visitor,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
const deleteVisitor = async (req, res) => {
  try {
    await visitorService.deleteVisitor(Number(req.params.id));

    res.status(200).json({
      success: true,
      message: "Visitor deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
const searchVisitors = async (req, res) => {
  try {
    const { keyword } = req.query;

    const visitors = await visitorService.searchVisitors(keyword);

    res.status(200).json({
      success: true,
      data: visitors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getVisitorsByStatus = async (req, res) => {
  try {
    const visitors = await visitorService.getVisitorsByStatus(
      req.params.status
    );

    res.status(200).json({
      success: true,
      data: visitors,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
const getVisitorHistory = async (req, res) => {
  try {
    const history = await visitorService.getVisitorHistory(
      Number(req.params.id)
    );

    res.status(200).json({
      success: true,
      data: history,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createVisitor,
  getAllVisitors,
  getVisitorById,
  updateVisitor,
  deleteVisitor,
  searchVisitors,
  getVisitorsByStatus,
  getVisitorHistory
};
  
  
  