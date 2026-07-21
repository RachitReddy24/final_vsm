import {
  CheckCircle2,
  Clock3,
  UserCheck,
  UserPlus,
  ShieldCheck,
} from "lucide-react";

import { activities } from "../../data/reportData";

function ActivityTimeline() {
  const getIcon = (id) => {
    switch (id % 5) {
      case 0:
        return <UserPlus size={18} className="text-cyan-400" />;
      case 1:
        return <UserCheck size={18} className="text-green-400" />;
      case 2:
        return <ShieldCheck size={18} className="text-purple-400" />;
      case 3:
        return <Clock3 size={18} className="text-yellow-400" />;
      default:
        return <CheckCircle2 size={18} className="text-emerald-400" />;
    }
  };

  const getColor = (id) => {
    switch (id % 5) {
      case 0:
        return "from-cyan-500 to-blue-600";
      case 1:
        return "from-green-500 to-emerald-600";
      case 2:
        return "from-purple-500 to-violet-600";
      case 3:
        return "from-yellow-500 to-orange-500";
      default:
        return "from-pink-500 to-rose-600";
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center px-6 py-5 border-b border-slate-800">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Recent Activity
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Latest visitor activities in the system
          </p>

        </div>

        <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold">
          Live Updates
        </span>

      </div>

      {/* Timeline */}

      <div className="p-6 space-y-6">

        {activities.map((item) => (

          <div
            key={item.id}
            className="group flex gap-5"
          >

            {/* Icon */}

            <div className="relative">

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${getColor(
                  item.id
                )} flex items-center justify-center shadow-lg`}
              >
                {getIcon(item.id)}
              </div>

              {item.id !== activities.length && (
                <div className="absolute left-1/2 top-14 w-[2px] h-10 -translate-x-1/2 bg-slate-700"></div>
              )}

            </div>

            {/* Content */}

            <div className="flex-1 bg-slate-800 border border-slate-700 rounded-2xl p-5 group-hover:border-cyan-500 transition-all">

              <div className="flex justify-between items-start">

                <div>

                  <h3 className="text-white font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    Visitor Management System Activity
                  </p>

                </div>

                <span className="px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-xs">
                  {item.time}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ActivityTimeline;