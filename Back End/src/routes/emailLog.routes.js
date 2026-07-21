const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const emailLogController = require("../controllers/emailLog.controller");

router.get(
  "/",
  authenticate,
  authorize("ADMIN"),
  emailLogController.getEmailLogs
);

module.exports = router;