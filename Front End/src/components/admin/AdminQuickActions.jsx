import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  UserPlus,
  Building2,
  CalendarPlus,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Add User",
    description: "Create employee and administrator accounts.",
    icon: UserPlus,
    color: "from-cyan-500 to-blue-600",
    path: "/admin/users",
  },
  {
    title: "Add Department",
    description: "Manage company departments.",
    icon: Building2,
    color: "from-violet-500 to-indigo-600",
    path: "/admin/departments",
  },
  {
    title: "Schedule Meeting",
    description: "Schedule a new visitor meeting.",
    icon: CalendarPlus,
    color: "from-green-500 to-emerald-600",
    path: "/admin/schedule-meeting",
  },
  {
    title: "View Reports",
    description: "View visitor analytics and reports.",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
    path: "/admin/reports",
  },
];

function AdminQuickActions() {
  return (
    <div className="space-y-6">

      <div>

        <h2 className="text-3xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="text-slate-400 mt-2">
          Frequently used administrator operations
        </p>

      </div>

      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">

        {actions.map((action, index) => {

          const Icon = action.icon;

          return (

            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >

              <Link
                to={action.path}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-slate-900
                p-7
                block
                shadow-xl
                hover:border-cyan-500/40
                transition-all
                "
              >

                <div
                  className={`
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-10
                  transition
                  bg-gradient-to-r
                  ${action.color}
                  `}
                />

                <div className="relative">

                  <div
                    className={`
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-r
                    ${action.color}
                    flex
                    items-center
                    justify-center
                    shadow-xl
                    `}
                  >

                    <Icon
                      size={30}
                      className="text-white"
                    />

                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {action.title}
                  </h3>

                  <p className="mt-3 text-slate-400 leading-7">
                    {action.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-cyan-400 font-semibold">
                      Open Module
                    </span>

                    <ArrowRight
                      size={20}
                      className="
                      text-cyan-400
                      group-hover:translate-x-2
                      transition
                      "
                    />

                  </div>

                </div>

              </Link>

            </motion.div>

          );

        })}

      </div>

    </div>
  );
}

export default AdminQuickActions;