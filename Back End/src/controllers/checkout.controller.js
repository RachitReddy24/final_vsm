const checkoutService = require("../services/checkout.service");

const checkOutVisitor = async (req, res) => {

  try {

    const data = await checkoutService.checkOutVisitor(
      req.params.visitorId
    );

    res.status(200).json({
      success: true,
      message: "Visitor checked out successfully",
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
  checkOutVisitor,
};