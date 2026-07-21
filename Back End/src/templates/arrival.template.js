const arrivalTemplate = (visitor) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height:1.6;">
      <h2>Visitor Arrived</h2>

      <p>Dear <strong>${visitor.host.name}</strong>,</p>

      <p>Your visitor has arrived and completed the check-in process.</p>

      <table border="1" cellpadding="8" cellspacing="0">
        <tr>
          <td><b>Visitor Name</b></td>
          <td>${visitor.name}</td>
        </tr>

        <tr>
          <td><b>Visitor Code</b></td>
          <td>${visitor.visitorCode}</td>
        </tr>

        <tr>
          <td><b>Company</b></td>
          <td>${visitor.company || "-"}</td>
        </tr>

        <tr>
          <td><b>Purpose</b></td>
          <td>${visitor.purpose}</td>
        </tr>

        <tr>
          <td><b>Check-In Time</b></td>
          <td>${new Date(visitor.checkedInAt).toLocaleString()}</td>
        </tr>
      </table>

      <br>

      <p>Please receive your visitor at the reception.</p>

      <br>

      <p>Thank you,<br>Visitor Management System</p>
    </div>
  `;
};

module.exports = arrivalTemplate;