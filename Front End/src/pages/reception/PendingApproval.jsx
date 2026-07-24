import { useEffect, useState } from "react";
import ReceptionLayout from "../../layouts/roles/ReceptionLayout";
import api from "../../services/api";

import PendingVisitorCard from "../../components/reception/PendingVisitorCard";

function PendingApprovals() {
  const [visitors, setVisitors] = useState([]);
  const [filteredVisitors, setFilteredVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchVisitors();
  }, []);

  useEffect(() => {
    const value = search.toLowerCase();

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilteredVisitors(
      visitors.filter(
        (visitor) =>
          visitor.name?.toLowerCase().includes(value) ||
          visitor.company?.toLowerCase().includes(value) ||
          visitor.host?.name?.toLowerCase().includes(value)
      )
    );
  }, [search, visitors]);

  const fetchVisitors = async () => {
    try {
      setLoading(true);

      const response = await api.get("/unplanned-visits");

      setVisitors(response.data.data || []);
      setFilteredVisitors(response.data.data || []);
    } catch (error) {
      console.error(error);
      alert("Unable to load visitors.");
    } finally {
      setLoading(false);
    }
  };

  const approveVisitor = async (id) => {
    try {
      await api.post(`/unplanned-visits/${id}/approve`);

      alert("Visitor Approved");

      fetchVisitors();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Approval Failed"
      );
    }
  };

  const rejectVisitor = async (id) => {
    try {
      await api.post(`/unplanned-visits/${id}/reject`);

      alert("Visitor Rejected");

      fetchVisitors();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Rejection Failed"
      );
    }
  };

  return (
    <ReceptionLayout>
      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-3xl font-bold mb-6">
          Pending Walk-In Approvals
        </h1>

        <input
          type="text"
          placeholder="Search Visitor / Company / Host"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl p-3 mb-8"
        />

        {loading ? (
          <div className="text-center py-20">
            Loading visitors...
          </div>
        ) : filteredVisitors.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No Pending Visitors
          </div>
        ) : (
          <div className="space-y-6">
            {filteredVisitors.map((visitor) => (
              <PendingVisitorCard
                key={visitor.id}
                visitor={visitor}
                onApprove={approveVisitor}
                onReject={rejectVisitor}
              />
            ))}
          </div>
        )}

      </div>
    </ReceptionLayout>
  );
}

export default PendingApprovals;