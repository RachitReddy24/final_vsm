import {
  Users,
  UserCheck,
  UserPlus,
  UserX,
} from "lucide-react";

export const stats = [
  {
    id: 1,
    title: "Today's Visitors",
    value: 125,
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    percentage: "+18%",
  },
  {
    id: 2,
    title: "Checked In",
    value: 86,
    icon: UserCheck,
    color: "from-green-500 to-emerald-600",
    percentage: "+8%",
  },
  {
    id: 3,
    title: "Pending",
    value: 14,
    icon: UserPlus,
    color: "from-orange-500 to-yellow-500",
    percentage: "+2%",
  },
  {
    id: 4,
    title: "Rejected",
    value: 6,
    icon: UserX,
    color: "from-red-500 to-pink-600",
    percentage: "-3%",
  },
];

export const visitors = [
  {
    id: 1,
    name: "Rahul Sharma",
    host: "John Doe",
    purpose: "Business Meeting",
    time: "10:30 AM",
    status: "Approved",
  },
  {
    id: 2,
    name: "Priya Singh",
    host: "David Wilson",
    purpose: "Interview",
    time: "11:00 AM",
    status: "Pending",
  },
  {
    id: 3,
    name: "Arjun Patel",
    host: "Alex Brown",
    purpose: "Vendor Meeting",
    time: "02:00 PM",
    status: "Completed",
  },
  {
    id: 4,
    name: "Sneha Rao",
    host: "Peter Smith",
    purpose: "Client Visit",
    time: "03:30 PM",
    status: "Approved",
  },
];