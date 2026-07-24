const path = require("path");
const prisma = require("../config/prisma");
const transporter = require("../config/mail.config");

const sendVisitorEmail = async ({ visitor, meeting, qrImage }) => {
  try {
    const meetingDate = new Date(meeting.meetingDate);

    const html = `
    <div style="font-family:Arial;padding:20px">

      <h2>Visitor Management System</h2>

      <p>Hello <b>${visitor.name}</b>,</p>

      <p>Your visitor registration has been completed successfully.</p>

      <table cellpadding="8">

        <tr>
          <td><b>Visitor Code</b></td>
          <td>${visitor.visitorCode}</td>
        </tr>

        <tr>
          <td><b>Meeting</b></td>
          <td>${meeting.title}</td>
        </tr>

        <tr>
          <td><b>Date</b></td>
          <td>${meetingDate.toLocaleDateString()}</td>
        </tr>

        <tr>
          <td><b>Time</b></td>
          <td>${meetingDate.toLocaleTimeString()}</td>
        </tr>

      </table>

      <br>

      <p>Please show the following QR Code during Check-In.</p>

      <img src="cid:qrcode" width="220"/>

      <br><br>

      <p>
      Kindly carry a valid Government ID proof.
      </p>

      <br>

      <p>Thank You.</p>

    </div>
    `;

    await transporter.sendMail({
      from: `"Visitor Management System" <${process.env.EMAIL_USER}>`,
      to: visitor.email,
      subject: "Visitor Registration Confirmation",
      html,
      attachments: [
        {
          filename: "VisitorQR.png",
          path: path.join(process.cwd(), qrImage.replace(/^\//, "")),
          cid: "qrcode",
        },
      ],
    });

    await prisma.emailLog.create({
      data: {
        recipientName: visitor.name,
        recipientEmail: visitor.email,
        recipientType: "VISITOR",
        emailType: "BOOKING_URL",
        subject: "Visitor Registration Confirmation",
        status: "SENT",
      },
    });
  } catch (error) {
    await prisma.emailLog.create({
      data: {
        recipientName: visitor.name,
        recipientEmail: visitor.email,
        recipientType: "VISITOR",
        emailType: "BOOKING_URL",
        subject: "Visitor Registration Confirmation",
        status: "FAILED",
        errorMessage: error.message,
      },
    });

    throw error;
  }
};

module.exports = {
  sendVisitorEmail,
};