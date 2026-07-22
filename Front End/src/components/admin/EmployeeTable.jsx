import { useEffect, useState } from "react";
import AddEmployeeModal from "./AddEmployeeModal";
import api from "../../services/api";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  UserCog,
  Mail,
  Phone,
} from "lucide-react";



function EmployeeTable() {
const [employees, setEmployees] = useState([]);
const [openAdd, setOpenAdd] = useState(false);
useEffect(() => {
  fetchEmployees();
}, []);

const fetchEmployees = async () => {
  try {
    const response = await api.get("/employees");

    setEmployees(response.data.data.employees);
  } catch (error) {
    console.error(error);
    alert(error.response?.data?.message || "Failed to fetch employees");
  }
};
const addEmployee = async (employee) => {
  try {
    await api.post("/employees", employee);

    alert("Employee added successfully");

    setOpenAdd(false);

    fetchEmployees();
  } catch (error) {
    console.error(error);
    alert(error.response?.data?.message || "Failed to add employee");
  }
};
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Employee Management
          </h2>

          <p className="text-slate-400 mt-2">
            Manage employees and meeting hosts.
          </p>
<AddEmployeeModal
  open={openAdd}
  onClose={() => setOpenAdd(false)}
  onSave={addEmployee}
/>
        </div>

<button
  onClick={() => setOpenAdd(true)}
  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
>
          <Plus size={20} />

          Add Employee

        </button>

      </div>

      {/* Search */}

      <div className="relative mb-8">

        <Search
          size={20}
          className="absolute left-4 top-4 text-slate-500"
        />

        <input
          placeholder="Search Employee..."
          className="w-full pl-12 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-white outline-none"
        />

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700">

              <th className="text-left py-4 text-slate-400">
                Employee ID
              </th>

              <th className="text-left text-slate-400">
                Name
              </th>

              <th className="text-left text-slate-400">
                Department
              </th>

              <th className="text-left text-slate-400">
                Designation
              </th>

              <th className="text-left text-slate-400">
                Contact
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

            {employees.map((employee) => (

              <tr
                key={employee.id}
                className="border-b border-slate-800"
              >

                <td className="py-5 text-cyan-400 font-semibold">
                  {employee.employeeId}
                </td>

                <td>

                  <div className="flex items-center gap-3">

                    <UserCog className="text-cyan-400" />

                    <span className="text-white font-semibold">
                      {employee.name}
                    </span>

                  </div>

                </td>

                <td className="text-slate-300">
                  {employee.department?.name || "-"}
                </td>

                <td className="text-slate-300">
                  {employee.role || "-"}
                </td>

                <td>

                  <div className="space-y-2">

                    <div className="flex items-center gap-2 text-slate-300">

                      <Mail size={15} />

                      {employee.email}

                    </div>

                    <div className="flex items-center gap-2 text-slate-400">

                      <Phone size={15} />

                      {employee.phone}

                    </div>

                  </div>

                </td>

                <td>

                  {employee.isActive ? (

                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                      Active
                    </span>

                  ) : (

                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400">
                      Inactive
                    </span>

                  )}

                </td>

                <td>

                  <div className="flex justify-center gap-3">

                    <button className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700">

                      <Edit size={18} className="text-white"/>

                    </button>

                    <button className="p-2 rounded-lg bg-red-600 hover:bg-red-700">

                      <Trash2 size={18} className="text-white"/>

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

export default EmployeeTable;