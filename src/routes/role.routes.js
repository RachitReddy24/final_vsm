const express = require("express");
const router = express.Router();

const roleController = require("../controllers/role.controller");
const authenticate = require("../middleware/auth.middleware");

router.get("/", authenticate, roleController.getAllRoles);
router.get("/:id", authenticate, roleController.getRoleById);

module.exports = router;