const prisma = require("../config/prisma");

const createCheckIn = async (data) => {

  const visitor = await prisma.visitor.findUnique({
    where: {
      id: Number(data.visitorId),
    },
  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  if (visitor.status === "CHECKED_IN") {
    throw new Error("Visitor already checked in");
  }

  const checkin = await prisma.checkIn.create({
    data: {
      visitorId: Number(data.visitorId),
    },
    include: {
      visitor: true,
    },
  });

  await prisma.visitor.update({
    where: {
      id: Number(data.visitorId),
    },
    data: {
      status: "CHECKED_IN",
      checkedInAt: new Date(),
    },
  });

  return checkin;
};

const getAllCheckIns = async () => {
  return await prisma.checkIn.findMany({
    include: {
      visitor: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getCheckInById = async (id) => {

  const checkin = await prisma.checkIn.findUnique({
    where: {
      id,
    },
    include: {
      visitor: true,
    },
  });

  if (!checkin) {
    throw new Error("Check-In record not found");
  }

  return checkin;
};

module.exports = {
  createCheckIn,
  getAllCheckIns,
  getCheckInById,
};