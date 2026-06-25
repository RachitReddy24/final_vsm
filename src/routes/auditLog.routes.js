const express = require("express");

const router = express.Router();

const auditLogController = require("../controllers/auditLog.controller");

router.get("/", auditLogController.getAllAuditLogs);

router.get("/:id", auditLogController.getAuditLogById);

module.exports = router;