const prisma = require("../config/prisma");

const getSettings = async () => {

  let settings = await prisma.settings.findFirst();

  if (!settings) {

    settings = await prisma.settings.create({
      data: {},
    });

  }

  return settings;

};

const updateSettings = async (data) => {

  return await prisma.settings.upsert({

    where: {
      id: 1,
    },

    update: {
      // Company
      companyName: data.companyName,
      companyEmail: data.companyEmail,
      companyPhone: data.companyPhone,
      companyWebsite: data.companyWebsite,
      companyAddress: data.companyAddress,
      companyLogo: data.companyLogo,

      // Visitor Security
      otpLength: data.otpLength,
      otpExpiry: data.otpExpiry,
      maxVisitorsPerDay: data.maxVisitorsPerDay,

      // QR
      qrExpiryHours: data.qrExpiryHours,
      badgeValidity: data.badgeValidity,
      checkInGraceTime: data.checkInGraceTime,

      // Email
      smtpEmail: data.smtpEmail,
      smtpHost: data.smtpHost,
      smtpPort: data.smtpPort,

      // SMS
      smsProvider: data.smsProvider,
      senderId: data.senderId,
      smsApiKey: data.smsApiKey,

      // Working Hours
      officeStartTime: data.officeStartTime,
      officeEndTime: data.officeEndTime,
    },

    create: {
      id: 1,

      companyName: data.companyName,
      companyEmail: data.companyEmail,
      companyPhone: data.companyPhone,
      companyWebsite: data.companyWebsite,
      companyAddress: data.companyAddress,
      companyLogo: data.companyLogo,

      otpLength: data.otpLength,
      otpExpiry: data.otpExpiry,
      maxVisitorsPerDay: data.maxVisitorsPerDay,

      qrExpiryHours: data.qrExpiryHours,
      badgeValidity: data.badgeValidity,
      checkInGraceTime: data.checkInGraceTime,

      smtpEmail: data.smtpEmail,
      smtpHost: data.smtpHost,
      smtpPort: data.smtpPort,

      smsProvider: data.smsProvider,
      senderId: data.senderId,
      smsApiKey: data.smsApiKey,

      officeStartTime: data.officeStartTime,
      officeEndTime: data.officeEndTime,
    },

  });

};

module.exports = {
  getSettings,
  updateSettings,
};