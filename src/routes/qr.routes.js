const express = require("express");
const router = express.Router();

const qrController = require("../controllers/qr.controller");
const authenticate = require("../middleware/auth.middleware");

router.post("/generate", authenticate, qrController.generateQR);

router.get("/:visitorId", authenticate, qrController.getQRByVisitor);

module.exports = router;