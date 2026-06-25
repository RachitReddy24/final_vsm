const roles = [
  {
    id: 1,
    name: "ADMIN",
    description: "System Administrator",
  },
  {
    id: 2,
    name: "RECEPTIONIST",
    description: "Reception Desk User",
  },
  {
    id: 3,
    name: "HOST",
    description: "Employee / Host",
  },
];

const getAllRoles = async () => {
  return roles;
};

const getRoleById = async (id) => {
  const role = roles.find((r) => r.id === id);

  if (!role) {
    throw new Error("Role not found");
  }

  return role;
};

module.exports = {
  getAllRoles,
  getRoleById,
};