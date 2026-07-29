import {
  LayoutDashboard,
  UserPlus,
  LogIn,
  LogOut,
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
    title: "Visitor Check-In",
    icon: LogIn,
    path: "/reception/visitor-check-in",
  },
  {
    title: "Visitor Check-Out",
    icon: LogOut,
    path: "/reception/visitor-check-out",
  },
];

export default receptionMenu;