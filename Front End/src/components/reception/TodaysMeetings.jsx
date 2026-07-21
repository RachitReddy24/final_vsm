import { motion } from "framer-motion";
import {
  Clock3,
  User,
  Eye,
} from "lucide-react";

const meetings = [
  {
    visitor: "Rahul Sharma",
    host: "John Doe",
    time: "10:30 AM",
  },
  {
    visitor: "Anjali Verma",
    host: "David",
    time: "11:00 AM",
  },
  {
    visitor: "Ramesh Kumar",
    host: "Michael",
    time: "01:30 PM",
  },
  {
    visitor: "Priya Singh",
    host: "Sarah",
    time: "03:00 PM",
  },
];

function TodaysMeetings() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
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
            Today's Meetings
          </h2>

          <p className="text-slate-400 mt-2">
            Scheduled meetings for today
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
                Visitor
              </th>

              <th className="text-left text-slate-400">
                Host
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
                key={index}
                className="border-b border-slate-800 hover:bg-slate-800/40 transition"
              >

                <td className="py-5">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center">

                      <User
                        size={18}
                        className="text-white"
                      />

                    </div>

                    <span className="text-white font-semibold">
                      {item.visitor}
                    </span>

                  </div>

                </td>

                <td className="text-slate-300">
                  {item.host}
                </td>

                <td>

                  <div className="flex items-center gap-2 text-cyan-400">

                    <Clock3 size={16} />

                    {item.time}

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

export default TodaysMeetings;