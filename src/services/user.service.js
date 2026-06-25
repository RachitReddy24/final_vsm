const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");

const createUser = async (data) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      phone: data.phone,
      role: data.role,
      isActive: true,
    },
  });

  return user;
};
const getAllUsers = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      role: true,
      isActive: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      role: true,
      isActive: true,
      createdAt: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

const updateUser = async (id, data) => {
  return await prisma.user.update({
    where: { id },
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: data.role,
      isActive: data.isActive,
    },
  });
};

const deleteUser = async (id) => {
  await prisma.user.delete({
    where: { id },
  });
};
module.exports = {
   createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};