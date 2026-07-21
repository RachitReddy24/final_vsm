const unplannedVisitService = require("../services/unplannedVisit.service");

const createUnplannedVisit = async (req, res) => {
  try {

    const visitor =
      await unplannedVisitService.createUnplannedVisit(req.body);

    res.status(201).json({
      success: true,
      message: "Walk-in visitor registered successfully",
      data: visitor,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};

const getAllUnplannedVisits = async (req, res) => {
  try {

    const visitors =
      await unplannedVisitService.getAllUnplannedVisits(req.query);

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

const getUnplannedVisitById = async (req, res) => {
  try {

    const visitor =
      await unplannedVisitService.getUnplannedVisitById(
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
const approveUnplannedVisit = async (req, res) => {
  try {

    const visitor = await unplannedVisitService.approveUnplannedVisit(
      Number(req.params.id)
    );

    res.status(200).json({
      success: true,
      message: "Walk-in visitor approved successfully",
      data: visitor,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};

const rejectUnplannedVisit = async (req, res) => {
  try {

    const visitor = await unplannedVisitService.rejectUnplannedVisit(
      Number(req.params.id)
    );

    res.status(200).json({
      success: true,
      message: "Walk-in visitor rejected successfully",
      data: visitor,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  createUnplannedVisit,
  getAllUnplannedVisits,
  getUnplannedVisitById,
  approveUnplannedVisit,
  rejectUnplannedVisit,
};