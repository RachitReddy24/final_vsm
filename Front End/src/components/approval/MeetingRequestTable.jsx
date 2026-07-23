import { useState } from "react";
import {
  Search,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import ApproveModal from "./ApproveModal";
import RejectModal from "./RejectModal";

import api from "../../services/api";
function MeetingRequestTable({ pendingMeetings,onRefresh }) {

  const [selectedVisitor, setSelectedVisitor] = useState(null);

  const [approveOpen, setApproveOpen] = useState(false);

  const [rejectOpen, setRejectOpen] = useState(false);

  const openApprove = (visitor) => {
    setSelectedVisitor(visitor);
    setApproveOpen(true);
  };

  const openReject = (visitor) => {
    setSelectedVisitor(visitor);
    setRejectOpen(true);
  };

const handleApprove = async () => {
  try {
    await api.post(
      `/unplanned-visits/${selectedVisitor.id}/approve`
    );

    setApproveOpen(false);
    setSelectedVisitor(null);
    onRefresh();

    alert("Visitor approved successfully.");
  } catch (error) {
    console.error(error);

    alert("Failed to approve visitor.");
  }
};

const handleReject = async (reason) => {
  try {
    await api.post(
      `/unplanned-visits/${selectedVisitor.id}/reject`,
      { reason }
    );

    setRejectOpen(false);
    setSelectedVisitor(null);
    onRefresh();

    alert("Visitor rejected successfully.");
  } catch (error) {
    console.error(error);

    alert("Failed to reject visitor.");
  }
};

  return (
    <>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

        {/* Search */}

        <div className="relative mb-8">

          <Search
            size={20}
            className="absolute left-4 top-4 text-slate-500"
          />

          <input
            placeholder="Search Visitor..."
            className="
              w-full
              pl-12
              pr-5
              py-4
              rounded-2xl
              bg-slate-800
              border
              border-slate-700
              text-white
              outline-none
              focus:border-cyan-500
            "
          />

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-700 text-slate-400">

                <th className="text-left py-4">Visitor</th>

                <th className="text-left">Company</th>

                <th className="text-left">Host</th>

                <th className="text-left">Meeting</th>

                <th className="text-left">Status</th>

                <th className="text-center">Action</th>

              </tr>

            </thead>

            <tbody>

               {pendingMeetings.length === 0 ? (
    <tr>
      <td
        colSpan="6"
        className="text-center py-8 text-slate-400"
      >
        No pending visitor requests.
      </td>
    </tr>
  ) : (
    pendingMeetings.map((item) => (

                <tr
                  key={item.id}
                  className="border-b border-slate-800"
                >

                  <td className="py-6 text-white font-semibold">
                    {item.name}
                  </td>

                  <td className="text-slate-300">
                    {item.company}
                  </td>

                  <td className="text-slate-300">
                    {item.host?.name}
                  </td>

                  <td className="text-slate-300">
                    {new Date(item.createdAt).toLocaleDateString()}
                    <br />
                    {new Date(item.createdAt).toLocaleTimeString()}
                  </td>

                  <td>

                    <span className="px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400">
                     {item.status}
                    </span>

                  </td>

                  <td>
    
                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() => openApprove(item)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white"
                      >

                        <CheckCircle2 size={18} />

                        Approve

                      </button>

                      <button
                        onClick={() => openReject(item)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white"
                      >

                        <XCircle size={18} />

                        Reject

                      </button>

                    </div>

                  </td>

                </tr>

                  ))
                  )}


            </tbody>

          </table>

        </div>

      </div>

      <ApproveModal
        open={approveOpen}
        visitor={selectedVisitor}
        onClose={() => setApproveOpen(false)}
        onApprove={handleApprove}
      />

      <RejectModal
        open={rejectOpen}
        visitor={selectedVisitor}
        onClose={() => setRejectOpen(false)}
        onReject={handleReject}
      />
    </>
  );
}

export default MeetingRequestTable;