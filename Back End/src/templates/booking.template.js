const bookingTemplate = (meeting, bookingUrl) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Meeting Scheduled</h2>

      <p>Dear <strong>${meeting.host.name}</strong>,</p>

      <p>A meeting has been scheduled for you.</p>

      <table border="1" cellpadding="8" cellspacing="0">
        <tr>
          <td><strong>Title</strong></td>
          <td>${meeting.title}</td>
        </tr>

        <tr>
          <td><strong>Description</strong></td>
          <td>${meeting.description || "-"}</td>
        </tr>

        <tr>
          <td><strong>Meeting Date</strong></td>
          <td>${new Date(meeting.meetingDate).toLocaleString()}</td>
        </tr>
      </table>

      <br>

      <p>Please use the following link to register your visitor:</p>

      <p>
        <a href="${bookingUrl}">
          ${bookingUrl}
        </a>
      </p>

      <p><strong>Note:</strong> This link will expire automatically.</p>

      <br>

      <p>Thank you,<br>Visitor Management System</p>
    </div>
  `;
};

module.exports = bookingTemplate;