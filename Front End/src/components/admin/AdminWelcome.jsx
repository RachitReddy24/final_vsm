import { motion } from "framer-motion";
import {
  ShieldCheck,
  Bell,
  CalendarDays,
  Clock3,
} from "lucide-react";

function AdminWelcome() {
  const today = new Date();

  const date = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
      rounded-[32px]
      overflow-hidden
      bg-gradient-to-r
      from-blue-700
      via-cyan-600
      to-indigo-700
      p-8
      shadow-2xl
      "
    >
      <div className="flex flex-col xl:flex-row justify-between gap-8">

        {/* Left */}

        <div className="flex-1">

          <div
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            text-white
            "
          >
            <ShieldCheck size={18} />

            Enterprise Portal

          </div>

          <h1
            className="
            mt-6
            text-5xl
            font-black
            text-white
            "
          >
            Welcome Back,

            <span className="text-cyan-200">

              {" "}Administrator

            </span>

          </h1>

          <p
            className="
            mt-5
            max-w-2xl
            text-blue-100
            text-lg
            leading-8
            "
          >
            Monitor visitors,
            meetings,
            approvals,
            reports
            and reception activities
            from one centralized dashboard.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <div
              className="
              flex
              items-center
              gap-3
              px-5
              py-3
              rounded-2xl
              bg-white/10
              "
            >
              <CalendarDays size={20} />

              {date}

            </div>

            <div
              className="
              flex
              items-center
              gap-3
              px-5
              py-3
              rounded-2xl
              bg-white/10
              "
            >
              <Clock3 size={20} />

              Enterprise Dashboard

            </div>

          </div>

        </div>

        {/* Right */}

        <div
          className="
          w-full
          xl:w-80
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          p-6
          "
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-blue-100">

                Notifications

              </p>

              <h2
                className="
                mt-2
                text-5xl
                font-black
                text-white
                "
              >
                05
              </h2>

            </div>

            <Bell
              size={48}
              className="text-white"
            />

          </div>

          <div className="space-y-4 mt-8">

            <SummaryItem
              title="Pending Visitors"
              value="08"
            />

            <SummaryItem
              title="Meetings Today"
              value="26"
            />

            <SummaryItem
              title="Checked In"
              value="39"
            />

            <SummaryItem
              title="Completed"
              value="31"
            />

          </div>

        </div>

      </div>
    </motion.div>
  );
}

function SummaryItem({
  title,
  value,
}) {
  return (
    <div className="flex justify-between">

      <span className="text-blue-100">

        {title}

      </span>

      <span className="font-semibold text-white">

        {value}

      </span>

    </div>
  );
}

export default AdminWelcome;