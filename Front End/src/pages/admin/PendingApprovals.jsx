import DashboardLayout from "../../layouts/roles/DashboardLayout";

import MeetingRequestTable from "../../components/approval/MeetingRequestTable";

import {
  Clock3,
  CheckCircle2,
  XCircle,
  Users,
} from "lucide-react";

import { useMeeting } from "../../context/MeetingContext";

function PendingApprovals() {
  const {
    pendingMeetings,
    approvedMeetings,
    rejectedMeetings,
  } = useMeeting();

  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Header */}

        <div>

          <h1 className="text-4xl font-bold text-white">
            Pending Visitor Approvals
          </h1>

          <p className="text-slate-400 mt-2">
            Review visitor requests submitted by Reception.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <StatCard
            title="Pending"
            value={pendingMeetings.length}
            icon={Clock3}
            color="yellow"
          />

          <StatCard
            title="Approved"
            value={approvedMeetings.length}
            icon={CheckCircle2}
            color="green"
          />

          <StatCard
            title="Rejected"
            value={rejectedMeetings.length}
            icon={XCircle}
            color="red"
          />

          <StatCard
            title="Total Requests"
            value={
              pendingMeetings.length +
              approvedMeetings.length +
              rejectedMeetings.length
            }
            icon={Users}
            color="blue"
          />

        </div>

        {/* Table */}

        <MeetingRequestTable />

      </div>

    </DashboardLayout>
  );
}

function StatCard({
  title,
  value,
  icon: Icon,
  color,
}) {

  const colors = {
    yellow: "from-yellow-500 to-orange-500",
    green: "from-green-500 to-emerald-500",
    red: "from-red-500 to-pink-500",
    blue: "from-blue-600 to-cyan-500",
  };

  return (

    <div
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-3xl
      p-6
      shadow-xl
      "
    >

      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-400">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            {value}
          </h2>

        </div>

        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${colors[color]} flex items-center justify-center`}
        >

          <Icon
            size={30}
            className="text-white"
          />

        </div>

      </div>

    </div>

  );
}

export default PendingApprovals;