import { motion } from "framer-motion";
import {
  Users,
  Clock3,
  BadgeCheck,
  LogIn,
  LogOut,
  UserPlus,
} from "lucide-react";

const stats = [
  {
    title: "Today's Visitors",
    value: 48,
    icon: Users,
    color: "from-cyan-500 to-blue-600",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Waiting for Approval",
    value: 8,
    icon: Clock3,
    color: "from-yellow-500 to-orange-500",
    border: "border-yellow-500/20",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Approved Today",
    value: 30,
    icon: BadgeCheck,
    color: "from-green-500 to-emerald-600",
    border: "border-green-500/20",
    bg: "bg-green-500/10",
  },
  {
    title: "Checked-In Today",
    value: 25,
    icon: LogIn,
    color: "from-indigo-500 to-cyan-500",
    border: "border-indigo-500/20",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Checked-Out Today",
    value: 18,
    icon: LogOut,
    color: "from-rose-500 to-pink-600",
    border: "border-rose-500/20",
    bg: "bg-rose-500/10",
  },
  {
    title: "Walk-In Visitors",
    value: 6,
    icon: UserPlus,
    color: "from-violet-500 to-purple-600",
    border: "border-violet-500/20",
    bg: "bg-violet-500/10",
  },
];

function ReceptionStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {stats.map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className={`
              relative
              overflow-hidden
              rounded-3xl
              border
              ${item.border}
              ${item.bg}
              bg-slate-900
              p-6
              shadow-xl
            `}
          >

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

                <p className="text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-4 text-4xl font-black text-white">
                  {item.value}
                </h2>

                <p className="mt-4 text-xs text-green-400">
                  Updated Live
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

export default ReceptionStats;