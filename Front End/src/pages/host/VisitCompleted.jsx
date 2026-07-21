import {
  CheckCircle2,
  Home,
  Printer,
  Clock3,
  User,
  Building2,
  Calendar,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import HostLayout from "../../layouts/roles/HostLayout";

function VisitCompleted() {
  return (
    <HostLayout>

      <div className="flex items-center justify-center min-h-[85vh]">

        <div className="w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

          {/* Header */}

          <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 py-12 text-center">

            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center mx-auto shadow-2xl">

              <CheckCircle2
                size={75}
                className="text-green-600"
              />

            </div>

            <h1 className="text-5xl font-bold text-white mt-6">
              Visit Completed
            </h1>

            <p className="text-green-100 text-lg mt-3">
              The visitor has successfully completed the meeting and checked out.
            </p>

          </div>

          {/* Body */}

          <div className="p-8">

            {/* Summary Cards */}

            <div className="grid md:grid-cols-4 gap-6">

              <SummaryCard
                icon={User}
                title="Visitor"
                value="Rahul Sharma"
              />

              <SummaryCard
                icon={Building2}
                title="Department"
                value="IT Department"
              />

              <SummaryCard
                icon={Calendar}
                title="Visit Date"
                value="08 Jul 2026"
              />

              <SummaryCard
                icon={Clock3}
                title="Duration"
                value="01 Hr 25 Min"
              />

            </div>

            {/* Completion Message */}

            <div className="mt-8 rounded-3xl bg-slate-800 border border-slate-700 p-8">

              <h2 className="text-2xl font-bold text-white mb-4">
                Visit Summary
              </h2>

              <p className="text-slate-300 leading-8">
                The visitor meeting has been completed successfully.
                Feedback has been recorded and the visitor has checked out
                of the premises. The visit has been archived in the
                Visitor Management System for future reference.
              </p>

            </div>

            {/* Status */}

            <div className="grid md:grid-cols-3 gap-5 mt-8">

              <StatusCard
                title="Visitor Approval"
                status="Approved"
                color="green"
              />

              <StatusCard
                title="Feedback"
                status="Submitted"
                color="blue"
              />

              <StatusCard
                title="Check-Out"
                status="Completed"
                color="purple"
              />

            </div>

            {/* Buttons */}

            <div className="grid md:grid-cols-3 gap-5 mt-10">

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

                Print Report

              </button>

              <Link
                to="/approval"
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

                Next Approval

                <ArrowRight size={20} />

              </Link>

              <Link
                to="/"
                className="
                flex
                items-center
                justify-center
                gap-3
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-green-600
                to-emerald-500
                text-white
                font-semibold
                hover:scale-105
                transition-all
                shadow-xl
                "
              >

                <Home size={20} />

                Dashboard

              </Link>

            </div>

          </div>

        </div>

      </div>

    </HostLayout>
  );
}

function SummaryCard({ icon: Icon, title, value }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">

        <Icon
          size={22}
          className="text-cyan-400"
        />

      </div>

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h3 className="text-white text-xl font-bold mt-2">
        {value}
      </h3>

    </div>
  );
}

function StatusCard({ title, status, color }) {

  const colors = {
    green: "bg-green-500/20 text-green-400",
    blue: "bg-blue-500/20 text-blue-400",
    purple: "bg-purple-500/20 text-purple-400",
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

      <p className="text-slate-400 mb-4">
        {title}
      </p>

      <span
        className={`px-4 py-2 rounded-full font-semibold ${colors[color]}`}
      >
        {status}
      </span>

    </div>
  );
}

export default VisitCompleted;