import { motion } from "framer-motion";
import {
  UserPlus,
  QrCode,
  LogIn,
  Users,
  CheckCircle2,
  LogOut,
} from "lucide-react";

const timeline = [
  {
    title: "Visitor Registered",
    time: "09:45 AM",
    description: "Visitor registration completed.",
    icon: UserPlus,
    color: "bg-cyan-500",
  },
  {
    title: "QR / OTP Verified",
    time: "09:47 AM",
    description: "Visitor identity successfully verified.",
    icon: QrCode,
    color: "bg-violet-500",
  },
  {
    title: "Checked-In",
    time: "09:50 AM",
    description: "Visitor entered the premises.",
    icon: LogIn,
    color: "bg-green-500",
  },
  {
    title: "Meeting Started",
    time: "10:00 AM",
    description: "Host received the visitor.",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Meeting Completed",
    time: "11:20 AM",
    description: "Meeting finished successfully.",
    icon: CheckCircle2,
    color: "bg-emerald-500",
  },
  {
    title: "Ready for Check-Out",
    time: "11:25 AM",
    description: "Waiting for receptionist confirmation.",
    icon: LogOut,
    color: "bg-red-500",
    active: true,
  },
];

function CheckoutTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        rounded-[30px]
        border
        border-slate-800
        bg-slate-900
        p-8
        shadow-xl
      "
    >
      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">
          Visitor Timeline
        </h2>

        <p className="mt-2 text-slate-400">
          Complete visitor activity history.
        </p>

      </div>

      <div className="relative">

        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-slate-700" />

        <div className="space-y-8">

          {timeline.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                className="relative flex gap-5"
              >

                <div
                  className={`
                    relative
                    z-10
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    ${item.color}
                    shadow-lg
                  `}
                >
                  <Icon size={22} className="text-white" />
                </div>

                <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-800/60 p-5">

                  <div className="flex items-center justify-between">

                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <span className="text-sm text-cyan-400 font-medium">
                      {item.time}
                    </span>

                  </div>

                  <p className="mt-2 text-slate-400">
                    {item.description}
                  </p>

                  {item.active && (
                    <div className="mt-4 inline-flex items-center rounded-full bg-red-500/15 px-3 py-1 text-sm font-medium text-red-400">
                      Current Step
                    </div>
                  )}

                </div>

              </motion.div>
            );

          })}

        </div>

      </div>
    </motion.div>
  );
}

export default CheckoutTimeline;