import AdminLayout from "../../layouts/roles/AdminLayout";
import ApprovedMeetingsTable from "../../components/approval/ApprovedMeetingsTable";

import {
  CheckCircle2,
  CalendarDays,
  Users,
  Building2,
} from "lucide-react";

// Temporary mock data until MeetingContext is implemented
const approvedMeetings = [
  {
    id: 1,
    visitor: "Rahul Sharma",
    host: "John Doe",
    department: "IT",
    status: "Approved",
  },
];

function ApprovedMeetings() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-white">
            Approved Meetings
          </h1>

          <p className="text-slate-400 mt-2">
            All visitor requests approved by Admin.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard
            title="Approved Visitors"
            value={approvedMeetings.length}
            icon={CheckCircle2}
            color="green"
          />

          <StatCard
            title="Today's Meetings"
            value={approvedMeetings.length}
            icon={CalendarDays}
            color="blue"
          />

          <StatCard
            title="Departments"
            value="6"
            icon={Building2}
            color="purple"
          />

          <StatCard
            title="Hosts"
            value={approvedMeetings.length}
            icon={Users}
            color="cyan"
          />
        </div>

        {/* Table */}
        <ApprovedMeetingsTable />
      </div>
    </AdminLayout>
  );
}

function StatCard({ title, value, icon: Icon, color }) {
  const colors = {
    green: "from-green-500 to-emerald-500",
    blue: "from-blue-600 to-cyan-500",
    purple: "from-violet-600 to-fuchsia-600",
    cyan: "from-cyan-500 to-sky-500",
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-400">{title}</p>

          <h2 className="text-4xl font-bold text-white mt-2">
            {value}
          </h2>
        </div>

        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${colors[color]} flex items-center justify-center`}
        >
          <Icon size={30} className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default ApprovedMeetings;