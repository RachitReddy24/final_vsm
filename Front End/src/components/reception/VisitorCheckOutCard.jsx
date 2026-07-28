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

function VisitorCheckoutCard({
  search,
  setSearch,
  visitor,
  loading,
  feedback,
  setFeedback,
  onSearch,
  onCheckout,
  onBack,
}) {
  console.log("VisitorCheckoutCard visitor:", visitor);
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
      {/* Search Visitor */}

<div className="mb-8">

  <label className="block text-slate-300 mb-2 font-medium">
    Visitor Code
  </label>

  <div className="flex gap-3">

    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Enter Visitor Code"
      className="
        flex-1
        px-4
        py-3
        rounded-xl
        bg-slate-800
        border
        border-slate-700
        text-white
        outline-none
      "
    />

    <button
      onClick={onSearch}
      disabled={loading}
      className="
        bg-cyan-600
        hover:bg-cyan-700
        px-6
        rounded-xl
        text-white
        font-semibold
      "
    >
      {loading ? "Searching..." : "Search"}
    </button>

  </div>

</div>
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
            {visitor?.name || "No Visitor Selected"}
          </h2>

          <p className="text-slate-400 mt-1">
           Visitor ID : {visitor?.visitorCode || "-"}
          </p>

          <span className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-green-500/20 text-green-400">

            <BadgeCheck size={18} />

          {visitor?.status || "NOT FOUND"}
          </span>

        </div>

      </div>

      {/* Details */}

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <InfoCard
          icon={Phone}
          label="Mobile"
          value={visitor?.mobileNumber || "-"}
        />

        <InfoCard
          icon={Building2}
          label="Company"
          value={visitor?.company || "-"}
        />

        <InfoCard
          icon={User}
          label="Host"
          value={visitor?.host?.name || "-"}
        />


        <InfoCard
          icon={CalendarDays}
          label="Check-In Date"
value={
  visitor?.checkedInAt
    ? new Date(visitor.checkedInAt).toLocaleDateString()
    : "-"
}        />

        <InfoCard
          icon={Clock3}
          label="Check-In Time"
value={
  visitor?.checkedInAt
    ? new Date(visitor.checkedInAt).toLocaleTimeString()
    : "-"
}        />

            </div>

      {/* Checkout Button */}
      <div className="flex justify-end mt-8">
        <button
          onClick={onCheckout}
          disabled={!visitor || loading}
          className={`
            px-6 py-3 rounded-xl font-semibold text-white transition
            ${
              !visitor || loading
                ? "bg-slate-600 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }
          `}
        >
          {loading ? "Processing..." : "Check Out"}
        </button>
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
