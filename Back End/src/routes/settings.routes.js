const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");
const upload = require("../middleware/logoUpload.middleware");


const settingsController = require("../controllers/settings.controller");

router.get(
  "/",
  authenticate,
  authorize("ADMIN"),
  settingsController.getSettings
);

router.put(
  "/",
  authenticate,
  authorize("ADMIN"),
  upload.single("companyLogo"),
  settingsController.updateSettings
);

module.exports = router;