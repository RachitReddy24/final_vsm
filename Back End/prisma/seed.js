const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {

  // Department
  const department = await prisma.department.upsert({
    where: {
      name: "Administration",
    },
    update: {},
    create: {
      name: "Administration",
      description: "System Administration",
    },
  });

  // Hash Password
  const password = await bcrypt.hash("Admin@123", 10);

  // Admin User
  await prisma.user.upsert({
    where: {
      email: "admin@vms.com",
    },
    update: {},
    create: {
      employeeId: "EMP001",
      name: "System Admin",
      email: "admin@vms.com",
      phone: "9876543210",
      password,
      role: "ADMIN",
      departmentId: department.id,
      isActive: true,
    },
  });

  console.log("✅ Admin user created successfully");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });