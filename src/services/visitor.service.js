const prisma = require("../config/prisma");

const createVisitor = async (data) => {

  // Check Host
  const host = await prisma.user.findUnique({
    where: {
      id: Number(data.hostId),
    },
  });

  if (!host) {
    throw new Error("Host not found");
  }

  // Generate Visitor Code
  const visitorCode =
    "VIS" + Date.now();

  const visitor = await prisma.visitor.create({
    data: {
      name: data.name,
      mobileNumber: data.mobileNumber,
      email: data.email,
      purpose: data.purpose,
      cameFrom: data.cameFrom,
      photo: data.photo,
      idProof: data.idProof,

      visitorCode,

      visitType: data.visitType,

      hostId: Number(data.hostId),
    },

    include: {
      host: true,
    },
  });

  return visitor;
};
const getAllVisitors = async () => {
  return await prisma.visitor.findMany({
    include: {
      host: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};
const getVisitorById = async (id) => {

  const visitor = await prisma.visitor.findUnique({
    where: {
      id,
    },

    include: {
      host: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          role: true,
        },
      },

      meetings: true,
      otpRecords: true,
      qrCodes: true,
      documents: true,
      visitLogs: true,
    },
  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  return visitor;
};
const updateVisitor = async (id, data) => {

  const visitor = await prisma.visitor.findUnique({
    where: {
      id,
    },
  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  const host = await prisma.user.findUnique({
    where: {
      id: Number(data.hostId),
    },
  });

  if (!host) {
    throw new Error("Host not found");
  }

  return await prisma.visitor.update({
    where: {
      id,
    },
    data: {
      name: data.name,
      mobileNumber: data.mobileNumber,
      email: data.email,
      purpose: data.purpose,
      cameFrom: data.cameFrom,
      photo: data.photo,
      idProof: data.idProof,
      visitType: data.visitType,
      status: data.status,
      hostId: Number(data.hostId),
    },
    include: {
      host: true,
    },
  });
};
const deleteVisitor = async (id) => {

  const visitor = await prisma.visitor.findUnique({
    where: {
      id,
    },
  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  await prisma.visitor.delete({
    where: {
      id,
    },
  });

  return;
};
const searchVisitors = async (keyword) => {

  return await prisma.visitor.findMany({
    where: {
      OR: [
        {
          name: {
            contains: keyword,
          },
        },
        {
          email: {
            contains: keyword,
          },
        },
        {
          mobileNumber: {
            contains: keyword,
          },
        },
        {
          visitorCode: {
            contains: keyword,
          },
        },
      ],
    },

    include: {
      host: {
        select: {
          id: true,
          name: true,
          role: true,
        },
      },
    },
  });
};
const getVisitorsByStatus = async (status) => {

  return await prisma.visitor.findMany({
    where: {
      status: status.toUpperCase(),
    },

    include: {
      host: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
};
const getVisitorHistory = async (id) => {

  const visitor = await prisma.visitor.findUnique({
    where: {
      id,
    },

    include: {
      host: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },

      meetings: true,
      checkIns: true,
      checkOuts: true,
      visitLogs: true,
      documents: true,
      otpRecords: true,
      qrCodes: true,
    },
  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  return visitor;
};
module.exports = {
  createVisitor,
    getAllVisitors,
    getVisitorById,
    updateVisitor,
    deleteVisitor,
    searchVisitors,
    getVisitorsByStatus,
    getVisitorHistory
};
   