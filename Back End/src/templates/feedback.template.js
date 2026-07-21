const feedbackTemplate = (visitor, feedbackUrl) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
  </head>

  <body style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">

    <div style="max-width:600px;margin:auto;background:#fff;padding:30px;border-radius:8px;">

      <h2 style="color:#2563eb;">Thank You for Visiting</h2>

      <p>Hello <b>${visitor.name}</b>,</p>

      <p>Thank you for visiting us.</p>

      <p>Your feedback is valuable to us.</p>

      <p style="text-align:center;">
        <a href="${feedbackUrl}"
          style="
            background:#2563eb;
            color:white;
            padding:12px 25px;
            text-decoration:none;
            border-radius:5px;
          ">
          Give Feedback
        </a>
      </p>

      <p>
        Thank you,<br>
        <b>Visitor Management System</b>
      </p>

    </div>

  </body>
  </html>
  `;
};

module.exports = feedbackTemplate;