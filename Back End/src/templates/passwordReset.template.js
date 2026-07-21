const passwordResetTemplate = (name, resetUrl) => {
  return `
  <!DOCTYPE html>
  <html>
  <body style="font-family: Arial, sans-serif;">

    <h2>Password Reset</h2>

    <p>Hello <b>${name}</b>,</p>

    <p>We received a request to reset your password.</p>

    <p>
      <a href="${resetUrl}"
         style="
            background:#2563eb;
            color:white;
            padding:10px 20px;
            text-decoration:none;
            border-radius:5px;
         ">
        Reset Password
      </a>
    </p>

    <p>This link is valid for 15 minutes.</p>

    <p>If you didn't request this, you can safely ignore this email.</p>

    <br>

    <p>Visitor Management System</p>

  </body>
  </html>
  `;
};

module.exports = passwordResetTemplate;