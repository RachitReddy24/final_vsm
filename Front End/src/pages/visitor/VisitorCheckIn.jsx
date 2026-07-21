import ReceptionLayout from "../../layouts/roles/ReceptionLayout";

import VerificationCard from "../../components/visitor/VerificationCard";
import VisitorDetailsCard from "../../components/visitor/VisitorDetailsCard";
import VisitorBadgeCard from "../../components/visitor/VisitorBadgeCard";

import {
  LogIn,
  BadgeCheck,
} from "lucide-react";

function VisitorCheckIn() {
  return (
    <ReceptionLayout>

      <div className="space-y-8">

        {/* Header */}

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Visitor Check-In
            </h1>

            <p className="text-slate-400 mt-2">
              Verify visitor and complete reception check-in.
            </p>

          </div>

          <div className="inline-flex items-center gap-3 rounded-2xl bg-green-500/10 border border-green-500/30 px-5 py-3">

            <BadgeCheck
              size={20}
              className="text-green-400"
            />

            <span className="text-green-400 font-semibold">
              Check-In Module
            </span>

          </div>

        </div>

        {/* Verification */}

        <VerificationCard />

        {/* Visitor Details */}

        <VisitorDetailsCard />

        {/* Visitor Badge */}

        <VisitorBadgeCard />

        {/* Check-In Button */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <div className="flex justify-end">

            <button
              className="
              flex
              items-center
              gap-3
              px-8
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-green-600
              to-emerald-500
              hover:scale-105
              transition
              text-white
              font-semibold
              shadow-xl
              "
            >

              <LogIn size={22} />

              Check-In Visitor

            </button>

          </div>

        </div>

      </div>

    </ReceptionLayout>
  );
}

export default VisitorCheckIn;