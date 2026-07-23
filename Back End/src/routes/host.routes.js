const express = require("express");
const router = express.Router();

const hostController = require("../controllers/host.controller");

router.get("/approve/:token", hostController.approveVisitor);

router.get("/reject/:token", hostController.rejectVisitor);

module.exports = router;