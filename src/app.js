const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/roles", require("./routes/role.routes"));
app.use("/api/visitors", require("./routes/visitor.routes"));
app.use("/api/visit-requests", require("./routes/visitRequest.routes"));
app.use("/api/meetings", require("./routes/meeting.routes"));
app.use("/api/checkin", require("./routes/checkin.routes"));
app.use("/api/checkout", require("./routes/checkout.routes"));
app.use("/api/visitlogs", require("./routes/visitLog.routes"));
app.use("/api/otp", require("./routes/otp.routes"));
app.use("/api/qr", require("./routes/qr.routes"));
app.use("/api/notifications", require("./routes/notification.routes"));
app.use("/api/email-logs", require("./routes/emailLog.routes"));
app.use("/api/sms-logs", require("./routes/smsLog.routes"));
app.use("/api/reports", require("./routes/report.routes"));
app.use("/api/settings", require("./routes/settings.routes"));
app.use("/api/dashboard", require("./routes/dashboard.routes"));
app.use("/api/documents", require("./routes/document.routes"));
app.use("/api/auditlogs", require("./routes/auditLog.routes"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Visitor Management System Backend Running"
  });
});

module.exports = app;