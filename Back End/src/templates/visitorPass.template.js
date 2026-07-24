const visitorPassTemplate = ({
  visitorName,
  visitorId,
  hostName,
  meetingTitle,
  meetingDate,
}) => {
  return `
    <h2>Visitor Registration Successful</h2>

    <p>Hello <b>${visitorName}</b>,</p>

    <p>Your visitor registration has been completed successfully.</p>

    <table cellpadding="8" cellspacing="0" border="1">
      <tr>
        <td><b>Visitor ID</b></td>
        <td>${visitorId}</td>
      </tr>

      <tr>
        <td><b>Meeting</b></td>
        <td>${meetingTitle}</td>
      </tr>

      <tr>
        <td><b>Host</b></td>
        <td>${hostName}</td>
      </tr>

      <tr>
        <td><b>Date & Time</b></td>
        <td>${meetingDate}</td>
      </tr>
    </table>

    <br>

    <p>Please present the QR Code below at the security gate.</p>

    <img src="cid:qrcode" width="220"/>

    <br><br>

    <p>Thank you.</p>
  `;
};

module.exports = visitorPassTemplate;