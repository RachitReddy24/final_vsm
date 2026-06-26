const prisma = require("../config/prisma");

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// ================= SEND OTP =================

const sendOTP = async (data) => {

  const visitor = await prisma.visitor.findUnique({
    where: {
      id: Number(data.visitorId),
    },
  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  const otp = generateOTP();

  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  const otpRecord = await prisma.oTP.create({
    data: {
      visitorId: Number(data.visitorId),
      otp,
      expiresAt,
    },
  });

  return otpRecord;
};

// ================= VERIFY OTP =================

const verifyOTP = async (data) => {

  const otpRecord = await prisma.oTP.findFirst({
    where: {
      visitorId: Number(data.visitorId),
      otp: data.otp,
      isVerified: false,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!otpRecord) {
    throw new Error("Invalid OTP");
  }

  if (new Date() > otpRecord.expiresAt) {
    throw new Error("OTP Expired");
  }

  return await prisma.oTP.update({
    where: {
      id: otpRecord.id,
    },
    data: {
      isVerified: true,
    },
  });
};

// ================= RESEND OTP =================

const resendOTP = async (data) => {

  const visitor = await prisma.visitor.findUnique({
    where: {
      id: Number(data.visitorId),
    },
  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  const otp = generateOTP();

  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  const otpRecord = await prisma.oTP.create({
    data: {
      visitorId: Number(data.visitorId),
      otp,
      expiresAt,
    },
  });

  return otpRecord;
};

module.exports = {
  sendOTP,
  verifyOTP,
  resendOTP,
};