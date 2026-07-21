import {
  Search,
  Filter,
  MoreVertical,
} from "lucide-react";

import StatusBadge from "../dashboard/StatusBadge";
// eslint-disable-next-line no-unused-vars
import TableHeader from "./TableHeader";
import TablePagination from "./TablePagination";

function DataTable({ title, data }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-6 border-b border-slate-800">

        <div>

          <h2 className="text-2xl font-bold text-white">
            {title}
          </h2>

          <p className="text-slate-400 mt-1">
            Manage all visitor records
          </p>

        </div>

        <div className="flex gap-3 mt-5 lg:mt-0">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-3.5 text-slate-500"
            />

            <input
              placeholder="Search visitor..."
              className="
              w-64
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              pl-11
              pr-4
              py-3
              text-white
              placeholder:text-slate-500
              focus:border-blue-500
              outline-none
              "
            />

          </div>

          <button
            className="
            px-4
            rounded-xl
            bg-slate-800
            border
            border-slate-700
            hover:border-blue-500
            transition
            "
          >

            <Filter
              size={20}
              className="text-slate-300"
            />

          </button>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-800">

            <tr className="text-slate-300">

              <th className="text-left px-6 py-4">
                Visitor
              </th>

              <th className="text-left px-6 py-4">
                Host
              </th>

              <th className="text-left px-6 py-4">
                Purpose
              </th>

              <th className="text-left px-6 py-4">
                Status
              </th>

              <th className="text-center px-6 py-4">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {data.map((item) => (

              <tr
                key={item.id}
                className="border-t border-slate-800 hover:bg-slate-800/60 transition"
              >

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">

                      {item.name.charAt(0)}

                    </div>

                    <div>

                      <p className="text-white font-semibold">
                        {item.name}
                      </p>

                      <p className="text-slate-400 text-sm">
                        Visitor ID : {item.id}
                      </p>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-5 text-slate-300">
                  {item.host}
                </td>

                <td className="px-6 py-5 text-slate-300">
                  {item.purpose}
                </td>

                <td className="px-6 py-5">
                  <StatusBadge status={item.status} />
                </td>

                <td className="px-6 py-5 text-center">

                  <button
                    className="
                    w-10
                    h-10
                    rounded-xl
                    bg-slate-800
                    hover:bg-blue-600
                    transition
                    flex
                    items-center
                    justify-center
                    mx-auto
                    "
                  >

                    <MoreVertical
                      size={18}
                      className="text-white"
                    />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <TablePagination />

    </div>
  );
}

export default DataTable;