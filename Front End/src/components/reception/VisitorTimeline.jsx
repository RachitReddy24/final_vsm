import {
  UserPlus,
  BadgeCheck,
  QrCode,
  LogOut,
} from "lucide-react";

const timeline = [
  {
    id: 1,
    title: "Visitor Registered",
    person: "Rahul Sharma",
    time: "09:00 AM",
    color: "bg-blue-500",
    icon: UserPlus,
  },
  {
    id: 2,
    title: "Host Approved",
    person: "John Doe",
    time: "09:15 AM",
    color: "bg-green-500",
    icon: BadgeCheck,
  },
  {
    id: 3,
    title: "Visitor Checked-In",
    person: "Reception Desk",
    time: "09:25 AM",
    color: "bg-cyan-500",
    icon: QrCode,
  },
  {
    id: 4,
    title: "Visitor Checked-Out",
    person: "Rahul Sharma",
    time: "10:00 AM",
    color: "bg-red-500",
    icon: LogOut,
  },
];

function VisitorTimeline() {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl">

      <div className="px-6 py-5 border-b border-slate-800">

        <h2 className="text-2xl font-bold text-white">
          Activity Timeline
        </h2>

        <p className="text-slate-400">
          Today's Visitor Events
        </p>

      </div>

      <div className="p-6 space-y-5">

        {timeline.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.id}
              className="rounded-2xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all p-5"
            >

              <div className="flex justify-between">

                <div className="flex gap-4">

                  <div
                    className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center`}
                  >
                    <Icon
                      size={22}
                      className="text-white"
                    />
                  </div>

                  <div>

                    <h3 className="text-white font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 mt-1">
                      {item.person}
                    </p>

                  </div>

                </div>

                <span className="text-slate-500 text-sm">
                  {item.time}
                </span>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}

export default VisitorTimeline;