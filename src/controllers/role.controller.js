const roleService = require("../services/role.service");

const getAllRoles = async (req, res) => {
  try {
    const roles = await roleService.getAllRoles();

    res.status(200).json({
      success: true,
      data: roles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getRoleById = async (req, res) => {
  try {
    const role = await roleService.getRoleById(Number(req.params.id));

    res.status(200).json({
      success: true,
      data: role,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllRoles,
  getRoleById,
};