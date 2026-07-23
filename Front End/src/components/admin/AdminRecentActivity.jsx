import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import api from "../../services/api";

import {
  UserPlus,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  LogOut,
} from "lucide-react";



function AdminRecentActivity() {
  const [activities, setActivities] = useState([]);

useEffect(() => {
  fetchRecentActivities();
}, []);

const fetchRecentActivities = async () => {
  try {
    const res = await api.get("/dashboard/recent-activities");
    setActivities(res.data.data || []);
  } catch (error) {
    console.error("Recent Activities Error:", error);
  }
};
const getIcon = (status) => {
  switch (status) {
    case "PENDING":
      return UserPlus;
    case "APPROVED":
      return ShieldCheck;
    case "CHECKED_IN":
      return CheckCircle2;
    case "CHECKED_OUT":
      return LogOut;
    default:
      return QrCode;
  }
};

const getColor = (status) => {
  switch (status) {
    case "PENDING":
      return "bg-blue-500";
    case "APPROVED":
      return "bg-violet-500";
    case "CHECKED_IN":
      return "bg-green-500";
    case "CHECKED_OUT":
      return "bg-orange-500";
    default:
      return "bg-cyan-500";
  }
};
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

             const Icon = getIcon(activity.status);
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
                  ${getColor(activity.status)}
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

                      {activity.status.replaceAll("_", " ")}

                    </h3>

                    <span className="text-cyan-400 text-sm">

                      {new Date(activity.updatedAt).toLocaleTimeString([], {
                      hour: "2-digit",
                     minute: "2-digit",
                      })}

                    </span>

                  </div>

                  <p className="text-slate-400 mt-2 leading-7">

                    {`${activity.visitorName} - Host: ${activity.hostName}`}

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