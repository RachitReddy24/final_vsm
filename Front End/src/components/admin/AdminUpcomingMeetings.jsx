import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import api from "../../services/api";
import {
  CalendarDays,
  Clock3,
  User,
  Eye,
} from "lucide-react";

;

function AdminUpcomingMeetings() {
  const [meetings, setMeetings] = useState([]);

useEffect(() => {
  fetchTodayMeetings();
}, []);

const fetchTodayMeetings = async () => {
  try {
    const res = await api.get("/dashboard/today-meetings");
    setMeetings(res.data.data || []);
  } catch (error) {
    console.error("Today's Meetings Error:", error);
  }
};
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      rounded-3xl
      border
      border-slate-800
      bg-slate-900
      p-8
      shadow-xl
      "
    >

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Upcoming Meetings
          </h2>

          <p className="text-slate-400 mt-2">
            Scheduled meetings for upcoming visitors
          </p>

        </div>

        <button
          className="
          px-5
          py-2
          rounded-xl
          bg-cyan-600
          hover:bg-cyan-700
          text-white
          transition
          "
        >
          View All
        </button>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700">

              <th className="text-left py-4 text-slate-400">
                Meeting
              </th>

              <th className="text-left text-slate-400">
                Host
              </th>

              <th className="text-left text-slate-400">
                Date
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

            {meetings.map((item, index) => (

              <tr
                key={item.id}
                className="
                border-b
                border-slate-800
                hover:bg-slate-800/40
                transition
                "
              >

                <td className="py-5">

                  <div className="flex items-center gap-3">

                    <CalendarDays
                      size={20}
                      className="text-cyan-400"
                    />

                    <span className="text-white font-semibold">
                      {item.purpose}
                    </span>

                  </div>

                </td>

                <td>

                  <div className="flex items-center gap-2 text-slate-300">

                    <User size={16} />

                    {item.host?.name}

                  </div>

                </td>

                <td className="text-slate-300">
                  {new Date(item.meetingDate).toLocaleDateString()}
                </td>

                <td>

                  <div className="flex items-center gap-2 text-cyan-400">

                    <Clock3 size={16} />

                    {new Date(item.meetingDate).toLocaleTimeString([], {
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

export default AdminUpcomingMeetings;