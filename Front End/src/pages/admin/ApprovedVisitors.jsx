import AdminLayout from "../../layouts/roles/AdminLayout";
import ApprovedVisitorsTable from "../../components/approval/ApprovedVisitorsTable";
import { useEffect, useState } from "react";
import api from "../../services/api";
import {
  CheckCircle2,
  CalendarDays,
  Users,
  Building2,
} from "lucide-react";

// Temporary mock data until MeetingContext is implemented


function ApprovedVisitors() {
  const [approvedVisitors, setApprovedVisitors] = useState([]);

const fetchApprovedVisitors = async () => {
  try {
    const res = await api.get("/unplanned-visits?status=APPROVED");
    setApprovedVisitors(res.data.data);
  } catch (error) {
    console.error("Failed to fetch approved visitors:", error);
  }
};

useEffect(() => {
  fetchApprovedVisitors();
}, []);
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-white">
             Approved Visitors
          </h1>

          <p className="text-slate-400 mt-2">
             View all approved walk-in visitors.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
 <StatCard
  title="Approved Visitors"
  value={approvedVisitors.length}
  icon={CheckCircle2}
  color="green"
/>

<StatCard
  title="Today's Visitors"
  value={approvedVisitors.length}
  icon={CalendarDays}
  color="blue"
/>

<StatCard
  title="Departments"
  value={
    new Set(approvedVisitors.map(v => v.host?.department?.name).filter(Boolean)).size
  }
  icon={Building2}
  color="purple"
/>

<StatCard
  title="Hosts"
  value={
    new Set(approvedVisitors.map(v => v.host?.id).filter(Boolean)).size
  }
  icon={Users}
  color="cyan"
/>
        </div>

        {/* Table */}
        <ApprovedVisitorsTable approvedVisitors={approvedVisitors} />
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

export default ApprovedVisitors;