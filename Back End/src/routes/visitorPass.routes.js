const express = require("express");
const router = express.Router();

const visitorPassController = require("../controllers/visitorPass.controller");

router.get(
  "/:visitorCode",
  visitorPassController.getVisitorPass
);

module.exports = router;