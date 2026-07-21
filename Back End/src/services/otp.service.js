const prisma = require("../config/prisma");

const generateOTP = require("../utils/otpGenerator");

const { sendSMS } = require("./sms.service");


  const sendOTP = async (mobileNumber) => {

  const otp = generateOTP();

  await prisma.oTP.deleteMany({
    where: {
      mobileNumber,
    },
  });

  await prisma.oTP.create({
    data: {
      mobileNumber,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
      verified: false,
    },
  });

  await sendSMS(
    mobileNumber,
    `Your VMS verification OTP is ${otp}. It expires in 5 minutes.`
  );

};
const verifyOTP = async (data) => {

  const otpRecord = await prisma.oTP.findFirst({
    where: {
      mobileNumber: data.mobileNumber,
      otp: data.otp,
    },
  });

  if (!otpRecord) {
    throw new Error("Invalid OTP");
  }

  if (otpRecord.verified) {
    throw new Error("OTP already used");
  }

  if (new Date() > otpRecord.expiresAt) {
    throw new Error("OTP expired");
  }

  await prisma.oTP.update({
    where: {
      id: otpRecord.id,
    },
    data: {
      verified: true,
    },
  });
};
module.exports = {
  sendOTP,
  verifyOTP,
};