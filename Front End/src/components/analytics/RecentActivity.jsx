import {
  UserPlus,
  BadgeCheck,
  QrCode,
  LogOut,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Visitor Registered",
    description: "Rahul Sharma completed registration.",
    time: "2 mins ago",
    icon: UserPlus,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Host Approved",
    description: "John Doe approved the meeting.",
    time: "10 mins ago",
    icon: BadgeCheck,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Visitor Checked-In",
    description: "QR verification completed.",
    time: "25 mins ago",
    icon: QrCode,
    color: "bg-orange-500",
  },
  {
    id: 4,
    title: "Visitor Checked-Out",
    description: "Meeting completed successfully.",
    time: "1 hour ago",
    icon: LogOut,
    color: "bg-red-500",
  },
];

function RecentActivity() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="px-6 py-5 border-b border-slate-800">

        <h2 className="text-2xl font-bold text-white">
          Recent Activity
        </h2>

        <p className="text-slate-400 mt-1">
          Latest visitor events
        </p>

      </div>

      {/* Timeline */}

      <div className="p-6">

        {activities.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={item.id}
              className="relative flex gap-5 pb-8 last:pb-0"
            >

              {/* Vertical Line */}

              {index !== activities.length - 1 && (
                <div className="absolute left-6 top-12 w-[2px] h-full bg-slate-700"></div>
              )}

              {/* Icon */}

              <div
                className={`
                  w-12
                  h-12
                  rounded-2xl
                  ${item.color}
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  shrink-0
                `}
              >
                <Icon
                  size={22}
                  className="text-white"
                />
              </div>

              {/* Content */}

              <div className="flex-1">

                <div className="flex justify-between items-center">

                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <span className="text-xs text-slate-500">
                    {item.time}
                  </span>

                </div>

                <p className="text-slate-400 mt-2 text-sm">
                  {item.description}
                </p>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}

export default RecentActivity;