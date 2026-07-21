import {
  CheckCircle2,
  Mail,
  MessageSquare,
  Printer,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import HostLayout from "../../layouts/roles/HostLayout";

function ApprovalSuccess() {
  return (
    <HostLayout>

      <div className="flex justify-center items-center min-h-[80vh]">

        <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

          {/* Header */}

          <div className="bg-gradient-to-r from-green-600 to-emerald-500 py-10 px-8 text-center">

            <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center mx-auto shadow-2xl">

              <CheckCircle2
                size={70}
                className="text-green-600"
              />

            </div>

            <h1 className="text-4xl font-bold text-white mt-6">
              Visitor Approved Successfully
            </h1>

            <p className="text-green-100 mt-3 text-lg">
              The meeting request has been approved and the visitor has been notified.
            </p>

          </div>

          {/* Body */}

          <div className="p-8">

            {/* Visitor Summary */}

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

                <h3 className="text-xl font-bold text-white mb-5">
                  Visitor Information
                </h3>

                <div className="space-y-4">

                  <Info
                    label="Visitor"
                    value="Rahul Sharma"
                  />

                  <Info
                    label="Company"
                    value="ABC Pvt Ltd"
                  />

                  <Info
                    label="Host"
                    value="John Doe"
                  />

                  <Info
                    label="Department"
                    value="IT Department"
                  />

                </div>

              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

                <h3 className="text-xl font-bold text-white mb-5">
                  Meeting Details
                </h3>

                <div className="space-y-4">

                  <Info
                    label="Meeting Date"
                    value="08 Jul 2026"
                  />

                  <Info
                    label="Meeting Time"
                    value="10:30 AM"
                  />

                  <Info
                    label="Visitor ID"
                    value="VMS-2026-001"
                  />

                  <Info
                    label="Status"
                    value="Approved"
                  />

                </div>

              </div>

            </div>

            {/* Notifications */}

            <div className="grid md:grid-cols-2 gap-5 mt-8">

              <div className="rounded-2xl bg-green-500/10 border border-green-500/30 p-5 flex items-center gap-4">

                <Mail
                  size={26}
                  className="text-green-400"
                />

                <div>

                  <h4 className="text-white font-semibold">
                    Email Sent
                  </h4>

                  <p className="text-slate-400 text-sm">
                    Visitor approval email delivered successfully.
                  </p>

                </div>

              </div>

              <div className="rounded-2xl bg-blue-500/10 border border-blue-500/30 p-5 flex items-center gap-4">

                <MessageSquare
                  size={26}
                  className="text-blue-400"
                />

                <div>

                  <h4 className="text-white font-semibold">
                    SMS Sent
                  </h4>

                  <p className="text-slate-400 text-sm">
                    Visitor has received the confirmation message.
                  </p>

                </div>

              </div>

            </div>

            {/* Buttons */}

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              <button
                className="
                flex
                items-center
                justify-center
                gap-3
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                text-white
                font-semibold
                hover:scale-105
                transition-all
                shadow-xl
                "
              >

                <Printer size={20} />

                Print Visitor Pass

              </button>

              <Link
                to="/feedback"
                className="
                flex
                items-center
                justify-center
                gap-3
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-indigo-600
                to-violet-600
                text-white
                font-semibold
                hover:scale-105
                transition-all
                shadow-xl
                "
              >

                Continue to Feedback

                <ArrowRight size={20} />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </HostLayout>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex justify-between border-b border-slate-700 pb-3">

      <span className="text-slate-400">
        {label}
      </span>

      <span className="text-white font-semibold">
        {value}
      </span>

    </div>
  );
}

export default ApprovalSuccess;