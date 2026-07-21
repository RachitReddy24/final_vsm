const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee.controller");

const authenticate = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  employeeController.createEmployee
);

router.get(
  "/",
  authenticate,
  employeeController.getAllEmployees
);

router.get(
  "/:id",
  authenticate,
  employeeController.getEmployeeById
);

router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  employeeController.updateEmployee
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  employeeController.deleteEmployee
);

module.exports = router;