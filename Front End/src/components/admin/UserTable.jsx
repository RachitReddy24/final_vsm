import { useState } from "react";
import {
  Search,
  UserPlus,
  Edit,
  Trash2,
  ShieldCheck,
  UserCog,
} from "lucide-react";

import AddUserModal from "../dashboard/AddUserModal";
import EditUserModal from "../dashboard/EditUserModal";
import DeleteUserModal from "../dashboard/DeleteUserModal";

const initialUsers = [
  {
    id: 1,
    name: "Rachit Reddy",
    email: "rachit@s3dtech.com",
    phone: "9059631379",
    role: "Admin",
    department: "Administration",
    status: "Active",
  },
  {
    id: 2,
    name: "Rukmini",
    email: "rukmini@s3dtech.com",
    phone: "6300450242",
    role: "Reception",
    department: "Reception",
    status: "Active",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@s3dtech.com",
    phone: "9876543210",
    role: "Host",
    department: "IT",
    status: "Inactive",
  },
];

function UserTable() {
  const [users, setUsers] = useState(initialUsers);

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  const addUser = (newUser) => {
    setUsers((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...newUser,
        status: "Active",
      },
    ]);

    setOpenAdd(false);
  };

  const updateUser = (updatedUser) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );

    setOpenEdit(false);
  };

  const deleteUser = (id) => {
    setUsers((prev) =>
      prev.filter((user) => user.id !== id)
    );

    setOpenDelete(false);
  };

  return (
    <>
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 mb-8">

          <div>

            <h2 className="text-2xl font-bold text-white">
              User Management
            </h2>

            <p className="text-slate-400 mt-2">
              Manage administrators, receptionists and hosts.
            </p>

          </div>

          <button
            onClick={() => setOpenAdd(true)}
            className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:scale-105 transition"
          >
            <UserPlus size={20} />
            Add User
          </button>

        </div>

        {/* Search */}

        <div className="relative mb-8">

          <Search
            size={20}
            className="absolute left-4 top-4 text-slate-500"
          />

          <input
            placeholder="Search User..."
            className="w-full pl-12 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-white outline-none"
          />

        </div>

        {/* Table */}

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-700">

                <th className="text-left py-4 text-slate-400">
                  Name
                </th>

                <th className="text-left text-slate-400">
                  Email
                </th>

                <th className="text-left text-slate-400">
                  Phone
                </th>

                <th className="text-left text-slate-400">
                  Role
                </th>

                <th className="text-left text-slate-400">
                  Department
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

              {users.map((user) => (

                <tr
                  key={user.id}
                  className="border-b border-slate-800 hover:bg-slate-800/40 transition"
                >

                  <td className="py-5 text-white font-semibold">
                    {user.name}
                  </td>

                  <td className="text-slate-300">
                    {user.email}
                  </td>

                  <td className="text-slate-300">
                    {user.phone}
                  </td>

                  <td>

                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400">

                      <UserCog size={15} />

                      {user.role}

                    </span>

                  </td>

                  <td className="text-slate-300">
                    {user.department}
                  </td>

                  <td>

                    {user.status === "Active" ? (

                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400">

                        <ShieldCheck size={15} />

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

                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setOpenEdit(true);
                        }}
                        className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700"
                      >
                        <Edit
                          size={18}
                          className="text-white"
                        />
                      </button>

                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setOpenDelete(true);
                        }}
                        className="p-2 rounded-lg bg-red-600 hover:bg-red-700"
                      >
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

      <AddUserModal
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onSave={addUser}
      />

      <EditUserModal
        open={openEdit}
        user={selectedUser}
        onClose={() => setOpenEdit(false)}
        onSave={updateUser}
      />

      <DeleteUserModal
        open={openDelete}
        user={selectedUser}
        onClose={() => setOpenDelete(false)}
        onDelete={deleteUser}
      />
    </>
  );
}

export default UserTable;
