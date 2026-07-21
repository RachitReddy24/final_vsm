import AdminLayout from "../../layouts/roles/AdminLayout";
import VisitorHistoryTable from "../../components/dashboard/VisitorHistoryTable";
import { ClipboardList } from "lucide-react";

function VisitorHistory() {
  return (
    <AdminLayout>

      <div className="space-y-8">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Visitor History
            </h1>

            <p className="text-slate-400 mt-2">
              View complete visitor records and visit history.
            </p>

          </div>

          <div className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 px-5 py-3">

            <ClipboardList size={20} className="text-cyan-400" />

            <span className="text-cyan-400 font-semibold">
              Visitor Records
            </span>

          </div>

        </div>

        <VisitorHistoryTable />

      </div>

    </AdminLayout>
  );
}

export default VisitorHistory;