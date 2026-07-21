import { motion } from "framer-motion";
import {
  UserPlus,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  LogOut,
} from "lucide-react";

const activities = [
  {
    title: "Visitor Registered",
    description: "Rahul Sharma completed visitor registration.",
    time: "09:15 AM",
    icon: UserPlus,
    color: "bg-blue-500",
  },
  {
    title: "QR Pass Generated",
    description: "Digital visitor pass created successfully.",
    time: "09:20 AM",
    icon: QrCode,
    color: "bg-cyan-500",
  },
  {
    title: "Host Approval",
    description: "Meeting approved by Mr. Johnson.",
    time: "09:25 AM",
    icon: ShieldCheck,
    color: "bg-violet-500",
  },
  {
    title: "Visitor Checked In",
    description: "Visitor entered the premises.",
    time: "09:30 AM",
    icon: CheckCircle2,
    color: "bg-green-500",
  },
  {
    title: "Visit Completed",
    description: "Visitor checked out successfully.",
    time: "11:45 AM",
    icon: LogOut,
    color: "bg-orange-500",
  },
];

function AdminRecentActivity() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
      rounded-[30px]
      border
      border-slate-800
      bg-slate-900
      p-7
      shadow-xl
      "
    >
      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">

          Recent Activity

        </h2>

        <p className="text-slate-400 mt-2">

          Latest visitor events

        </p>

      </div>

      <div className="relative">

        <div className="absolute left-7 top-0 bottom-0 w-[2px] bg-slate-700" />

        <div className="space-y-8">

          {activities.map((activity, index) => {

            const Icon = activity.icon;

            return (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * .15,
                }}
                className="relative flex gap-5"
              >

                <div
                  className={`
                  relative
                  z-10
                  w-14
                  h-14
                  rounded-2xl
                  ${activity.color}
                  flex
                  items-center
                  justify-center
                  shadow-xl
                  `}
                >

                  <Icon
                    size={24}
                    className="text-white"
                  />

                </div>

                <div className="flex-1 rounded-2xl bg-slate-800 border border-slate-700 p-5">

                  <div className="flex justify-between items-center">

                    <h3 className="text-white font-semibold text-lg">

                      {activity.title}

                    </h3>

                    <span className="text-cyan-400 text-sm">

                      {activity.time}

                    </span>

                  </div>

                  <p className="text-slate-400 mt-2 leading-7">

                    {activity.description}

                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </motion.div>
  );
}

export default AdminRecentActivity;