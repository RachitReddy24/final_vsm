const prisma = require("../config/prisma");

const getFeedbackPage = async (visitorId) => {

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

    },

  });

  if (!visitor)
    throw new Error("Visitor not found");

  if (visitor.status !== "CHECKED_OUT")
    throw new Error("Visitor has not checked out yet");

  return visitor;

};
const submitFeedback = async (visitorId, data) => {

  const visitor = await prisma.visitor.findUnique({

    where: {
      id: Number(visitorId),
    },

    include: {
      feedback: true,
      meeting: true,
      host: true,
    },

  });

  if (!visitor)
    throw new Error("Visitor not found");

  if (visitor.status !== "CHECKED_OUT")
    throw new Error("Visitor must check out before submitting feedback");

  if (visitor.feedback)
    throw new Error("Feedback already submitted");

  if (data.rating < 1 || data.rating > 5)
    throw new Error("Rating must be between 1 and 5");
  const feedback = await prisma.feedback.create({

    data: {

      visitorId: visitor.id,

      rating: Number(data.rating),

      comments: data.comments,

    },

  });
    if (visitor.meetingId) {

    await prisma.meeting.update({

      where: {
        id: visitor.meetingId,
      },

      data: {
        status: "COMPLETED",
        completedAt: new Date(),
      },

    });

  }
    return {

    message: "Feedback submitted successfully",

    visitorName: visitor.name,

    hostName: visitor.host.name,

    rating: feedback.rating,

    comments: feedback.comments,

    submittedAt: feedback.createdAt,

  };

};

module.exports = {
  getFeedbackPage,
  submitFeedback,
};