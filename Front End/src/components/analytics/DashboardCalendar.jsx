import {
  CalendarDays,
  Clock3,
  User,
  Building2,
  CheckCircle2,
} from "lucide-react";

const meetings = [
  {
    id: 1,
    visitor: "Rahul Sharma",
    host: "John Doe",
    department: "IT Department",
    time: "10:30 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    visitor: "Priya Singh",
    host: "David Wilson",
    department: "HR Department",
    time: "11:45 AM",
    status: "Pending",
  },
  {
    id: 3,
    visitor: "Arjun Patel",
    host: "Alex Brown",
    department: "Finance",
    time: "02:15 PM",
    status: "Confirmed",
  },
  {
    id: 4,
    visitor: "Sneha Rao",
    host: "Peter Smith",
    department: "Admin",
    time: "04:00 PM",
    status: "Completed",
  },
];

function DashboardCalendar() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Today's Schedule
          </h2>

          <p className="text-slate-400 mt-1">
            Upcoming visitor meetings
          </p>

        </div>

        <CalendarDays
          size={32}
          className="text-blue-400"
        />

      </div>

      {/* Schedule */}

      <div className="p-6 space-y-5">

        {meetings.map((meeting) => (

          <div
            key={meeting.id}
            className="rounded-2xl border border-slate-700 bg-slate-800 hover:border-blue-500 transition-all duration-300 p-5"
          >

            <div className="flex justify-between items-center">

              <div>

                <h3 className="text-lg font-semibold text-white">
                  {meeting.visitor}
                </h3>

                <div className="flex items-center gap-2 mt-2 text-slate-400 text-sm">

                  <User size={15} />

                  {meeting.host}

                </div>

                <div className="flex items-center gap-2 mt-2 text-slate-400 text-sm">

                  <Building2 size={15} />

                  {meeting.department}

                </div>

              </div>

              <div className="text-right">

                <div className="flex items-center gap-2 justify-end text-blue-400 font-semibold">

                  <Clock3 size={16} />

                  {meeting.time}

                </div>

                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1 text-green-400 text-xs">

                  <CheckCircle2 size={14} />

                  {meeting.status}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default DashboardCalendar;