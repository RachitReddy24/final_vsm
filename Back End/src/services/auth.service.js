const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");
const transporter = require("../config/mailer");
const passwordResetTemplate = require("../templates/passwordReset.template");
const jwt = require("jsonwebtoken");
const { generateResetToken } = require("../utils/jwt");
const login = async (data) => {

  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
    include: {
      department: true,
    },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  if (!user.isActive) {
    throw new Error("Your account is inactive");
  }

  const isPasswordValid = await bcrypt.compare(
    data.password,
    user.password
  );

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken(user);

  return {
    token,
    user: {
      id: user.id,
      employeeId: user.employeeId,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      department: user.department,
      profileImage: user.profileImage,
    },
  };
};
const forgotPassword = async (email) => {

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Email not found");
  }

  const token = generateResetToken(user);

  const resetUrl =
    `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: "Reset Password",
    html: passwordResetTemplate(user.name, resetUrl),
  });

  return;
};
const resetPassword = async (data) => {

  const decoded = jwt.verify(
    data.token,
    process.env.JWT_SECRET
  );

  const user = await prisma.user.findUnique({
    where: {
      id: decoded.id,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const hashedPassword = await bcrypt.hash(
    data.password,
    10
  );

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      password: hashedPassword,
    },
  });

  return;
};


const profile = async (id) => {

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      department: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return {
    id: user.id,
    employeeId: user.employeeId,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    profileImage: user.profileImage,
    department: user.department,
  };
};


const changePassword = async (userId, data) => {

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(
    data.currentPassword,
    user.password
  );

  if (!isPasswordValid) {
    throw new Error("Current password is incorrect");
  }

  if (data.currentPassword === data.newPassword) {
    throw new Error("New password cannot be the same as the current password");
  }

  const hashedPassword = await bcrypt.hash(data.newPassword, 10);

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: hashedPassword,
    },
  });

  return;
};
module.exports = {
  login,
  forgotPassword,
  resetPassword,
  profile,
  changePassword,
};