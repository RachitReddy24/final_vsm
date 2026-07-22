import DashboardLayout from "../../layouts/roles/DashboardLayout";
import MonthlyChart from "../../components/reports/MonthlyChart";
import StatusChart from "../../components/reports/StatusChart";
import ActivityTimeline from "../../components/reports/ActivityTimeline";
import { useEffect, useState } from "react";
import api from "../../services/api";
import {
  Download,
  CalendarDays,
  TrendingUp,
  Users,
  Clock3,
  ShieldCheck,
} from "lucide-react";

function Reports() {
  const [summary, setSummary] = useState({
  totalVisitors: 0,
  todayVisitors: 0,
  approvedVisitors: 0,
  checkedInVisitors: 0,
  checkedOutVisitors: 0,
  feedbackCount: 0,
  totalMeetings: 0,
});
useEffect(() => {
  fetchSummary();
}, []);

const fetchSummary = async () => {
  try {
    const response = await api.get("/reports/summary");
    setSummary(response.data.data);
  } catch (error) {
    console.error(error);
  }
};
  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between lg:items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Reports & Analytics
            </h1>

            <p className="text-slate-400 mt-2">
              Analyze visitor trends, approvals and organizational activity.
            </p>

          </div>

          <button
            className="
            mt-5 lg:mt-0
            flex
            items-center
            gap-3
            px-6
            py-3
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

            <Download size={20} />

            Export Report

          </button>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <StatCard
            title="Total Visitors"
            value={summary.totalVisitors}
            icon={<Users size={28} />}
            color="from-blue-600 to-cyan-500"
          />

          <StatCard
            title="Today's Visits"
            value={summary.todayVisitors}
            icon={<CalendarDays size={28} />}
            color="from-green-600 to-emerald-500"
          />

          <StatCard
            title="Approval Rate"
            value={summary.approvedVisitors}
            icon={<ShieldCheck size={28} />}
            color="from-purple-600 to-violet-500"
          />

          <StatCard
            title="Average Duration"
            value={summary.totalMeetings}
            icon={<Clock3 size={28} />}
            color="from-orange-500 to-yellow-500"
          />

        </div>

        {/* Charts */}

        <div className="grid xl:grid-cols-2 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">

            <div className="flex justify-between items-center mb-6">

              <div>

                <h2 className="text-2xl font-bold text-white">
                  Monthly Visitors
                </h2>

                <p className="text-slate-400">
                  Last 12 Months
                </p>

              </div>

              <TrendingUp
                className="text-cyan-400"
                size={28}
              />

            </div>

            <MonthlyChart />

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">

            <div className="flex justify-between items-center mb-6">

              <div>

                <h2 className="text-2xl font-bold text-white">
                  Visitor Status
                </h2>

                <p className="text-slate-400">
                  Approval Distribution
                </p>

              </div>

              <ShieldCheck
                className="text-green-400"
                size={28}
              />

            </div>

            <StatusChart />

          </div>

        </div>

        {/* Timeline */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">

          <h2 className="text-2xl font-bold text-white mb-6">
            Recent Activity Timeline
          </h2>

          <ActivityTimeline />

        </div>

      </div>

    </DashboardLayout>
  );
}

function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div
      className={`bg-gradient-to-r ${color} rounded-3xl p-6 shadow-xl`}
    >

      <div className="flex justify-between items-center">

        <div>

          <p className="text-white/80">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-white mt-3">
            {value}
          </h2>

        </div>

        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white">

          {icon}

        </div>

      </div>

    </div>
  );
}

export default Reports;