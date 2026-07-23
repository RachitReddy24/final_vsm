import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* ---------------- AUTH ---------------- */

import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ProtectedRoute from "./ProtectedRoute";

/* ---------------- ADMIN ---------------- */

import AdminDashboard from "../pages/admin/Dashboard";
import UserManagement from "../pages/admin/UserManagement";
import ScheduleMeeting from "../pages/admin/ScheduleMeeting";
import Reports from "../pages/admin/Reports";
import Settings from "../pages/admin/Settings";
import EmployeeManagement from "../pages/admin/EmployeeManagement";
import DepartmentManagement from "../pages/admin/DepartmentManagement";
import ApprovedVisitors from "../pages/admin/ApprovedVisitors";
import PendingApprovals from "../pages/admin/PendingApprovals";

/* ---------------- RECEPTION ---------------- */

import ReceptionDashboard from "../pages/reception/Dashboard";
import VisitorOnboarding from "../pages/reception/VisitorOnboarding";
import VisitVerification from "../pages/reception/VisitVerification";
import VisitorStatus from "../pages/reception/VisitorStatus";
import VisitorCheckIn from "../pages/reception/VisitorCheckIn";
import VisitorCheckOut from "../pages/reception/VisitorCheckOut";

/* ---------------- VISITOR ---------------- */

import VisitorRegistration from "../pages/visitor/VisitorRegistration";
import VerifyOTP from "../pages/visitor/VerifyOTP";
import RegistrationSuccess from "../pages/visitor/RegistrationSuccess";
import VisitorPassPage from "../pages/visitor/VisitorPass";

/* ---------------- HOST ---------------- */

import HostApproval from "../pages/host/Approval";
import ApprovalSuccess from "../pages/host/ApprovalSuccess";
import Feedback from "../pages/host/Feedback";
import VisitCompleted from "../pages/host/VisitCompleted";

/* ---------------- COMMUNICATION ---------------- */

import HostEmail from "../pages/communication/HostEmail";
import VisitorSMS from "../pages/communication/VisitorSMS";

function AppRoutes() {
  return (
    <Routes>

      {/* Default */}

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* AUTH */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* ADMIN */}

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute roles={["ADMIN"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute roles={["ADMIN"]}>
            <UserManagement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/departments"
        element={
          <ProtectedRoute roles={["ADMIN"]}>
            <DepartmentManagement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/employees"
        element={
          <ProtectedRoute roles={["ADMIN"]}>
            <EmployeeManagement />
          </ProtectedRoute>
        }
      />

    
      <Route
        path="/admin/approved-meetings"
        element={
          <ProtectedRoute roles={["ADMIN"]}>
            <ApprovedVisitors />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/pending-approvals"
        element={
          <ProtectedRoute roles={["ADMIN"]}>
            <PendingApprovals />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/schedule-meeting"
        element={
          <ProtectedRoute roles={["ADMIN"]}>
            <ScheduleMeeting />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/reports"
        element={
          <ProtectedRoute roles={["ADMIN"]}>
            <Reports />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/settings"
        element={
          <ProtectedRoute roles={["ADMIN"]}>
            <Settings />
          </ProtectedRoute>
        }
      />

      {/* RECEPTION */}

      <Route
        path="/reception/dashboard"
        element={
          <ProtectedRoute roles={["RECEPTION", "RECEPTIONIST"]}>
            <ReceptionDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reception/visitor-onboarding"
        element={
          <ProtectedRoute roles={["RECEPTION", "RECEPTIONIST"]}>
            <VisitorOnboarding />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reception/visit-verification"
        element={
          <ProtectedRoute roles={["RECEPTION", "RECEPTIONIST"]}>
            <VisitVerification />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reception/visitor-status"
        element={
          <ProtectedRoute roles={["RECEPTION", "RECEPTIONIST"]}>
            <VisitorStatus />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reception/visitor-check-in"
        element={
          <ProtectedRoute roles={["RECEPTION", "RECEPTIONIST"]}>
            <VisitorCheckIn />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reception/visitor-check-out"
        element={
          <ProtectedRoute roles={["RECEPTION", "RECEPTIONIST"]}>
            <VisitorCheckOut />
          </ProtectedRoute>
        }
      />

      {/* VISITOR */}

      <Route
        path="/register"
        element={<VisitorRegistration />}
      />

      <Route
        path="/verify-otp"
        element={<VerifyOTP />}
      />

      <Route
        path="/registration-success"
        element={<RegistrationSuccess />}
      />

      <Route
        path="/visitor-pass"
        element={<VisitorPassPage />}
      />

      {/* HOST */}

      <Route
        path="/approval"
        element={<HostApproval />}
      />

      <Route
        path="/approval-success"
        element={<ApprovalSuccess />}
      />

      <Route
        path="/feedback"
        element={<Feedback />}
      />

      <Route
        path="/visit-completed"
        element={<VisitCompleted />}
      />

      {/* COMMUNICATION */}

      <Route
        path="/host-email"
        element={<HostEmail />}
      />

      <Route
        path="/visitor-sms"
        element={<VisitorSMS />}
      />

      {/* 404 */}

      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />

    </Routes>
  );
}

export default AppRoutes;