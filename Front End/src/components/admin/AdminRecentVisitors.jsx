import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import api from "../../services/api";
import {
  Eye,
  Clock3,
} from "lucide-react";



function StatusBadge({ status }) {
  switch (status) {
    case "Approved":
      return (
        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
          Approved
        </span>
      );

    case "Checked-In":
      return (
        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
          Checked-In
        </span>
      );

    case "Rejected":
      return (
        <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm">
          Rejected
        </span>
      );

    default:
      return (
        <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">
          Pending
        </span>
      );
  }
}

function AdminRecentVisitors() {
  const [visitors, setVisitors] = useState([]);

useEffect(() => {
  fetchRecentVisitors();
}, []);

const fetchRecentVisitors = async () => {
  try {
    const res = await api.get("/dashboard/recent-visitors");
    setVisitors(res.data.data || []);
  } catch (error) {
    console.error("Recent Visitors Error:", error);
  }
};
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
    >
      <div className="flex justify-between items-center mb-8">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Recent Visitors
          </h2>

          <p className="text-slate-400 mt-2">
            Latest visitor activities
          </p>
        </div>

        <button className="px-5 py-2 rounded-xl bg-cyan-600 text-white hover:bg-cyan-700 transition">
          View All
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700">

              <th className="text-left py-4 text-slate-400">
                Visitor
              </th>

              <th className="text-left text-slate-400">
                Host
              </th>

              <th className="text-left text-slate-400">
                Status
              </th>

              <th className="text-left text-slate-400">
                Time
              </th>

              <th className="text-center text-slate-400">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {visitors.map((item, index) => (

              <tr
                key={item.id}
                className="border-b border-slate-800 hover:bg-slate-800/40 transition"
              >

                <td className="py-5 text-white font-semibold">
                  {item.name}
                </td>

                <td className="text-slate-300">
                  {item.host?.name}
                </td>

                <td>
                  <StatusBadge status={item.status} />
                </td>

                <td>

                  <div className="flex items-center gap-2 text-cyan-400">

                    <Clock3 size={16} />

                    {new Date(item.createdAt).toLocaleTimeString([], {
                   hour: "2-digit",
                   minute: "2-digit",
                    })}

                  </div>

                </td>

                <td className="text-center">

                  <button
                    className="
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-xl
                    bg-cyan-600
                    hover:bg-cyan-700
                    text-white
                    transition
                    "
                  >

                    <Eye size={18} />

                    View

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </motion.div>
  );
}

export default AdminRecentVisitors;