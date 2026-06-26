const qrService = require("../services/qr.service");

const generateQR = async (req, res) => {
  try {
    const qr = await qrService.generateQR(req.body);

    res.status(201).json({
      success: true,
      message: "QR Code generated successfully",
      data: qr,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getQRByVisitor = async (req, res) => {
  try {
    const qr = await qrService.getQRByVisitor(
      Number(req.params.visitorId)
    );

    res.status(200).json({
      success: true,
      data: qr,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  generateQR,
  getQRByVisitor,
};