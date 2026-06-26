const checkoutService = require("../services/checkout.service");

const createCheckOut = async (req, res) => {
  try {
    const checkout = await checkoutService.createCheckOut(req.body);

    res.status(201).json({
      success: true,
      message: "Visitor checked out successfully",
      data: checkout,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllCheckOuts = async (req, res) => {
  try {
    const checkouts = await checkoutService.getAllCheckOuts();

    res.status(200).json({
      success: true,
      data: checkouts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCheckOutById = async (req, res) => {
  try {
    const checkout = await checkoutService.getCheckOutById(
      Number(req.params.id)
    );

    res.status(200).json({
      success: true,
      data: checkout,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCheckOut,
  getAllCheckOuts,
  getCheckOutById,
};