import AdminLayout from "../../layouts/roles/AdminLayout";
import EmployeeTable from "../../components/admin/EmployeeTable";
import { UserCog } from "lucide-react";

function EmployeeManagement() {
  return (
    <AdminLayout>

      <div className="space-y-8">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Employee Management
            </h1>

            <p className="text-slate-400 mt-2">
              Manage employees, hosts, and staff information.
            </p>

          </div>

          <div className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 px-5 py-3">

            <UserCog size={20} className="text-cyan-400" />

            <span className="text-cyan-400 font-semibold">
              Employees
            </span>

          </div>

        </div>

        <EmployeeTable />

      </div>

    </AdminLayout>
  );
}

export default EmployeeManagement;