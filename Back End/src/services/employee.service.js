const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
// Create Employee
const createEmployee = async (data) => {
  // Check duplicate email
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  // Check department
  const department = await prisma.department.findUnique({
    where: {
      id: Number(data.departmentId),
    },
  });

  if (!department) {
    throw new Error("Department not found");
  }

  // Generate Employee ID
  const lastEmployee = await prisma.user.findFirst({
    orderBy: {
      id: "desc",
    },
  });

  let employeeId = "EMP001";

  if (lastEmployee) {
    const lastNumber = Number(lastEmployee.employeeId.replace("EMP", ""));
    employeeId = `EMP${String(lastNumber + 1).padStart(3, "0")}`;
  }

  // Hash Password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  // Create Employee
  return await prisma.user.create({
    data: {
      employeeId,
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: hashedPassword,
      role: data.role,
      departmentId: Number(data.departmentId),
      isActive: true,
    },
    include: {
      department: true,
    },
  });
};

// Get All Employees
const getAllEmployees = async ({
  search = "",
  page = 1,
  limit = 10,
}) => {
  page = Number(page);
  limit = Number(limit);

  const where = {
  role: "HOST",

  OR: [
    {
      name: {
        contains: search,
      },
    },
    {
      email: {
        contains: search,
      },
    },
    {
      employeeId: {
        contains: search,
      },
    },
  ],
};

  const employees = await prisma.user.findMany({
    where,
    include: {
      department: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  const total = await prisma.user.count({
    where,
  });

  return {
    employees,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};

// Get Employee By ID
const getEmployeeById = async (id) => {
  const employee = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      department: true,
    },
  });

  if (!employee) {
    throw new Error("Employee not found");
  }

  return employee;
};

// Update Employee
const updateEmployee = async (id, data) => {
  const employee = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!employee) {
    throw new Error("Employee not found");
  }

  const department = await prisma.department.findUnique({
    where: {
      id: Number(data.departmentId),
    },
  });

  if (!department) {
    throw new Error("Department not found");
  }

  return await prisma.user.update({
    where: {
      id,
    },
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: data.role,
      departmentId: Number(data.departmentId),
      isActive: data.isActive,
    },
    include: {
      department: true,
    },
  });
};

// Delete Employee
const deleteEmployee = async (id) => {
  const employee = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!employee) {
    throw new Error("Employee not found");
  }

  await prisma.user.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};