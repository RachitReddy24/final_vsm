import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import api from "../../services/api";
import {
  Search,
  Bell,
  UserCircle2,
  ChevronDown,
  LogOut,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";
function Header({
  userName,
  userRole,
}) {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
 const { theme, toggleTheme } = useTheme();
  const displayName = userName || user?.name || "Administrator";
  const displayRole = userRole || user?.role || "Administrator";

  const [time, setTime] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const [notifications, setNotifications] = useState([]);
const fetchNotifications = async () => {
  try {
    const res = await api.get("/notifications/all");
    setNotifications(res.data.data.notifications);
  } catch (error) {
    console.error("Failed to fetch notifications:", error);
  }
};
useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  fetchNotifications();
}, []);
  return (
    <header
  className={`sticky top-0 z-50 h-24 border-b backdrop-blur-xl transition-all duration-300 ${
    theme === "dark"
      ? "bg-slate-900/95 border-slate-800"
      : "bg-white border-gray-200 shadow-sm"
  }`}
>
      <div className="h-full px-8 flex items-center justify-between">

        {/* Search */}

        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            placeholder="Search visitors, employee, company..."
            className={`w-[420px] rounded-2xl pl-12 pr-5 py-3 outline-none focus:ring-2 focus:ring-cyan-500 transition ${
  theme === "dark"
    ? "bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500"
    : "bg-gray-100 border border-gray-300 text-slate-900 placeholder:text-gray-500"
}`}
          />
        </div>

        <div className="flex items-center gap-8">

          {/* System Status */}

          <div className="hidden lg:flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

            <span className="text-green-400 font-medium">
              System Online
            </span>
          </div>

          {/* Time */}

          <div className="text-right">
            <h2 className={`text-xl font-bold ${
  theme === "dark" ? "text-white" : "text-slate-900"
}`}>
              {time}
            </h2>

            <p className={`text-sm ${
  theme === "dark" ? "text-slate-400" : "text-gray-600"
}`}>
              {new Date().toDateString()}
            </p>
          </div>
 {/* Theme Toggle */}

<button
  onClick={toggleTheme}
  className={`w-12 h-12 rounded-2xl transition flex items-center justify-center ${
    theme === "dark"
      ? "bg-slate-800 hover:bg-slate-700"
      : "bg-gray-200 hover:bg-gray-300"
  }`}
>
  {theme === "dark" ? (
    <Sun size={22} className="text-yellow-400" />
  ) : (
    <Moon size={22} className="text-slate-700" />
  )}
</button>
          {/* Notifications */}

          <div className="relative">

                <button
                  onClick={() => {
                  fetchNotifications();
                 setShowNotification(!showNotification);
                }}
               className="relative w-12 h-12 rounded-2xl bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
              <Bell size={22} className="text-white" />

              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-500 text-xs flex items-center justify-center font-bold">
                {notifications.length}
              </span>
            </button>

            {showNotification && (
              <div className="absolute right-0 mt-4 w-96 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

                <div className="px-6 py-4 border-b border-slate-800">
                  <h3 className={`text-xl font-bold ${
  theme === "dark" ? "text-white" : "text-slate-900"
}`}>
                    Notifications
                  </h3>
                </div>

                <div className="max-h-96 overflow-y-auto">

                  {notifications.map((item) => {

                    const Icon = Bell;

                    return (
                      <div
                        key={item.id}
                        className="flex gap-4 p-5 hover:bg-slate-800 transition"
                      >

                        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                          <Icon
                            size={20}
                            className="text-cyan-400"
                          />
                        </div>

                        <div>
                          <h4 className="text-white font-semibold">
                            {item.title}
                          </h4>

                          <p className="text-slate-400 text-sm mt-1">
                            {new Date(item.createdAt).toLocaleString()}
                          </p>
                        </div>

                      </div>
                    );

                  })}

                </div>

              </div>
            )}

          </div>

          {/* User */}

          <div className="relative">

            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-4"
            >

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                <UserCircle2
                  size={34}
                  className="text-white"
                />
              </div>

              <div className="hidden md:block text-left">

                <h3 className="font-semibold text-white">
                  {displayName}
                </h3>

                <p className={`text-sm ${
  theme === "dark" ? "text-slate-400" : "text-gray-600"
}`}>
                  {displayRole}
                </p>

              </div>

              <ChevronDown className="text-slate-400" />

            </button>

            {showProfile && (

              <div className="absolute right-0 mt-4 w-64 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-4 px-6 py-5 text-red-400 hover:bg-red-500/10 transition"
                >

                  <LogOut size={20} />

                  Logout

                </button>

              </div>

            )}

          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;