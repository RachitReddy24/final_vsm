import AdminLayout from "../../layouts/roles/AdminLayout";

import AdminWelcome from "../../components/admin/AdminWelcome";
import AdminStats from "../../components/admin/AdminStats";
import AdminQuickActions from "../../components/admin/AdminQuickActions";
import AdminMeetings from "../../components/admin/AdminMeetings";
import AdminCharts from "../../components/admin/AdminCharts";
import AdminRecentVisitors from "../../components/admin/AdminRecentVisitors";
import AdminRecentActivity from "../../components/admin/AdminRecentActivity";
import AdminUpcomingMeetings from "../../components/admin/AdminUpcomingMeetings";
import AdminNotifications from "../../components/admin/AdminNotifications";

function Dashboard() {
  return (
    <AdminLayout>

      <div className="space-y-8">

        <AdminWelcome />

        <AdminStats />

        <AdminQuickActions />

        <AdminMeetings />

        <AdminCharts />

        <div className="grid xl:grid-cols-2 gap-8">

          <AdminRecentVisitors />

          <AdminUpcomingMeetings />

        </div>

        <AdminRecentActivity />

        <AdminNotifications />

      </div>

    </AdminLayout>
  );
}

export default Dashboard;