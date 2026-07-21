import { motion } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  LogIn,
  CalendarPlus,
  UserPlus,
} from "lucide-react";

const notifications = [
  {
    title: "Visitor Approved",
    description: "Rahul Sharma's meeting request has been approved.",
    icon: CheckCircle2,
    color: "bg-green-500",
    time: "2 min ago",
  },
  {
    title: "Visitor Checked In",
    description: "Anjali Verma has successfully checked in at reception.",
    icon: LogIn,
    color: "bg-cyan-500",
    time: "10 min ago",
  },
  {
    title: "Meeting Created",
    description: "A new meeting has been scheduled for the Finance Department.",
    icon: CalendarPlus,
    color: "bg-blue-500",
    time: "20 min ago",
  },
  {
    title: "New Walk-In Visitor",
    description: "Reception has registered a new walk-in visitor.",
    icon: UserPlus,
    color: "bg-orange-500",
    time: "35 min ago",
  },
];

function AdminNotifications() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      rounded-3xl
      border
      border-slate-800
      bg-slate-900
      p-7
      shadow-xl
      "
    >
      <div className="flex justify-between items-center mb-8">

        <div className="flex items-center gap-3">

          <Bell
            size={28}
            className="text-cyan-400"
          />

          <div>

            <h2 className="text-2xl font-bold text-white">
              Recent Notifications
            </h2>

            <p className="text-slate-400">
              Latest system activities
            </p>

          </div>

        </div>

        <button
          className="
          px-5
          py-2
          rounded-xl
          bg-cyan-600
          hover:bg-cyan-700
          text-white
          transition
          "
        >
          View All
        </button>

      </div>

      <div className="space-y-5">

        {notifications.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="
              rounded-2xl
              bg-slate-800
              border
              border-slate-700
              p-5
              flex
              items-start
              gap-4
              "
            >

              <div
                className={`
                w-12
                h-12
                rounded-xl
                ${item.color}
                flex
                items-center
                justify-center
                `}
              >

                <Icon
                  size={22}
                  className="text-white"
                />

              </div>

              <div className="flex-1">

                <div className="flex justify-between">

                  <h3 className="text-white font-semibold">
                    {item.title}
                  </h3>

                  <span className="text-slate-500 text-sm">
                    {item.time}
                  </span>

                </div>

                <p className="text-slate-400 mt-2">
                  {item.description}
                </p>

              </div>

            </motion.div>

          );

        })}

      </div>

    </motion.div>
  );
}

export default AdminNotifications;