const employeeService = require("../services/employee.service");

const createEmployee = async (req, res) => {
  try {
    const employee = await employeeService.createEmployee(req.body);

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      data: employee,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getAllEmployees(req.query);

    res.status(200).json({
      success: true,
      data: employees,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await employeeService.getEmployeeById(
      Number(req.params.id)
    );

    res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employee = await employeeService.updateEmployee(
      Number(req.params.id),
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Employee updated successfully",
      data: employee,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    await employeeService.deleteEmployee(Number(req.params.id));

    res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};