import { motion } from "framer-motion";
import {
  Bell,
  Search,
  LayoutDashboard,
  Users,
  CalendarDays,
  ShieldCheck,
  BarChart3,
  QrCode,
  UserCheck,
} from "lucide-react";

const stats = [
  {
    title: "Today's Visitors",
    value: "124",
    icon: <Users size={22} />,
    color: "text-cyan-400",
  },
  {
    title: "Approved",
    value: "98",
    icon: <UserCheck size={22} />,
    color: "text-green-400",
  },
  {
    title: "Meetings",
    value: "26",
    icon: <CalendarDays size={22} />,
    color: "text-violet-400",
  },
  {
    title: "Security",
    value: "100%",
    icon: <ShieldCheck size={22} />,
    color: "text-blue-400",
  },
];

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .8 }}
      className="relative"
    >
      <div className="overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/70 backdrop-blur-2xl shadow-2xl">

        <div className="flex">

          {/* Sidebar */}

          <aside className="w-20 border-r border-slate-800 bg-slate-950/60 p-5">

            <div className="flex flex-col items-center gap-8">

              <LayoutDashboard className="text-cyan-400" />

              <Users className="text-slate-400" />

              <CalendarDays className="text-slate-400" />

              <QrCode className="text-slate-400" />

              <BarChart3 className="text-slate-400" />

            </div>

          </aside>

          {/* Main */}

          <div className="flex-1 p-7">

            {/* Header */}

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-3xl font-bold">
                  Dashboard
                </h2>

                <p className="text-slate-400">
                  Enterprise Visitor Management
                </p>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex items-center rounded-xl bg-slate-800 px-4 py-2">

                  <Search
                    size={18}
                    className="text-slate-400"
                  />

                  <input
                    placeholder="Search"
                    className="ml-3 bg-transparent outline-none placeholder:text-slate-500"
                  />

                </div>

                <Bell className="text-cyan-400" />

              </div>

            </div>

            {/* Stats */}

            <div className="mt-8 grid grid-cols-2 gap-5">

              {stats.map((item) => (

                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-800/60 p-5"
                >

                  <div className={`${item.color} mb-4`}>
                    {item.icon}
                  </div>

                  <p className="text-sm text-slate-400">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    {item.value}
                  </h2>

                </motion.div>

              ))}

            </div>

            {/* Bottom */}

            <div className="mt-7 grid grid-cols-2 gap-5">

              {/* Visitors */}

              <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-5">

                <h3 className="mb-5 font-semibold">
                  Recent Visitors
                </h3>

                {[
                  "John Smith",
                  "Priya Sharma",
                  "Rahul Kumar",
                  "Emily Watson",
                ].map((name) => (

                  <div
                    key={name}
                    className="mb-4 flex items-center justify-between"
                  >

                    <div>

                      <h4 className="font-medium">
                        {name}
                      </h4>

                      <p className="text-xs text-slate-400">
                        Checked In
                      </p>

                    </div>

                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
                      Active
                    </span>

                  </div>

                ))}

              </div>

              {/* Analytics */}

              <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-5">

                <div className="mb-6 flex justify-between">

                  <h3 className="font-semibold">
                    Weekly Analytics
                  </h3>

                  <BarChart3 className="text-cyan-400" />

                </div>

                <div className="flex h-40 items-end justify-between">

                  {[45,75,60,100,80,120,95].map((height, i) => (

                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height }}
                      transition={{
                        delay: i * .08,
                      }}
                      className="w-8 rounded-full bg-gradient-to-t from-cyan-500 to-blue-600"
                    />

                  ))}

                </div>

                <div className="mt-6 rounded-xl bg-slate-900 p-4">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-sm text-slate-400">
                        QR Verification
                      </p>

                      <h2 className="text-2xl font-bold text-cyan-400">
                        98%
                      </h2>

                    </div>

                    <QrCode
                      size={42}
                      className="text-cyan-400"
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default DashboardPreview;