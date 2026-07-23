console.log("__dirname =", __dirname);
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());

app.use(express.json());

// Serve static files from the 'uploads' directory
app.use(
  "/uploads",
  express.static(path.join(__dirname, "../uploads"))
);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Visitor Management System Backend Running",
  });
});

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/departments", require("./routes/department.routes"));
app.use("/api/employees", require("./routes/employee.routes"));
app.use("/api/dashboard", require("./routes/dashboard.routes"));
app.use("/api/meetings", require("./routes/meeting.routes"));
app.use("/api/booking", require("./routes/booking.routes"));
app.use("/api/approval", require("./routes/approval.routes"));
app.use("/api/email-logs", require("./routes/emailLog.routes"));
app.use("/api/checkin", require("./routes/checkin.routes"));
app.use("/api/notifications", require("./routes/notification.routes"));
app.use("/api/unplanned-visits",require("./routes/unplannedVisit.routes"));
app.use("/api/host", require("./routes/host.routes"));
app.use("/api/otp", require("./routes/otp.routes"));
app.use("/api/dashboard",require("./routes/dashboard.routes"));
app.use("/api/reports",require("./routes/report.routes"));
app.use("/api/settings",require("./routes/settings.routes"));
app.use("/api/checkout",require("./routes/checkout.routes"));
app.use("/api/feedback",require("./routes/feedback.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/visitor-pass",require("./routes/visitorPass.routes"));
app.use("/api/profile",require("./routes/profile.routes"));
module.exports = app;