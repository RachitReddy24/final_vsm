const express = require("express");
const router = express.Router();

const visitorController = require("../controllers/visitor.controller");
const authenticate = require("../middleware/auth.middleware");

router.post("/", authenticate, visitorController.createVisitor);
router.get("/", authenticate, visitorController.getAllVisitors);
router.get("/search", authenticate, visitorController.searchVisitors);
router.get( "/status/:status",authenticate,visitorController.getVisitorsByStatus);
router.get("/history/:id",authenticate,visitorController.getVisitorHistory);
router.get("/:id", authenticate, visitorController.getVisitorById);
router.put("/:id", authenticate, visitorController.updateVisitor);
router.delete("/:id", authenticate, visitorController.deleteVisitor);
module.exports = router;