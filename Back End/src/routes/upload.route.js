const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/visitors");
  },
  filename: (req, file, cb) => {
    cb(null, `visitor-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

router.post(
  "/visitor-photo",
  upload.single("photo"),
  (req, res) => {
    res.json({
      success: true,
      filename: req.file.filename,
      path: req.file.path,
    });
  }
);

module.exports = router;