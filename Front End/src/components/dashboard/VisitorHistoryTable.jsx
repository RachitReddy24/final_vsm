import { useState } from "react";
import {
  Search,
  Eye,
  Download,
  User,
  Clock3,
} from "lucide-react";

const initialVisitors = [
  {
    id: 1,
    visitorId: "VIS-1001",
    visitor: "Rahul Sharma",
    company: "Infosys",
    host: "John Doe",
    checkIn: "09:15 AM",
    checkOut: "11:00 AM",
    duration: "1h 45m",
    status: "Completed",
  },
  {
    id: 2,
    visitorId: "VIS-1002",
    visitor: "Anjali Verma",
    company: "TCS",
    host: "David Smith",
    checkIn: "10:20 AM",
    checkOut: "-",
    duration: "-",
    status: "Checked-In",
  },
  {
    id: 3,
    visitorId: "VIS-1003",
    visitor: "Suresh Kumar",
    company: "Wipro",
    host: "Rukmini",
    checkIn: "-",
    checkOut: "-",
    duration: "-",
    status: "Pending",
  },
];

function VisitorHistoryTable() {
  const [visitors] = useState(initialVisitors);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Visitor History
          </h2>

          <p className="text-slate-400 mt-2">
            Complete history of all visitor records.
          </p>
        </div>

        <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <Download size={20} />
          Export
        </button>

      </div>

      {/* Search */}

      <div className="relative mb-8">

        <Search
          size={20}
          className="absolute left-4 top-4 text-slate-500"
        />

        <input
          placeholder="Search Visitor..."
          className="w-full pl-12 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-white outline-none"
        />

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700">

              <th className="text-left py-4 text-slate-400">
                Visitor
              </th>

              <th className="text-left text-slate-400">
                Company
              </th>

              <th className="text-left text-slate-400">
                Host
              </th>

              <th className="text-left text-slate-400">
                Check-In
              </th>

              <th className="text-left text-slate-400">
                Check-Out
              </th>

              <th className="text-left text-slate-400">
                Duration
              </th>

              <th className="text-left text-slate-400">
                Status
              </th>

              <th className="text-center text-slate-400">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {visitors.map((visitor) => (

              <tr
                key={visitor.id}
                className="border-b border-slate-800"
              >

                <td className="py-5">

                  <div className="flex items-center gap-3">

                    <User className="text-cyan-400" />

                    <div>

                      <p className="text-white font-semibold">
                        {visitor.visitor}
                      </p>

                      <p className="text-slate-500 text-sm">
                        {visitor.visitorId}
                      </p>

                    </div>

                  </div>

                </td>

                <td className="text-slate-300">
                  {visitor.company}
                </td>

                <td className="text-slate-300">
                  {visitor.host}
                </td>

                <td className="text-cyan-400">
                  {visitor.checkIn}
                </td>

                <td className="text-slate-300">
                  {visitor.checkOut}
                </td>

                <td>

                  <div className="flex items-center gap-2 text-slate-300">

                    <Clock3 size={16} />

                    {visitor.duration}

                  </div>

                </td>

                <td>

                  {visitor.status === "Completed" && (
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                      Completed
                    </span>
                  )}

                  {visitor.status === "Checked-In" && (
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
                      Checked-In
                    </span>
                  )}

                  {visitor.status === "Pending" && (
                    <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">
                      Pending
                    </span>
                  )}

                </td>

                <td>

                  <button className="mx-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white">

                    <Eye size={16} />

                    View

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default VisitorHistoryTable;