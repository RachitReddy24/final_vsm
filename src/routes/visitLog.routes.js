const express = require("express");
const router = express.Router();

const visitLogController = require("../controllers/visitLog.controller");
const authenticate = require("../middleware/auth.middleware");

router.get("/", authenticate, visitLogController.getAllVisitLogs);

router.get("/:id", authenticate, visitLogController.getVisitLogById);

module.exports = router;