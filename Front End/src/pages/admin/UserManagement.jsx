import DashboardLayout from "../../layouts/roles/DashboardLayout";
import UserTable from "../../components/admin/UserTable";
import {
  Users,
} from "lucide-react";

function UserManagement() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              User Management
            </h1>

            <p className="text-slate-400 mt-2">
              Create, update and manage administrators, receptionists and employees.
            </p>

          </div>

          <div className="mt-5 lg:mt-0">

            <div className="inline-flex items-center gap-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 px-5 py-3">

              <Users
                size={22}
                className="text-cyan-400"
              />

              <span className="text-cyan-400 font-semibold">
                User Administration
              </span>

            </div>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <p className="text-slate-400">
              Total Users
            </p>

            <h2 className="text-4xl font-bold text-white mt-4">
              42
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <p className="text-slate-400">
              Admins
            </p>

            <h2 className="text-4xl font-bold text-cyan-400 mt-4">
              3
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <p className="text-slate-400">
              Receptionists
            </p>

            <h2 className="text-4xl font-bold text-green-400 mt-4">
              6
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <p className="text-slate-400">
              Employees
            </p>

            <h2 className="text-4xl font-bold text-violet-400 mt-4">
              33
            </h2>

          </div>

        </div>

        {/* User Table */}

        <UserTable />

      </div>

    </DashboardLayout>
  );
}

export default UserManagement;