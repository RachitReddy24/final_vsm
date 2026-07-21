import { useNavigate } from "react-router-dom";

import ReceptionLayout from "../../layouts/roles/ReceptionLayout";
import DataTable from "../../components/table/DataTable";

import { visitors } from "../../data/dashboard";

import {
  Users,
  Download,
  Plus,
  ShieldCheck,
} from "lucide-react";

function VisitorStatus() {
  const navigate = useNavigate();

  const handleRegisterVisitor = () => {
    navigate("/reception/visitor-onboarding");
  };

  const handleExport = () => {
    // Temporary export
    window.print();

    // Later replace with:
    // Export PDF
    // Export Excel
    // Generate Report API
  };

  return (
    <ReceptionLayout>
      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Visitor Status
            </h1>

            <p className="text-slate-400 mt-2">
              Monitor visitors currently inside the organization.
            </p>

          </div>

          <div className="flex gap-4 mt-6 lg:mt-0">

            <button
              onClick={handleExport}
              className="
              flex items-center gap-2
              px-6 py-3
              rounded-2xl
              bg-slate-800
              border border-slate-700
              hover:border-cyan-500
              hover:bg-slate-700
              text-white
              transition-all
              "
            >

              <Download size={18} />

              Export Report

            </button>

            <button
              onClick={handleRegisterVisitor}
              className="
              flex items-center gap-2
              px-6 py-3
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              text-white
              hover:scale-105
              transition-all
              shadow-xl
              "
            >

              <Plus size={18} />

              Register Visitor

            </button>

          </div>

        </div>

        {/* Summary Cards */}

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">

                <Users
                  className="text-white"
                  size={30}
                />

              </div>

              <div>

                <h2 className="text-3xl font-bold text-white">

                  {visitors.length}

                </h2>

                <p className="text-slate-400">

                  Total Visitors

                </p>

              </div>

            </div>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center">

                <ShieldCheck
                  className="text-white"
                  size={30}
                />

              </div>

              <div>

                <h2 className="text-3xl font-bold text-white">

                  {visitors.filter(v => v.status === "Checked In").length}

                </h2>

                <p className="text-slate-400">

                  Checked-In

                </p>

              </div>

            </div>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-yellow-500 flex items-center justify-center">

                <Users
                  className="text-white"
                  size={30}
                />

              </div>

              <div>

                <h2 className="text-3xl font-bold text-white">

                  {visitors.filter(v => v.status !== "Checked Out").length}

                </h2>

                <p className="text-slate-400">

                  Inside Building

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Visitor Table */}

        <DataTable
          title="Today's Visitor Records"
          data={visitors}
        />

      </div>
    </ReceptionLayout>
  );
}

export default VisitorStatus;