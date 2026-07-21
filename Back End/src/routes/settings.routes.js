const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

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
  settingsController.updateSettings
);

module.exports = router;