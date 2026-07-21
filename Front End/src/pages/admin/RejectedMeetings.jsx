import DashboardLayout from "../../layouts/DashboardLayout";
import {
  XCircle,
  Users,
  CalendarDays,
  AlertTriangle,
} from "lucide-react";

import { useMeeting } from "../../context/MeetingContext";

function RejectedMeetings() {
  const { rejectedMeetings } = useMeeting();

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Rejected Meetings
          </h1>

          <p className="text-slate-400 mt-2">
            Visitor requests rejected by the administrator.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <Card
            title="Rejected Requests"
            value={rejectedMeetings.length}
            icon={XCircle}
            color="from-red-600 to-pink-600"
          />

          <Card
            title="Today's Rejections"
            value={rejectedMeetings.length}
            icon={CalendarDays}
            color="from-orange-500 to-red-500"
          />

          <Card
            title="Visitors"
            value={rejectedMeetings.length}
            icon={Users}
            color="from-purple-600 to-fuchsia-600"
          />

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-700 text-slate-400">

                <th className="text-left p-5">Visitor</th>

                <th className="text-left">Company</th>

                <th className="text-left">Host</th>

                <th className="text-left">Reason</th>

                <th className="text-left">Status</th>

              </tr>

            </thead>

            <tbody>

              {rejectedMeetings.map((meeting) => (

                <tr
                  key={meeting.id}
                  className="border-b border-slate-800"
                >

                  <td className="p-5 text-white">
                    {meeting.visitor}
                  </td>

                  <td>{meeting.company}</td>

                  <td>{meeting.host}</td>

                  <td>{meeting.reason}</td>

                  <td>

                    <span className="px-4 py-2 rounded-full bg-red-500/20 text-red-400">
                      Rejected
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {rejectedMeetings.length === 0 && (

            <div className="py-16 flex flex-col items-center">

              <AlertTriangle
                size={60}
                className="text-slate-600"
              />

              <h2 className="text-2xl text-white mt-4">
                No Rejected Meetings
              </h2>

              <p className="text-slate-500 mt-2">
                Rejected visitor requests will appear here.
              </p>

            </div>

          )}

        </div>

      </div>

    </DashboardLayout>
  );
}

function Card({
  title,
  value,
  icon: Icon,
  color,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-400">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            {value}
          </h2>

        </div>

        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center`}
        >

          <Icon
            size={30}
            className="text-white"
          />

        </div>

      </div>

    </div>
  );
}

export default RejectedMeetings;