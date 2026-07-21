import DashboardLayout from "../../layouts/roles/DashboardLayout";
import MeetingRequestTable from "../../components/approval/MeetingRequestTable";

function MeetingRequests() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Page Header */}

        <div>
          <h1 className="text-4xl font-bold text-white">
            Meeting Requests
          </h1>

          <p className="text-slate-400 mt-2">
            Review visitor meeting requests submitted by hosts.
          </p>
        </div>

        {/* Request Table */}

        <MeetingRequestTable />

      </div>
    </DashboardLayout>
  );
}

export default MeetingRequests;