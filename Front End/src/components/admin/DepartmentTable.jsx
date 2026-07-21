import { useState } from "react";
import {
  Building2,
  Search,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";

const initialDepartments = [
  {
    id: 1,
    name: "Information Technology",
    code: "IT",
    head: "John Doe",
    employees: 32,
    status: "Active",
  },
  {
    id: 2,
    name: "Human Resources",
    code: "HR",
    head: "Rukmini",
    employees: 12,
    status: "Active",
  },
  {
    id: 3,
    name: "Finance",
    code: "FIN",
    head: "Rahul Sharma",
    employees: 15,
    status: "Active",
  },
  {
    id: 4,
    name: "Administration",
    code: "ADMIN",
    head: "Rachit Reddy",
    employees: 8,
    status: "Active",
  },
];

function DepartmentTable() {
  const [departments] = useState(initialDepartments);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Department Management
          </h2>

          <p className="text-slate-400 mt-2">
            Manage all company departments.
          </p>

        </div>

        <button className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:scale-105 transition">

          <Plus size={20} />

          Add Department

        </button>

      </div>

      {/* Search */}

      <div className="relative mb-8">

        <Search
          size={20}
          className="absolute left-4 top-4 text-slate-500"
        />

        <input
          placeholder="Search Department..."
          className="
            w-full
            pl-12
            py-4
            rounded-2xl
            bg-slate-800
            border
            border-slate-700
            text-white
            outline-none
          "
        />

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700">

              <th className="text-left py-4 text-slate-400">
                Department
              </th>

              <th className="text-left text-slate-400">
                Code
              </th>

              <th className="text-left text-slate-400">
                Department Head
              </th>

              <th className="text-left text-slate-400">
                Employees
              </th>

              <th className="text-left text-slate-400">
                Status
              </th>

              <th className="text-center text-slate-400">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {departments.map((dept) => (

              <tr
                key={dept.id}
                className="border-b border-slate-800 hover:bg-slate-800/40 transition"
              >

                <td className="py-5">

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">

                      <Building2 className="text-cyan-400" />

                    </div>

                    <span className="text-white font-semibold">
                      {dept.name}
                    </span>

                  </div>

                </td>

                <td className="text-cyan-400 font-semibold">
                  {dept.code}
                </td>

                <td className="text-slate-300">
                  {dept.head}
                </td>

                <td className="text-slate-300">
                  {dept.employees}
                </td>

                <td>

                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">

                    {dept.status}

                  </span>

                </td>

                <td>

                  <div className="flex justify-center gap-3">

                    <button className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700">

                      <Edit
                        size={18}
                        className="text-white"
                      />

                    </button>

                    <button className="p-2 rounded-lg bg-red-600 hover:bg-red-700">

                      <Trash2
                        size={18}
                        className="text-white"
                      />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default DepartmentTable;