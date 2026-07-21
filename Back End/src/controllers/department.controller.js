const departmentService = require("../services/department.service");

const createDepartment = async (req, res) => {
  try {
    const department = await departmentService.createDepartment(req.body);

    res.status(201).json({
      success: true,
      message: "Department created successfully",
      data: department,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllDepartments = async (req, res) => {
  try {
    const departments = await departmentService.getAllDepartments(req.query);

    res.status(200).json({
      success: true,
      data: departments,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getDepartmentById = async (req, res) => {
  try {
    const department = await departmentService.getDepartmentById(
      Number(req.params.id)
    );

    res.status(200).json({
      success: true,
      data: department,
    });

  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const updateDepartment = async (req, res) => {
  try {
    const department = await departmentService.updateDepartment(
      Number(req.params.id),
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Department updated successfully",
      data: department,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteDepartment = async (req, res) => {
  try {
    await departmentService.deleteDepartment(Number(req.params.id));

    res.status(200).json({
      success: true,
      message: "Department deleted successfully",
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
};