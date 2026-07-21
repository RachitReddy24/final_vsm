import HostLayout from "../../layouts/roles/HostLayout";
import VisitorDetailsCard from "../../components/approval/VisitorDetailsCard";
import {
  ShieldCheck,
  Bell,
} from "lucide-react";

function Approval() {
  return (
    <HostLayout>
      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Visitor Approval
            </h1>

            <p className="text-slate-400 mt-2">
              Review visitor details and approve or reject meeting requests.
            </p>

          </div>

          <div className="flex gap-4 mt-5 lg:mt-0">

            <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/30">

              <Bell
                size={18}
                className="text-yellow-400"
              />

              <span className="text-yellow-400 font-semibold">
                3 Pending Requests
              </span>

            </div>

            <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-green-500/10 border border-green-500/30">

              <ShieldCheck
                size={18}
                className="text-green-400"
              />

              <span className="text-green-400 font-semibold">
                Secure Approval
              </span>

            </div>

          </div>

        </div>

        {/* Approval Card */}

        <VisitorDetailsCard />

      </div>
    </HostLayout>
  );
}

export default Approval;