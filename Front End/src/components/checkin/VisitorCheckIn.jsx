import DashboardLayout from "../../layouts/roles/DashboardLayout";

import CheckInForm from "../../components/checkin/CheckInForm";
import VisitorInfoCard from "../../components/checkin/VisitorInfoCard";
import CheckInActions from "../../components/checkin/CheckInActions";

function VisitorCheckIn() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Visitor Check-In
          </h1>

          <p className="text-slate-400 mt-2">
            Complete visitor check-in after successful verification.
          </p>

        </div>

        <div className="grid xl:grid-cols-2 gap-8">

          <CheckInForm />

          <VisitorInfoCard />

        </div>

        <CheckInActions />

      </div>

    </DashboardLayout>
  );
}

export default VisitorCheckIn;