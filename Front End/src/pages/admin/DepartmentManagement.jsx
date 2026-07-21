import AdminLayout from "../../layouts/roles/AdminLayout";
import DepartmentTable from "../../components/admin/DepartmentTable";
import { Building2 } from "lucide-react";

function DepartmentManagement() {
  return (
    <AdminLayout>

      <div className="space-y-8">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Department Management
            </h1>

            <p className="text-slate-400 mt-2">
              Manage organization departments.
            </p>

          </div>

          <div className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 px-5 py-3">

            <Building2
              size={20}
              className="text-cyan-400"
            />

            <span className="text-cyan-400 font-semibold">
              Departments
            </span>

          </div>

        </div>

        <DepartmentTable />

      </div>

    </AdminLayout>
  );
}

export default DepartmentManagement;