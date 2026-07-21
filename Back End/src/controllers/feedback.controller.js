const feedbackService = require("../services/feedback.service");

const getFeedbackPage = async (req, res) => {

  try {

    const data = await feedbackService.getFeedbackPage(
      req.params.visitorId
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

const submitFeedback = async (req, res) => {

  try {

    const data = await feedbackService.submitFeedback(
      req.params.visitorId,
      req.body
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
  getFeedbackPage,
  submitFeedback,
};