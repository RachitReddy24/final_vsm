import {
  LayoutDashboard,
  UserPlus,
  ShieldCheck,
  LogIn,
  LogOut,
  ClipboardList,
} from "lucide-react";

const receptionMenu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/reception/dashboard",
  },
  {
    title: "Visitor Onboarding",
    icon: UserPlus,
    path: "/reception/visitor-onboarding",
  },
  {
    title: "Visit Verification",
    icon: ShieldCheck,
    path: "/reception/visit-verification",
  },
  {
    title: "Visitor Check-In",
    icon: LogIn,
    path: "/reception/visitor-check-in",
  },
  {
    title: "Visitor Check-Out",
    icon: LogOut,
    path: "/reception/visitor-check-out",
  },
  {
    title: "Visitor Status",
    icon: ClipboardList,
    path: "/reception/visitor-status",
  },
];

export default receptionMenu;