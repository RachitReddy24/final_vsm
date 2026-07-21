import { ShieldCheck, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  {
    id: "admin",
    title: "Administrator",
    subtitle: "Manage the complete Visitor Management System",
    icon: ShieldCheck,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "reception",
    title: "Reception Desk",
    subtitle: "Register and manage visitor operations",
    icon: Building2,
    gradient: "from-emerald-500 to-green-600",
  },
];

function RoleSelector({ selectedRole, setSelectedRole }) {
  return (
    <div className="space-y-4">

      <h3 className="text-white font-semibold text-lg">
        Select Portal
      </h3>

      <div className="grid gap-4">

        {roles.map((role) => {
          const Icon = role.icon;

          const active = selectedRole === role.id;

          return (
            <motion.div
              key={role.id}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() =>
                setSelectedRole(role.id)
              }
              className={`
                cursor-pointer
                rounded-3xl
                border
                p-5
                transition-all
                duration-300
                backdrop-blur-xl
                ${
                  active
                    ? "border-cyan-500 bg-slate-800 shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                    : "border-slate-700 bg-slate-900 hover:border-cyan-500/50"
                }
              `}
            >

              <div className="flex items-center gap-5">

                <div
                  className={`
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-r
                    ${role.gradient}
                    flex
                    items-center
                    justify-center
                    shadow-lg
                  `}
                >

                  <Icon
                    size={30}
                    className="text-white"
                  />

                </div>

                <div className="flex-1">

                  <h4 className="text-white font-bold text-lg">
                    {role.title}
                  </h4>

                  <p className="text-slate-400 text-sm mt-1">
                    {role.subtitle}
                  </p>

                </div>

                {active && (

                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    className="
                      w-5
                      h-5
                      rounded-full
                      bg-cyan-400
                    "
                  />

                )}

              </div>

            </motion.div>
          );
        })}

      </div>

    </div>
  );
}

export default RoleSelector;