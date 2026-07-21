const multer = require("multer");

const uploadErrorHandler = (
  err,
  req,
  res,
  next
) => {

  if (err instanceof multer.MulterError) {

    if (err.code === "LIMIT_FILE_SIZE") {

      return res.status(400).json({
        success: false,
        message: "File size should not exceed 5 MB",
      });

    }

  }

  if (err) {

    return res.status(400).json({
      success: false,
      message: err.message,
    });

  }

  next();

};

module.exports = uploadErrorHandler;