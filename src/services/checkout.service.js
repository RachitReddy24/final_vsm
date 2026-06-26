const prisma = require("../config/prisma");

const createCheckOut = async (data) => {

  const visitor = await prisma.visitor.findUnique({
    where: {
      id: Number(data.visitorId),
    },
  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  if (visitor.status !== "CHECKED_IN") {
    throw new Error("Visitor is not checked in");
  }

  const checkout = await prisma.checkOut.create({
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
      status: "CHECKED_OUT",
      checkedOutAt: new Date(),
    },
  });

  return checkout;
};

const getAllCheckOuts = async () => {
  return await prisma.checkOut.findMany({
    include: {
      visitor: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getCheckOutById = async (id) => {

  const checkout = await prisma.checkOut.findUnique({
    where: {
      id,
    },
    include: {
      visitor: true,
    },
  });

  if (!checkout) {
    throw new Error("Check-Out record not found");
  }

  return checkout;
};

module.exports = {
  createCheckOut,
  getAllCheckOuts,
  getCheckOutById,
};