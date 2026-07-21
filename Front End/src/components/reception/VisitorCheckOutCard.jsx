import { motion } from "framer-motion";
import {
  UserCircle2,
  Phone,
  Building2,
  User,
  Briefcase,
  CalendarDays,
  Clock3,
  BadgeCheck,
} from "lucide-react";

function VisitorCheckoutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
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

      <div className="flex items-center gap-5">

        <div
          className="
          w-24
          h-24
          rounded-3xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          flex
          items-center
          justify-center
          "
        >
          <UserCircle2
            size={60}
            className="text-white"
          />
        </div>

        <div>

          <h2 className="text-3xl font-bold text-white">
            Rahul Sharma
          </h2>

          <p className="text-slate-400 mt-1">
            Visitor ID : VMS-2026-001
          </p>

          <span className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-green-500/20 text-green-400">

            <BadgeCheck size={18} />

            Checked-In

          </span>

        </div>

      </div>

      {/* Details */}

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <InfoCard
          icon={Phone}
          label="Mobile"
          value="9876543210"
        />

        <InfoCard
          icon={Building2}
          label="Company"
          value="ABC Pvt Ltd"
        />

        <InfoCard
          icon={User}
          label="Host"
          value="John Doe"
        />

        <InfoCard
          icon={Briefcase}
          label="Department"
          value="IT Department"
        />

        <InfoCard
          icon={CalendarDays}
          label="Check-In Date"
          value="16 Jul 2026"
        />

        <InfoCard
          icon={Clock3}
          label="Check-In Time"
          value="10:30 AM"
        />

      </div>

    </motion.div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-slate-800
      bg-slate-800/60
      p-5
      flex
      items-center
      gap-4
      "
    >
      <div
        className="
        w-12
        h-12
        rounded-xl
        bg-cyan-500/20
        flex
        items-center
        justify-center
        "
      >
        <Icon
          size={22}
          className="text-cyan-400"
        />
      </div>

      <div>

        <p className="text-slate-400 text-sm">
          {label}
        </p>

        <h3 className="text-white font-semibold text-lg">
          {value}
        </h3>

      </div>

    </div>
  );
}

export default VisitorCheckoutCard;