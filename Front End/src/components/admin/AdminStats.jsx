import { motion } from "framer-motion";
import {
  Users,
  CalendarDays,
  Building2,
  UserCog,
  Clock3,
  BadgeCheck,
  LogIn,
  LogOut,
} from "lucide-react";

const stats = [
  {
    title: "Total Visitors",
    value: 1248,
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    title: "Total Meetings",
    value: 324,
    icon: CalendarDays,
    color: "from-indigo-500 to-violet-500",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    title: "Departments",
    value: 18,
    icon: Building2,
    color: "from-purple-500 to-fuchsia-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    title: "Employees / Users",
    value: 96,
    icon: UserCog,
    color: "from-cyan-500 to-sky-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    title: "Pending Approvals",
    value: 15,
    icon: Clock3,
    color: "from-yellow-500 to-orange-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    title: "Approved Visitors",
    value: 203,
    icon: BadgeCheck,
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    title: "Checked-In Visitors",
    value: 64,
    icon: LogIn,
    color: "from-teal-500 to-green-500",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
  },
  {
    title: "Checked-Out Visitors",
    value: 58,
    icon: LogOut,
    color: "from-rose-500 to-pink-500",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
];

function AdminStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className={`
              relative
              overflow-hidden
              rounded-3xl
              border
              ${item.border}
              ${item.bg}
              backdrop-blur-xl
              bg-slate-900/90
              p-6
              shadow-xl
              transition-all
              duration-300
            `}
          >
            {/* Glow */}

            <div
              className={`
                absolute
                -top-10
                -right-10
                w-36
                h-36
                rounded-full
                bg-gradient-to-r
                ${item.color}
                opacity-10
                blur-3xl
              `}
            />

            <div className="relative flex justify-between items-start">
              <div>

                <p className="text-slate-400 text-sm">
                  {item.title}
                </p>

                <h2 className="mt-4 text-4xl font-black text-white">
                  {item.value}
                </h2>

                <p className="mt-4 text-xs text-green-400 font-medium">
                  Updated Today
                </p>

              </div>

              <div
                className={`
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-r
                  ${item.color}
                  flex
                  items-center
                  justify-center
                  shadow-xl
                `}
              >
                <Icon
                  size={30}
                  className="text-white"
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default AdminStats;