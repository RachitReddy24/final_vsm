import {
  User,
  Phone,
  Building2,
  Calendar,
  Clock,
  BadgeCheck,
  CheckCircle2,
  Mail,
  Briefcase,
  ShieldCheck,
  Timer,
  XCircle,
} from "lucide-react";

function Info({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl bg-slate-800 border border-slate-700 p-4">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
          <Icon
            size={18}
            className="text-cyan-400"
          />
        </div>

        <div className="flex-1">
          <p className="text-xs text-slate-400">
            {label}
          </p>

          <h4 className="font-semibold text-white mt-1 break-words">
            {value || "--"}
          </h4>
        </div>
      </div>
    </div>
  );
}

function VisitorInfoCard({
  visitor,
  loading = false,
  onCheckIn,
  onReject,
}) {

  if (loading) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex items-center justify-center h-full min-h-[700px]">
        <div className="text-center">

          <div className="w-14 h-14 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto" />

          <p className="text-slate-400 mt-5">
            Loading Visitor...
          </p>

        </div>
      </div>
    );
  }

  if (!visitor) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex items-center justify-center h-full min-h-[700px]">

        <div className="text-center px-8">

          <User
            size={70}
            className="mx-auto text-slate-600"
          />

          <h2 className="text-white text-2xl font-bold mt-6">
            No Visitor Selected
          </h2>

          <p className="text-slate-400 mt-3">
            Scan a visitor QR code to load visitor details.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center px-6 py-5 border-b border-slate-800">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Visitor Information
          </h2>

          <p className="text-slate-400 mt-1">
            Live visitor details
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-xl px-4 py-2 border bg-green-500/10 border-green-500/30">

          <CheckCircle2
            size={18}
            className="text-green-400"
          />

          <span className="text-green-400 text-sm font-semibold">
            Visitor Found
          </span>

        </div>

      </div>

      {/* Avatar */}

      <div className="flex flex-col items-center p-6">

        <div className="w-28 h-28 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">

          {visitor.image ? (

            <img
              src={visitor.image}
              alt={visitor.name}
              className="w-full h-full object-cover"
            />

          ) : (

            <User
              size={55}
              className="text-white"
            />

          )}

        </div>

        <h3 className="text-white text-2xl font-bold mt-5">
          {visitor.name}
        </h3>

        <p className="text-cyan-400 mt-1">
          {visitor.meetingId}
        </p>

      </div>

      {/* Details */}

      <div className="grid gap-4 px-6">

        <Info
          icon={Phone}
          label="Mobile"
          value={visitor.mobile}
        />

        <Info
          icon={Mail}
          label="Email"
          value={visitor.email}
        />

        <Info
          icon={Building2}
          label="Company"
          value={visitor.company}
        />

        <Info
          icon={User}
          label="Host"
          value={visitor.host}
        />

        <Info
          icon={Building2}
          label="Department"
          value={visitor.department}
        />

        <Info
          icon={Briefcase}
          label="Purpose"
          value={visitor.purpose}
        />

        <Info
          icon={Calendar}
          label="Visit Date"
          value={visitor.date}
        />

        <Info
          icon={Clock}
          label="Visit Time"
          value={visitor.time}
        />

        <Info
          icon={Timer}
          label="Check-In Time"
          value={visitor.checkInTime}
        />

      </div>

      {/* Status */}

      <div className="grid md:grid-cols-2 gap-4 p-6">

        <div className="rounded-2xl bg-slate-800 border border-slate-700 p-5">

          <div className="flex items-center gap-3">

            <BadgeCheck className="text-green-400" />

            <div>

              <p className="text-slate-400 text-sm">
                Visitor Status
              </p>

              <h3 className="text-white font-semibold mt-1">
                {visitor.status}
              </h3>

            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-slate-800 border border-slate-700 p-5">

          <div className="flex items-center gap-3">

            <ShieldCheck
              className={
                visitor.qrVerified
                  ? "text-green-400"
                  : "text-red-400"
              }
            />

            <div>

              <p className="text-slate-400 text-sm">
                QR Verification
              </p>

              <h3 className="text-white font-semibold mt-1">
                {visitor.qrVerified
                  ? "Verified"
                  : "Pending"}
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* Actions */}

      <div className="grid grid-cols-2 gap-4 p-6 pt-0">

        <button
          onClick={onCheckIn}
          className="rounded-2xl py-4 text-white font-semibold transition bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-105"
        >
          Check-In
        </button>

        <button
          onClick={onReject}
          className="rounded-2xl py-4 text-white font-semibold transition bg-gradient-to-r from-red-600 to-rose-500 hover:scale-105"
        >
          <div className="flex items-center justify-center gap-2">
            <XCircle size={18} />
            Reject
          </div>
        </button>

      </div>

    </div>
  );
}

export default VisitorInfoCard;