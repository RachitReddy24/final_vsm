const prisma = require("../config/prisma");

const createDepartment = async (data) => {

  const exists = await prisma.department.findUnique({
    where: {
      name: data.name,
    },
  });

  if (exists) {
    throw new Error("Department already exists");
  }

  return await prisma.department.create({
    data: {
      name: data.name,
      description: data.description,
    },
  });
};

const getAllDepartments = async ({ search = "", page = 1, limit = 10 }) => {

  page = Number(page);
  limit = Number(limit);

  const departments = await prisma.department.findMany({
    where: {
      name: {
        contains: search,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  const total = await prisma.department.count({
    where: {
      name: {
        contains: search,
      },
    },
  });

  return {
    departments,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const getDepartmentById = async (id) => {

  const department = await prisma.department.findUnique({
    where: {
      id,
    },
  });

  if (!department) {
    throw new Error("Department not found");
  }

  return department;
};

const updateDepartment = async (id, data) => {

  const department = await prisma.department.findUnique({
    where: {
      id,
    },
  });

  if (!department) {
    throw new Error("Department not found");
  }

  return await prisma.department.update({
    where: {
      id,
    },
    data: {
      name: data.name,
      description: data.description,
    },
  });
};

const deleteDepartment = async (id) => {

  const department = await prisma.department.findUnique({
    where: {
      id,
    },
  });

  if (!department) {
    throw new Error("Department not found");
  }

  await prisma.department.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
};