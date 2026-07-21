import { useState } from "react";
import {
  User,
  Phone,
  Building2,
  Calendar,
  Clock,
  Briefcase,
  MapPin,
  ShieldCheck,
  AlertCircle,
  FileText,
  Bell,
  CheckCircle2,
  LogIn,
  XCircle,
} from "lucide-react";

function VisitorDetailsCard() {
  const [status, setStatus] = useState("Pending Check-In");

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-800 px-8 py-6">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Visitor Verification
            </h2>

            <p className="text-slate-400 mt-2">
              Verify visitor identity before completing check-in.
            </p>

          </div>

          <div className="flex gap-3">

            <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">
              ADMIN APPROVED
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold">
              {status}
            </span>

          </div>

        </div>

      </div>

      {/* Content */}

      <div className="p-8 grid xl:grid-cols-3 gap-8">

        {/* Left */}

        <div className="xl:col-span-1">

          <div className="flex flex-col items-center">

            <div className="w-44 h-44 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl">

              <User
                size={90}
                className="text-white"
              />

            </div>

            <h2 className="text-white text-2xl font-bold mt-6">
              Rahul Sharma
            </h2>

            <p className="text-slate-400">
              Visitor ID : VMS-2026-001
            </p>

            <div className="mt-6 w-full rounded-2xl bg-slate-800 border border-slate-700 p-5">

              <div className="flex items-center gap-3">

                <ShieldCheck
                  className="text-green-400"
                  size={22}
                />

                <div>

                  <p className="text-slate-400 text-sm">
                    Identity Verification
                  </p>

                  <p className="text-green-400 font-semibold">
                    QR / OTP Verified
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="xl:col-span-2">
                    <div className="grid md:grid-cols-2 gap-5">

            <Info
              icon={Phone}
              label="Mobile"
              value="9876543210"
            />

            <Info
              icon={Building2}
              label="Company"
              value="ABC Pvt Ltd"
            />

            <Info
              icon={Briefcase}
              label="Purpose"
              value="Business Meeting"
            />

            <Info
              icon={User}
              label="Host"
              value="John Doe"
            />

            <Info
              icon={Building2}
              label="Department"
              value="IT Department"
            />

            <Info
              icon={MapPin}
              label="Location"
              value="Block A • Floor 2"
            />

            <Info
              icon={Calendar}
              label="Visit Date"
              value="08 Jul 2026"
            />

            <Info
              icon={Clock}
              label="Visit Time"
              value="10:30 AM"
            />

          </div>

          {/* Meeting Summary */}

          <div className="mt-8 rounded-3xl bg-slate-800 border border-slate-700 p-6">

            <div className="flex items-center gap-3 mb-4">

              <FileText
                className="text-cyan-400"
                size={22}
              />

              <h3 className="text-xl font-semibold text-white">
                Meeting Summary
              </h3>

            </div>

            <p className="text-slate-300 leading-7">

              Visitor is scheduled for an enterprise business
              meeting regarding software implementation and
              technical discussion with the IT Department.

            </p>

          </div>

          {/* Reception Notice */}

          <div className="mt-6 rounded-3xl bg-blue-500/10 border border-blue-500/20 p-6">

            <div className="flex gap-4">

              <AlertCircle
                className="text-blue-400 mt-1"
                size={22}
              />

              <div>

                <h4 className="text-blue-300 font-semibold text-lg">

                  Reception Instructions

                </h4>

                <p className="text-slate-300 mt-3 leading-7">

                  This meeting has already been approved by the
                  administrator.

                  <br /><br />

                  Verify the visitor using the QR Code or OTP.

                  <br /><br />

                  After successful verification, complete the
                  visitor Check-In and notify the meeting host.

                </p>

              </div>

            </div>

          </div>

          {/* Current Status */}

          <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800 p-5">

            <div className="flex justify-between items-center">

              <span className="text-slate-400">

                Visitor Status

              </span>

              <span
                className={`px-4 py-2 rounded-full font-semibold ${
                  status === "Pending Check-In"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : status === "Verified"
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-green-500/20 text-green-400"
                }`}
              >

                {status}

              </span>

            </div>

          </div>
                    {/* Action Buttons */}

          <div className="grid grid-cols-2 gap-5 mt-8">

            <button
              onClick={() => setStatus("Verified")}
              className="
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              hover:scale-105
              transition-all
              duration-300
              text-white
              font-bold
              shadow-xl
              flex
              justify-center
              items-center
              gap-3
              "
            >

              <CheckCircle2 size={20} />

              Verify Visitor

            </button>

            <button
              onClick={() => setStatus("Checked In")}
              className="
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-green-600
              to-emerald-500
              hover:scale-105
              transition-all
              duration-300
              text-white
              font-bold
              shadow-xl
              flex
              justify-center
              items-center
              gap-3
              "
            >

              <LogIn size={20} />

              Check-In Visitor

            </button>

            <button
              onClick={() => alert("Host Notification Ready")}
              className="
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-500
              hover:scale-105
              transition-all
              duration-300
              text-white
              font-bold
              shadow-xl
              flex
              justify-center
              items-center
              gap-3
              "
            >

              <Bell size={20} />

              Notify Host

            </button>

            <button
              onClick={() => setStatus("Rejected")}
              className="
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-red-600
              to-rose-500
              hover:scale-105
              transition-all
              duration-300
              text-white
              font-bold
              shadow-xl
              flex
              justify-center
              items-center
              gap-3
              "
            >

              <XCircle size={20} />

              Reject Entry

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-cyan-500 transition-all duration-300">

      <div className="flex items-start gap-4">

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

export default VisitorDetailsCard;