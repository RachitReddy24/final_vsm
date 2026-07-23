import {
  LayoutDashboard,
  Users,
  Building2,
  UserCog,
  CalendarDays,
  ClipboardList,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Settings,
} from "lucide-react";

const adminMenu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    title: "User Management",
    icon: Users,
    path: "/admin/users",
  },
  {
    title: "Department Management",
    icon: Building2,
    path: "/admin/departments",
  },
  {
    title: "Employee Management",
    icon: UserCog,
    path: "/admin/employees",
  },
  {
    title: "Schedule Meeting",
    icon: CalendarDays,
    path: "/admin/schedule-meeting",
  },
  {
    title: "Pending Approvals",
    icon: ShieldCheck,
    path: "/admin/pending-approvals",
  },
  {
    title: "Approved Visitors",
    icon: CheckCircle2,
    path: "/admin/approved-meetings",
  },
  {
    title: "Reports",
    icon: BarChart3,
    path: "/admin/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

export default adminMenu;