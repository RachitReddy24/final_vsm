import {
  NavLink,
  useNavigate,
} from "react-router-dom";
import {
  LogOut,
  UserCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useSidebar } from "../../hooks/useSidebar";
import useAuth from "../../hooks/useAuth";
function Sidebar({
  menu = [],
  userName,
  userRole,
}) {
  const { collapsed, toggleSidebar } = useSidebar();
  const navigate = useNavigate();

  const { logout, user } = useAuth();

  const displayName =
    userName || user?.name || "Administrator";

  const displayRole =
    userRole || user?.role || "Administrator";

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <motion.aside
      animate={{
        width: collapsed ? 90 : 300,
      }}
      transition={{
        duration: 0.3,
      }}
      className="h-screen sticky top-0 flex flex-col bg-slate-950 border-r border-slate-800 shadow-2xl"
    >
      {/* Logo */}

      <div className="relative px-6 py-7 border-b border-slate-800">

        <button
          onClick={toggleSidebar}
          className="absolute top-6 right-4 bg-slate-800 hover:bg-blue-600 transition rounded-xl p-2 text-white"
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>

        {!collapsed ? (
          <>
            <h1 className="text-3xl font-extrabold text-white">
              Visitor
              <span className="text-blue-500">MS</span>
            </h1>

            <p className="text-slate-400 text-sm mt-1">
              Enterprise Edition
            </p>
          </>
        ) : (
          <div className="flex justify-center">
            <div
              className="
              w-12
              h-12
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              flex
              items-center
              justify-center
              text-white
              font-bold
              text-2xl
              shadow-lg
              "
            >
              V
            </div>
          </div>
        )}
      </div>      {/* User */}

      {!collapsed && (

        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          className="
          mx-4
          mt-6
          rounded-3xl
          bg-slate-900
          border
          border-slate-800
          p-4
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              flex
              items-center
              justify-center
              shadow-lg
              "
            >

              <UserCircle2
                size={34}
                className="text-white"
              />

            </div>

            <div>

              <h3 className="font-semibold text-white">
                {displayName}
              </h3>

              <p className="text-xs text-slate-400">
                {displayRole}
              </p>

            </div>

          </div>

        </motion.div>

      )}

      {/* Navigation */}

      <nav className="flex-1 mt-8 px-3 overflow-y-auto">

        {menu.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.title}
              to={item.path}
            >

              {({ isActive }) => (

                <motion.div
                  whileHover={{
                    x: 6,
                  }}
                  className={`group flex items-center ${
                    collapsed
                      ? "justify-center"
                      : "gap-4"
                  } rounded-2xl px-4 py-4 mb-3 transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl"
                      : "hover:bg-slate-900"
                  }`}
                >

                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition ${
                      isActive
                        ? "bg-white/20"
                        : "bg-slate-800 group-hover:bg-slate-700"
                    }`}
                  >

                    <Icon
                      size={22}
                      className={
                        isActive
                          ? "text-white"
                          : "text-slate-300"
                      }
                    />

                  </div>

                  {!collapsed && (

                    <span
                      className={`font-medium ${
                        isActive
                          ? "text-white"
                          : "text-slate-300"
                      }`}
                    >
                      {item.title}
                    </span>

                  )}

                </motion.div>

              )}

            </NavLink>

          );

        })}

      </nav>      {/* Footer */}

      <div className="border-t border-slate-800 p-5">

        <button
          onClick={handleLogout}
          className={`w-full flex items-center ${
            collapsed
              ? "justify-center"
              : "gap-3"
          } rounded-2xl bg-red-500/10 hover:bg-red-600 transition py-3 text-red-400 hover:text-white`}
        >

          <LogOut size={20} />

          {!collapsed && (
            <span className="font-medium">
              Logout
            </span>
          )}

        </button>

        {!collapsed && (

          <div className="mt-5 text-center">

            <p className="text-slate-500 text-xs">
              Visitor Management System
            </p>

            <p className="text-slate-600 text-xs mt-1">
              Version 1.0
            </p>

          </div>

        )}

      </div>

    </motion.aside>
  );
}

export default Sidebar;