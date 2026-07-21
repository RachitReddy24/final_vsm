import ReceptionLayout from "../../layouts/roles/ReceptionLayout";

import DashboardStats from "../../components/reception/DashboardStats";
import VisitorTimeline from "../../components/reception/VisitorTimeline";

import RecentVisitors from "../../components/dashboard/RecentVisitors";

import VisitorsChart from "../../components/analytics/VisitorsChart";
import DepartmentChart from "../../components/analytics/DepartmentChart";
import RecentActivity from "../../components/analytics/RecentActivity";
import DashboardCalendar from "../../components/analytics/DashboardCalendar";
import QuickActionsCard from "../../components/analytics/QuickActionsCard";

import PageTransition from "../../components/common/PageTransition";

import { visitors } from "../../data/dashboard";

function Dashboard() {
  return (
    <ReceptionLayout>
      <PageTransition>
        <div className="space-y-8">

          {/* Header */}
          <div className="flex items-center justify-between">

            <div>
              <h1 className="text-4xl font-bold">
                Reception Dashboard
              </h1>

              <p className="text-gray-500 mt-2">
                Welcome back, Receptionist 👋
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow transition">
              + New Visitor
            </button>

          </div>

          {/* Statistics */}
          <DashboardStats />

          {/* Charts + Quick Actions */}
          <div className="grid xl:grid-cols-3 gap-8">

            <div className="xl:col-span-2">
              <VisitorsChart />
            </div>

            <QuickActionsCard />

          </div>

          {/* Recent Visitors + Department */}
          <div className="grid xl:grid-cols-2 gap-8">

            <RecentVisitors visitors={visitors} />

            <DepartmentChart />

          </div>

          {/* Recent Activity + Timeline */}
          <div className="grid xl:grid-cols-2 gap-8">

            <RecentActivity />

            <VisitorTimeline />

          </div>

          {/* Calendar */}
          <DashboardCalendar />

        </div>
      </PageTransition>
    </ReceptionLayout>
  );
}

export default Dashboard;