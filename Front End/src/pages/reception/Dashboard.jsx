import ReceptionLayout from "../../layouts/roles/ReceptionLayout";

import ReceptionWelcome from "../../components/reception/ReceptionWelcome";
import ReceptionStats from "../../components/reception/ReceptionStats";
import LiveVisitorQueue from "../../components/reception/LiveVisitorQueue";
import TodaysMeetings from "../../components/reception/TodaysMeetings";
import RecentCheckIns from "../../components/reception/RecentCheckIns";
import RecentCheckOuts from "../../components/reception/RecentCheckOuts";
import QuickActions from "../../components/reception/QuickActions";

function Dashboard() {
  return (
    <ReceptionLayout>

      <div className="space-y-8">

        <ReceptionWelcome />

        <ReceptionStats />

        <div className="grid xl:grid-cols-2 gap-8">

          <LiveVisitorQueue />

          <TodaysMeetings />

        </div>

        <div className="grid xl:grid-cols-2 gap-8">

          <RecentCheckIns />

          <RecentCheckOuts />

        </div>

        <QuickActions />

      </div>

    </ReceptionLayout>
  );
}

export default Dashboard;