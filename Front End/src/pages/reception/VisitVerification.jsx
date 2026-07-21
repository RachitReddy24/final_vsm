import ReceptionLayout from "../../layouts/roles/ReceptionLayout";
import VerificationCard from "../../components/visitor/VerificationCard";
import VisitorDetailsCard from "../../components/visitor/VisitorDetailsCard";
import { ShieldCheck } from "lucide-react";

function VisitVerification() {
  return (
    <ReceptionLayout>
      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Visit Verification
            </h1>

            <p className="text-slate-400 mt-2">
              Verify visitors using QR Code or OTP before granting access.
            </p>

          </div>

          <div className="mt-5 lg:mt-0">

            <div className="inline-flex items-center gap-2 rounded-2xl bg-blue-500/10 border border-blue-500/30 px-5 py-3">

              <ShieldCheck
                size={20}
                className="text-blue-400"
              />

              <span className="text-blue-300 font-semibold">
                Security Verification
              </span>

            </div>

          </div>

        </div>

        {/* Main Content */}

        <div className="grid xl:grid-cols-5 gap-8">

          {/* Scanner */}

          <div className="xl:col-span-3">

            <VerificationCard />

          </div>

          {/* Visitor Details */}

          <div className="xl:col-span-2">

            <VisitorDetailsCard />

          </div>

        </div>

      </div>
    </ReceptionLayout>
  );
}

export default VisitVerification;