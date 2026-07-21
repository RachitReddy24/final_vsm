const approvalTemplate = (visitor) => {
  return `
    <div style="font-family: Arial, sans-serif;">
      <h2>Visitor Request Approved</h2>

      <p>Dear <b>${visitor.name}</b>,</p>

      <p>Your visitor request has been approved.</p>

      <table border="1" cellpadding="8" cellspacing="0">
        <tr>
          <td><b>Visitor Code</b></td>
          <td>${visitor.visitorCode}</td>
        </tr>

        <tr>
          <td><b>Host</b></td>
          <td>${visitor.host.name}</td>
        </tr>

        <tr>
          <td><b>Meeting Date</b></td>
          <td>${new Date(visitor.meeting.meetingDate).toLocaleString()}</td>
        </tr>

        <tr>
          <td><b>Purpose</b></td>
          <td>${visitor.purpose}</td>
        </tr>
      </table>

      <br>

      <p>Your QR Code is attached to this email.</p>

      <p>Please show it at the reception during Check-In.</p>

      <br>

      <p>Thank you.</p>
    </div>
  `;
};

module.exports = approvalTemplate;