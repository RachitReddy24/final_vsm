import { useState } from "react";
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

import api from "../../services/api";

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

        <div>

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

function VisitorInfoCard({ visitor }) {
  console.log("VisitorInfoCard visitor:", visitor);
  const [processing, setProcessing] = useState(false);

   const visitorData = visitor || {
  id: "",
  visitorCode: "",
  name: "--",
  mobileNumber: "--",
  email: "--",
  company: "--",
  purpose: "--",
  status: "Not Verified",
  host: {},
  image: "",
};
    const handleCheckIn = async () => {
  if (!visitor) return;

  try {
    setProcessing(true);

const visitorCode = visitorData.visitorCode;

    const response = await api.post("/checkin", {
      visitorCode,
    });

    alert(
      response.data.message ||
      "Visitor checked in successfully."
    );

    window.location.reload();
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Unable to complete check-in."
    );
  } finally {
    setProcessing(false);
  }
};

const handleReject = () => {
  alert("Reject functionality will be integrated later.");
};
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

        <div
          className={`flex items-center gap-2 rounded-xl px-4 py-2 border ${
            visitor
              ? "bg-green-500/10 border-green-500/30"
              : "bg-yellow-500/10 border-yellow-500/30"
          }`}
        >

          <CheckCircle2
            size={18}
            className={
              visitor
                ? "text-green-400"
                : "text-yellow-400"
            }
          />

          <span
            className={`text-sm font-semibold ${
              visitor
                ? "text-green-400"
                : "text-yellow-400"
            }`}
          >
            {visitor ? "Visitor Found" : "Waiting"}
          </span>

        </div>

      </div>

      {/* Avatar */}

      <div className="flex flex-col items-center p-6">

        <div className="w-28 h-28 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">

         {visitorData.image ? (
  <img
    src={visitorData.image}
    alt={visitorData.name}
            />

          ) : (

            <User
              size={55}
              className="text-white"
            />

          )}

        </div>

        <h3 className="text-white text-2xl font-bold mt-5">
          {visitorData.name}
        </h3>

        <p className="text-cyan-400 mt-1">
          {visitorData.visitorCode}
        </p>

      </div>

      {/* Details */}

      <div className="grid gap-4 px-6">

        <Info
  icon={Phone}
  label="Mobile"
  value={visitorData.mobileNumber}
/>

<Info
  icon={Mail}
  label="Email"
  value={visitorData.email}
/>

<Info
  icon={Building2}
  label="Company"
  value={visitorData.company}
/>

<Info
  icon={User}
  label="Host"
  value={visitorData.host?.name}
/>

<Info
  icon={Briefcase}
  label="Purpose"
  value={visitorData.purpose}
/>

<Info
  icon={Calendar}
  label="Visit Date"
  value={
    visitorData.createdAt
      ? new Date(visitorData.createdAt).toLocaleDateString()
      : "--"
  }
/>

<Info
  icon={Clock}
  label="Visit Time"
  value={
    visitorData.createdAt
      ? new Date(visitorData.createdAt).toLocaleTimeString()
      : "--"
  }
/>

<Info
  icon={Timer}
  label="Check-In"
  value={
    visitorData.checkedInAt
      ? new Date(visitorData.checkedInAt).toLocaleTimeString()
      : "--"
  }
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
                {visitorData.status}
              </h3>

            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-slate-800 border border-slate-700 p-5">

          <div className="flex items-center gap-3">

           <ShieldCheck className="text-green-400" />

<h3 className="text-white font-semibold mt-1">
  Verified
</h3>

            <div>

              <p className="text-slate-400 text-sm">
                QR Verification
              </p>

              <h3 className="text-white font-semibold mt-1">
              {visitorData.qrCode ? "Verified" : "Pending"}
            </h3>

            </div>

          </div>

        </div>

      </div>

      {/* Actions */}

<div className="grid grid-cols-2 gap-4 p-6 pt-0">

  <button
    onClick={handleCheckIn}
    disabled={!visitor || processing}
    className={`rounded-2xl py-4 text-white font-semibold transition ${
      visitor
        ? "bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-105"
        : "bg-slate-700 cursor-not-allowed"
    }`}
  >
    {processing ? "Checking In..." : "Check-In"}
  </button>

  <button
    onClick={handleReject}
    disabled={!visitor}
    className={`rounded-2xl py-4 text-white font-semibold transition ${
      visitor
        ? "bg-gradient-to-r from-red-600 to-rose-500 hover:scale-105"
        : "bg-slate-700 cursor-not-allowed"
    }`}
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