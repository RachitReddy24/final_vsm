const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");

const createUser = async (data) => {

  // Check Employee ID
  const employee = await prisma.user.findUnique({
    where: {
      employeeId: data.employeeId,
    },
  });

  if (employee) {
    throw new Error("Employee ID already exists");
  }

  // Check Email
  const email = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (email) {
    throw new Error("Email already exists");
  }

  // Check Department
  if (data.departmentId) {

    const department = await prisma.department.findUnique({
      where: {
        id: Number(data.departmentId),
      },
    });

    if (!department) {
      throw new Error("Department not found");
    }

  }

  // Encrypt Password
  const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({

    data: {

      employeeId: data.employeeId,

      name: data.name,

      email: data.email,

      phone: data.phone,

      password: hashedPassword,

      profileImage: data.profileImage,

      role: data.role,

      departmentId: data.departmentId
        ? Number(data.departmentId)
        : null,

      isActive: true,

    },

    include: {
      department: true,
    },

  });

const { password, ...userWithoutPassword } = user;

return userWithoutPassword;
};
const getAllUsers = async () => {

const users = await prisma.user.findMany({
    include: {
      department: true,
    },

    orderBy: {
      createdAt: "desc",
    },

  });
return users.map(({ password, ...user }) => user);
};
const getUserById = async (id) => {

  const user = await prisma.user.findUnique({

    where: {
      id: Number(id),
    },

    include: {
      department: true,
    },

  });

  if (!user) {
    throw new Error("User not found");
  }

const { password, ...userWithoutPassword } = user;

return userWithoutPassword;
};
const updateUser = async (id, data) => {

  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!user) {
    throw new Error("User not found");
  }
  // Check Employee ID
if (
  data.employeeId &&
  data.employeeId !== user.employeeId
) {

  const employee = await prisma.user.findUnique({
    where: {
      employeeId: data.employeeId,
    },
  });

  if (employee) {
    throw new Error("Employee ID already exists");
  }

}

// Check Email
if (
  data.email &&
  data.email !== user.email
) {

  const email = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (email) {
    throw new Error("Email already exists");
  }

}

  let hashedPassword = user.password;

  if (data.password) {
    hashedPassword = await bcrypt.hash(data.password, 10);
  }

const updatedUser = await prisma.user.update({
    where: {
      id: Number(id),
    },

    data: {

      employeeId: data.employeeId,

      name: data.name,

      email: data.email,

      phone: data.phone,

      password: hashedPassword,

      profileImage: data.profileImage,

      role: data.role,

      isActive:
        data.isActive !== undefined
          ? data.isActive
          : user.isActive,

      departmentId: data.departmentId
        ? Number(data.departmentId)
        : null,

    },

    include: {
      department: true,
    },

  });
const { password, ...userWithoutPassword } = updatedUser;

return userWithoutPassword;
};
const deleteUser = async (id) => {

  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });

  return {
    message: "User deleted successfully",
  };

};
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};