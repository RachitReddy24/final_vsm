import {
  Search,
  CheckCircle2,
  Eye,
  Mail,
} from "lucide-react";

import { useEffect, useState } from "react";
import api from "../../services/api";
function ApprovedVisitorsTable({ approvedVisitors }) {

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      {/* Search */}

      <div className="relative mb-8">

        <Search
          size={20}
          className="absolute left-4 top-4 text-slate-500"
        />

        <input
            placeholder="Search Approved Visitors..."          className="
            w-full
            pl-12
            pr-5
            py-4
            rounded-2xl
            bg-slate-800
            border
            border-slate-700
            text-white
            outline-none
            focus:border-cyan-500
          "
        />

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700 text-slate-400">

              <th className="text-left py-4">Visitor</th>

              <th className="text-left">Company</th>

              <th className="text-left">Host</th>

              <th className="text-left">Meeting</th>

              <th className="text-left">Status</th>

              <th className="text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {approvedVisitors.length=== 0 ? (

              <tr>

                <td
                  colSpan="6"
                  className="text-center py-10 text-slate-500"
                >

                  No Approved Visitors

                </td>

              </tr>

            ) : (

              approvedVisitors.map((item) => (

                <tr
                  key={item.id}
                  className="border-b border-slate-800"
                >

                  <td className="py-6">

                    <h3 className="text-white font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-slate-500 text-sm">
                      {item.email}
                    </p>

                  </td>

                  <td className="text-slate-300">
                    {item.company}
                  </td>

                  <td className="text-slate-300">
                    {item.host?.name}
                  </td>

                  <td className="text-slate-300">
  {item.approvedAt ? (
    <>
      {new Date(item.approvedAt).toLocaleDateString()}
      <br />
      {new Date(item.approvedAt).toLocaleTimeString()}
    </>
  ) : (
    "-"
  )}
</td>

                  <td>

                    <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 flex items-center gap-2 w-fit">

                      <CheckCircle2 size={16} />

                      {item.status}

                    </span>

                  </td>

                  <td>

                    <div className="flex justify-center gap-3">

                      <button
                        className="
                          flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-xl
                          bg-cyan-600
                          hover:bg-cyan-700
                          text-white
                        "
                      >

                        <Eye size={18} />

                        View

                      </button>

                      <button
                        className="
                          flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-xl
                          bg-indigo-600
                          hover:bg-indigo-700
                          text-white
                        "
                      >

                        <Mail size={18} />

                        Preview Mail

                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ApprovedVisitorsTable;