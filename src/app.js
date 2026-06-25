const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
//user
app.use("/api/users", require("./routes/user.routes"));
//====================Auth=========================
app.use("/api/auth", require("./routes/auth.routes"));
// ==================== Audit Logs ====================
app.use("/api/audit-logs", require("./routes/auditLog.routes"));
// ==================== Roles ====================
app.use("/api/roles", require("./routes/role.routes"));

// ==================== Health Check ====================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Visitor Management System Backend Running",
    version: "1.0.0",
  });
});

// ==================== 404 Handler ====================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ==================== Global Error Handler ====================
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;