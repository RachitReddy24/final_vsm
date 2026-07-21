import { motion } from "framer-motion";
import {
  Clock3,
  UserCircle2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const meetings = [
  {
    visitor: "Rahul Sharma",
    host: "Mr. Johnson",
    department: "Finance",
    time: "09:30 AM",
    status: "Approved",
  },
  {
    visitor: "ABC Technologies",
    host: "Ms. Priya",
    department: "HR",
    time: "11:00 AM",
    status: "Pending",
  },
  {
    visitor: "Vendor Meeting",
    host: "IT Team",
    department: "IT",
    time: "02:15 PM",
    status: "Approved",
  },
  {
    visitor: "Anjali Patel",
    host: "Operations",
    department: "Operations",
    time: "04:00 PM",
    status: "Pending",
  },
];

function AdminMeetings() {
  return (
    <div className="rounded-[30px] bg-slate-900 border border-slate-800 p-7 shadow-xl">

      <div className="flex items-center justify-between mb-7">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Today's Meetings
          </h2>

          <p className="text-slate-400 mt-1">
            Scheduled visitor appointments
          </p>

        </div>

        <button
          className="
          px-5
          py-2
          rounded-xl
          bg-cyan-500/10
          border
          border-cyan-500/30
          text-cyan-400
          hover:bg-cyan-500/20
          transition
          "
        >
          View All
        </button>

      </div>

      <div className="space-y-5">

        {meetings.map((meeting, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.12,
            }}
            whileHover={{
              scale: 1.02,
            }}
            className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-800
            p-5
            "
          >

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-4">

                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  flex
                  items-center
                  justify-center
                  "
                >

                  <UserCircle2
                    size={34}
                    className="text-white"
                  />

                </div>

                <div>

                  <h3 className="text-white font-semibold text-lg">

                    {meeting.visitor}

                  </h3>

                  <p className="text-slate-400">

                    Host : {meeting.host}

                  </p>

                  <p className="text-slate-500 text-sm">

                    {meeting.department}

                  </p>

                </div>

              </div>

              <div className="text-right">

                <div className="flex items-center gap-2 justify-end text-cyan-400">

                  <Clock3 size={16} />

                  {meeting.time}

                </div>

                <div className="mt-3">

                  {meeting.status === "Approved" ? (

                    <span
                      className="
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-1
                      rounded-full
                      bg-green-500/20
                      text-green-400
                      text-sm
                      "
                    >

                      <CheckCircle2 size={15} />

                      Approved

                    </span>

                  ) : (

                    <span
                      className="
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-1
                      rounded-full
                      bg-yellow-500/20
                      text-yellow-400
                      text-sm
                      "
                    >

                      <AlertCircle size={15} />

                      Pending

                    </span>

                  )}

                </div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default AdminMeetings;