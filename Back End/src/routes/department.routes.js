const express = require("express");
const router = express.Router();

const departmentController = require("../controllers/department.controller");
const authenticate = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");
const validate = require("../middleware/validation.middleware");

const {
  createDepartmentValidation,
  updateDepartmentValidation,
} = require("../validators/department.validator");

router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  createDepartmentValidation,
  validate,
  departmentController.createDepartment
);
router.get("/", authenticate, departmentController.getAllDepartments);

router.get("/:id", authenticate, departmentController.getDepartmentById);

router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  updateDepartmentValidation,
  validate,
  departmentController.updateDepartment
);
router.delete("/:id", authenticate, authorize("ADMIN"), departmentController.deleteDepartment);

module.exports = router;