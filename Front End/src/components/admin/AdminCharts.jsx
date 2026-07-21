import { motion } from "framer-motion";
import {
  Users,
  CalendarDays,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const summary = [
  {
    title: "Today's Visitors",
    value: "48",
    icon: Users,
    color: "text-cyan-400",
  },
  {
    title: "Meetings",
    value: "26",
    icon: CalendarDays,
    color: "text-violet-400",
  },
  {
    title: "Completed",
    value: "39",
    icon: CheckCircle2,
    color: "text-green-400",
  },
];

function AdminSummary() {
  return (
    <div className="space-y-6">

      {/* Summary Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
        rounded-[30px]
        bg-gradient-to-br
        from-cyan-600
        via-blue-700
        to-indigo-700
        p-7
        shadow-2xl
        "
      >

        <h2 className="text-2xl font-bold text-white">

          Today's Summary

        </h2>

        <p className="text-cyan-100 mt-2">

          Overall visitor activity

        </p>

        <div className="space-y-6 mt-8">

          {summary.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="flex justify-between items-center"
              >

                <div className="flex items-center gap-3">

                  <Icon
                    size={22}
                    className="text-white"
                  />

                  <span className="text-cyan-100">

                    {item.title}

                  </span>

                </div>

                <span className="text-2xl font-bold text-white">

                  {item.value}

                </span>

              </div>

            );

          })}

        </div>

      </motion.div>

      {/* Performance */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .2,
        }}
        className="
        rounded-[30px]
        border
        border-slate-800
        bg-slate-900
        p-7
        "
      >

        <div className="flex items-center justify-between">

          <h3 className="text-xl font-bold text-white">

            Performance

          </h3>

          <TrendingUp
            className="text-green-400"
            size={24}
          />

        </div>

        <div className="mt-8">

          <div className="flex justify-between text-sm">

            <span className="text-slate-400">

              Visitor Processing

            </span>

            <span className="text-green-400">

              82%

            </span>

          </div>

          <div className="mt-3 h-3 rounded-full bg-slate-800 overflow-hidden">

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "82%",
              }}
              transition={{
                duration: 2,
              }}
              className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-green-500
              to-emerald-500
              "
            />

          </div>

        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">

          <div className="rounded-2xl bg-slate-800 p-4">

            <p className="text-slate-400 text-sm">

              Approval Rate

            </p>

            <h3 className="text-3xl font-bold text-green-400 mt-2">

              96%

            </h3>

          </div>

          <div className="rounded-2xl bg-slate-800 p-4">

            <p className="text-slate-400 text-sm">

              Avg. Check-In

            </p>

            <h3 className="text-3xl font-bold text-cyan-400 mt-2">

              4 min

            </h3>

          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default AdminSummary;