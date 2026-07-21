import { motion } from "framer-motion";
import {
  Briefcase,
  User,
  Building2,
  Clock3,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";

function MeetingSummary() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      className="
      rounded-[30px]
      border
      border-slate-800
      bg-slate-900
      p-8
      shadow-xl
      "
    >

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Meeting Summary
          </h2>

          <p className="text-slate-400 mt-2">
            Visitor meeting details
          </p>

        </div>

        <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">

          <CheckCircle2
            size={30}
            className="text-green-400"
          />

        </div>

      </div>

      {/* Meeting Details */}

      <div className="space-y-5 mt-8">

        <Detail
          icon={Briefcase}
          label="Purpose"
          value="Business Discussion"
        />

        <Detail
          icon={User}
          label="Host"
          value="John Doe"
        />

        <Detail
          icon={Building2}
          label="Department"
          value="IT Department"
        />

        <Detail
          icon={MapPin}
          label="Meeting Room"
          value="Block A • Floor 2 • Room 204"
        />

        <Detail
          icon={CalendarDays}
          label="Meeting Date"
          value="16 Jul 2026"
        />

        <Detail
          icon={Clock3}
          label="Duration"
          value="2 Hours 15 Minutes"
        />

      </div>

      {/* Status */}

      <div
        className="
        mt-8
        rounded-2xl
        bg-green-500/10
        border
        border-green-500/30
        p-5
        flex
        items-center
        justify-between
        "
      >

        <div>

          <p className="text-slate-400 text-sm">
            Meeting Status
          </p>

          <h3 className="text-xl font-bold text-green-400 mt-1">
            Completed
          </h3>

        </div>

        <CheckCircle2
          size={34}
          className="text-green-400"
        />

      </div>

    </motion.div>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 pb-4">

      <div className="flex items-center gap-3">

        <Icon
          size={20}
          className="text-cyan-400"
        />

        <span className="text-slate-400">
          {label}
        </span>

      </div>

      <span className="text-white font-semibold">
        {value}
      </span>

    </div>
  );
}

export default MeetingSummary;