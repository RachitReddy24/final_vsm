const prisma = require("../config/prisma");

const crypto = require("crypto");
 
const transporter = require("../config/mailer");
 
const saveVisitorPhoto = require("../utils/saveVisitorPhoto");

const { generateQRCode } = require("../utils/qr"); 
const bookingTemplate = require("../templates/booking.template");

const visitorPassTemplate = require("../templates/visitorPass.template");
 
const { createEmailLog } = require("./emailLog.service");

const { createNotification } = require("./notification.service");
const createMeeting = async (data) => {
 
  // Check Host

  const host = await prisma.user.findUnique({

    where: {

      id: Number(data.hostId),

    },

  });
 
  if (!host) {

    throw new Error("Host not found");

  }
 
  if (host.role !== "HOST") {

    throw new Error("Selected employee is not a host");

  }
 
  // Generate Booking Token

  const bookingToken = crypto.randomBytes(32).toString("hex");
 
  // Booking Link Expiry (24 Hours)

  const bookingTokenExpiry = new Date(

    Date.now() + 24 * 60 * 60 * 1000

  );
 
  const meeting = await prisma.meeting.create({

    data: {

      title: data.title,

      description: data.description,

      meetingDate: new Date(data.meetingDate),
 
      hostId: Number(data.hostId),
 
      bookingToken,

      bookingTokenExpiry,

    },
 
    include: {

      host: {

        select: {

          id: true,

          name: true,

          email: true,

          employeeId: true,

        },

      },

    },

  });
 
  const bookingUrl =

    `${process.env.FRONTEND_URL}/register?token=${bookingToken}`;
 
  try {
 
    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: meeting.host.email,

      subject: "Meeting Scheduled - Visitor Registration",

      html: bookingTemplate(meeting, bookingUrl),

    });
 
    await createEmailLog({

      recipientName: meeting.host.name,

      recipientEmail: meeting.host.email,

      recipientType: "HOST",

      emailType: "BOOKING_URL",

      subject: "Meeting Scheduled - Visitor Registration",

      status: "SENT",

    });
 
  } catch (error) {
 
    await createEmailLog({

      recipientName: meeting.host.name,

      recipientEmail: meeting.host.email,

      recipientType: "HOST",

      emailType: "BOOKING_URL",

      subject: "Meeting Scheduled - Visitor Registration",

      status: "FAILED",

      errorMessage: error.message,

    });
 
    console.error("Booking email failed:", error);

  }
 
  await createNotification({

    userId: meeting.hostId,

    title: "New Meeting Scheduled",

    message: `A new meeting "${meeting.title}" has been scheduled for you.`,

  });
 
  return meeting;

};
const getAllMeetings = async ({

  search = "",

  page = 1,

  limit = 10,

}) => {

  page = Number(page);

  limit = Number(limit);
 
  const where = {

    OR: [

      {

        title: {

          contains: search,

        },

      },

      {

        host: {

          name: {

            contains: search,

          },

        },

      },

    ],

  };
 
  const meetings = await prisma.meeting.findMany({

    where,
 
    include: {

      host: {

        select: {

          id: true,

          employeeId: true,

          name: true,

          email: true,

          role: true,

          department: true,

        },

      },
 
      visitor: {

        include: {

          qrCode: true,

        },

      },

    },
 
    orderBy: {

      meetingDate: "desc",

    },
 
    skip: (page - 1) * limit,

    take: limit,

  });
 
  const total = await prisma.meeting.count({

    where,

  });
 
  return {

    meetings,

    pagination: {

      total,

      page,

      limit,

      totalPages: Math.ceil(total / limit),

    },

  };

};
 
const getMeetingById = async (id) => {
 
  const meeting = await prisma.meeting.findUnique({

    where: {

      id: Number(id),

    },
 
    include: {

      host: true,
 
      visitor: {

        include: {

          qrCode: true,

          checkIn: true,

          checkOut: true,

        },

      },

    },

  });
 
  if (!meeting) {

    throw new Error("Meeting not found");

  }
 
  return meeting;

};
 
const updateMeeting = async (id, data) => {
 
  const meeting = await prisma.meeting.findUnique({

    where: {

      id: Number(id),

    },

  });
 
  if (!meeting) {

    throw new Error("Meeting not found");

  }
 
  return await prisma.meeting.update({

    where: {

      id: Number(id),

    },
 
    data: {

      title: data.title,

      description: data.description,

      meetingDate: new Date(data.meetingDate),

      hostId: Number(data.hostId),

    },
 
    include: {

      host: true,

      visitor: {

        include: {

          qrCode: true,

        },

      },

    },

  });

};
 
const deleteMeeting = async (id) => {
 
  const meeting = await prisma.meeting.findUnique({

    where: {

      id: Number(id),

    },

  });
 
  if (!meeting) {

    throw new Error("Meeting not found");

  }
 
  await prisma.meeting.delete({

    where: {

      id: Number(id),

    },

  });
 
  return {

    message: "Meeting deleted successfully",

  };

};
const getMeetingByBookingToken = async (token) => {
 
  const meeting = await prisma.meeting.findUnique({
 
    where: {

      bookingToken: token,

    },
 
    include: {

      host: {

        select: {

          id: true,

          employeeId: true,

          name: true,

          email: true,

          phone: true,

          role: true,

          department: true,

        },

      },

    },
 
  });
 
  if (!meeting) {

    throw new Error("Invalid booking link");

  }
 
  if (

    meeting.bookingTokenExpiry &&

    new Date() > meeting.bookingTokenExpiry

  ) {

    throw new Error("Booking link has expired");

  }
 
  if (meeting.status !== "SCHEDULED") {

    throw new Error("Meeting is no longer available");

  }
 
  return {

    success: true,
 
    meeting: {

      meetingId: meeting.id,

      title: meeting.title,

      description: meeting.description,

      meetingDate: meeting.meetingDate,

      status: meeting.status,
 
      host: {

        id: meeting.host.id,

        employeeId: meeting.host.employeeId,

        name: meeting.host.name,

        email: meeting.host.email,

        phone: meeting.host.phone,

        department: meeting.host.department,

      },

    },

  };
 
};
const registerVisitor = async (token, data, photoFile,idProofFile) => {
 
  // Validate Booking Token

  const meeting = await prisma.meeting.findUnique({

    where: {

      bookingToken: token,

    },

    include: {

      host: true,

      visitor: true,

    },

  });
 
  if (!meeting) {

    throw new Error("Invalid booking link");

  }
 
  if (

    meeting.bookingTokenExpiry &&

    new Date() > meeting.bookingTokenExpiry

  ) {

    throw new Error("Booking link has expired");

  }
 
  if (meeting.status !== "SCHEDULED") {

    throw new Error("Meeting is no longer available");

  }
 
  if (meeting.visitor) {

    throw new Error("Visitor already registered");

  }
 
  // Generate Visitor Code

  const visitorCode =

    "VIS" +

    crypto.randomBytes(4).toString("hex").toUpperCase();
 
  // Save Visitor

const visitor = await prisma.visitor.create({
  data: {
    meetingId: meeting.id,
    hostId: meeting.hostId,

    visitorCode,

    name: data.name,
    email: data.email,
    mobileNumber: data.mobileNumber,

    company: data.company,
    designation: data.designation,

    purpose: data.purpose,
    cameFrom: data.cameFrom,

    photo: photoFile ? photoFile.filename : null,

    idProof: idProofFile ? idProofFile.filename : null,
    visitType: "PLANNED",
    status: "PENDING",
  },

  include: {
    host: true,
    meeting: true,
  },
});
 
  // Generate QR Code

  const qrImage = await generateQRCode(visitorCode);
 
  // Save QR Code

const qrData = await generateQRCode(visitorCode);

await prisma.qRCode.create({
  data: {
    visitorId: visitor.id,
    qrImage: qrData.fileName, // or qrData.filePath
    expiryDate: new Date(meeting.meetingDate),
  },
});
 
  // Send Visitor Email

  try {
   
await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: visitor.email,
  subject: "Visitor Pass",
html: visitorPassTemplate({
  visitorName: visitor.name,
  visitorId: visitor.visitorCode,
  hostName: meeting.host.name,
  meetingTitle: meeting.title,
  meetingDate: new Date(meeting.meetingDate).toLocaleString(),
}),  attachments: [
    {
      filename: qrData.fileName,
      path: qrData.filePath,
    },
  ],
});
 
    await createEmailLog({

      recipientName: visitor.name,

      recipientEmail: visitor.email,

      recipientType: "VISITOR",

      emailType: "APPROVAL",

      subject: "Visitor Pass",

      status: "SENT",

    });
 
  } catch (error) {
 
    console.log(error);
 
    await createEmailLog({

      recipientName: visitor.name,

      recipientEmail: visitor.email,

      recipientType: "VISITOR",

      emailType: "APPROVAL",

      subject: "Visitor Pass",

      status: "FAILED",

      errorMessage: error.message,

    });
 
  }
 
  // Notify Host

  await createNotification({

    userId: meeting.hostId,

    title: "Visitor Registered",

    message: `${visitor.name} has completed registration for "${meeting.title}".`,

  });
 
  return {

    success: true,

    message: "Visitor Registered Successfully",

    visitor,

  };
 
};
 module.exports = {
  createMeeting,
  getAllMeetings,
  getMeetingById,
  updateMeeting,
  deleteMeeting,
  getMeetingByBookingToken,
  registerVisitor,
};