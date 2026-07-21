const visitorPassService = require("../services/visitorPass.service");

const getVisitorPass = async (req, res) => {

  try {

    const data = await visitorPassService.getVisitorPass(
      req.params.visitorCode
    );

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
  getVisitorPass,
};