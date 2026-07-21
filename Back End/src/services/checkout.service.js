const prisma = require("../config/prisma");

const checkOutVisitor = async (visitorId) => {

  const visitor = await prisma.visitor.findUnique({

    where: {
      id: Number(visitorId),
    },

    include: {
      host: {
        include: {
          department: true,
        },
      },

      meeting: true,

      feedback: true,

      checkIn: true,

      checkOut: true,
    },

  });

  if (!visitor)
    throw new Error("Visitor not found");

  if (visitor.status !== "CHECKED_IN")
    throw new Error("Visitor is not checked in");

  if (visitor.checkOut)
    throw new Error("Visitor already checked out");
if (visitor.checkOut)
  throw new Error("Visitor already checked out");
  // Create checkout record
  const checkOut = await prisma.checkOut.create({

    data: {
      visitorId: visitor.id,
    },

  });

  // Update visitor
  const updatedVisitor = await prisma.visitor.update({

    where: {
      id: visitor.id,
    },

    data: {
      status: "CHECKED_OUT",
      checkedOutAt: new Date(),
    },

    include: {

      host: {
        include: {
          department: true,
        },
      },

      meeting: true,

      feedback: true,

      checkIn: true,

      checkOut: true,

    },

  });
    // Calculate visit duration
  let duration = null;

  if (updatedVisitor.checkedInAt && updatedVisitor.checkedOutAt) {

    const diff =
      updatedVisitor.checkedOutAt - updatedVisitor.checkedInAt;

    const hours = Math.floor(diff / (1000 * 60 * 60));

    const minutes = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60)
    );

    duration = `${hours} Hr ${minutes} Min`;

  }
    return {

    visitorName: updatedVisitor.name,

    company: updatedVisitor.company,

    department:
      updatedVisitor.host.department?.name,

    hostName:
      updatedVisitor.host.name,

    visitDate:
      updatedVisitor.checkedInAt,

    checkedInAt:
      updatedVisitor.checkedInAt,

    checkedOutAt:
      updatedVisitor.checkedOutAt,

    duration,

    approvalStatus: "Approved",

    feedbackSubmitted:
      !!updatedVisitor.feedback,

    checkOutStatus: "Completed",

    visitor: updatedVisitor,

  };

};

module.exports = {
  checkOutVisitor,
};