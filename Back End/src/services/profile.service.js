const prisma = require("../config/prisma");

const getProfile = async (userId) => {

  const user = await prisma.user.findUnique({

    where: {
      id: Number(userId),
    },

    include: {
      department: true,
    },

  });

  if (!user) {
    throw new Error("User not found");
  }

  const { password, ...profile } = user;

  return profile;

};

const updateProfile = async (userId, data) => {

  const user = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const updatedUser = await prisma.user.update({

    where: {
      id: Number(userId),
    },

    data: {

      name: data.name ?? user.name,

      phone: data.phone ?? user.phone,

      profileImage:
        data.profileImage ?? user.profileImage,

    },

    include: {
      department: true,
    },

  });

  const { password, ...profile } = updatedUser;

  return profile;

};

module.exports = {
  getProfile,
  updateProfile,
};