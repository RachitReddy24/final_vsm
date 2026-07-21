import {
  Search,
  User,
  Building2,
  Clock3,
  LogIn,
  LogOut,
  CheckCircle2,
} from "lucide-react";

function VisitorCheckOutCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">
          Check-Out Visitor
        </h2>

        <p className="text-slate-400 mt-2">
          Search and complete visitor checkout.
        </p>

      </div>

      {/* Search */}

      <div className="relative mb-8">

        <Search
          size={20}
          className="absolute left-4 top-4 text-slate-500"
        />

        <input
          placeholder="Search Visitor Name / Mobile / Visitor ID"
          className="
          w-full
          pl-12
          py-4
          rounded-2xl
          bg-slate-800
          border
          border-slate-700
          text-white
          outline-none
          "
        />

      </div>

      {/* Visitor Details */}

      <div className="grid lg:grid-cols-2 gap-6">

        <Info
          icon={User}
          label="Visitor"
          value="Rahul Sharma"
        />

        <Info
          icon={Building2}
          label="Company"
          value="Infosys"
        />

        <Info
          icon={User}
          label="Host"
          value="John Doe"
        />

        <Info
          icon={Clock3}
          label="Check-In"
          value="10:30 AM"
        />

        <Info
          icon={Clock3}
          label="Meeting Duration"
          value="1 Hour 20 Minutes"
        />

        <Info
          icon={CheckCircle2}
          label="Status"
          value="Checked-In"
        />

      </div>

      {/* Feedback */}

      <div className="mt-8 rounded-2xl bg-slate-800 border border-slate-700 p-6">

        <h3 className="text-white text-xl font-semibold">
          Visitor Feedback
        </h3>

        <textarea
          rows="4"
          placeholder="Visitor feedback..."
          className="
          mt-5
          w-full
          rounded-2xl
          bg-slate-900
          border
          border-slate-700
          p-4
          text-white
          outline-none
          "
        />

      </div>

      {/* Buttons */}

      <div className="flex justify-end gap-4 mt-8">

        <button
          className="
          flex
          items-center
          gap-3
          px-7
          py-4
          rounded-2xl
          bg-slate-700
          hover:bg-slate-600
          text-white
          "
        >

          <LogIn size={20} />

          Back

        </button>

        <button
          className="
          flex
          items-center
          gap-3
          px-8
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-red-600
          to-rose-500
          hover:scale-105
          transition
          text-white
          font-semibold
          "
        >

          <LogOut size={20} />

          Check-Out Visitor

        </button>

      </div>

    </div>
  );
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">

          <Icon
            size={20}
            className="text-cyan-400"
          />

        </div>

        <div>

          <p className="text-slate-400 text-sm">
            {label}
          </p>

          <p className="text-white font-semibold mt-1">
            {value}
          </p>

        </div>

      </div>

    </div>
  );
}

export default VisitorCheckOutCard;