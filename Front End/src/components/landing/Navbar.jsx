import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
      "
    >
      <div className="max-w-7xl mx-auto px-6 pt-5">

       <div
  className={`rounded-2xl border backdrop-blur-2xl shadow-xl transition-all duration-300 ${
    theme === "dark"
      ? "border-slate-800/60 bg-slate-950/60"
      : "border-gray-300 bg-white/80"
  }`}
>
          <div className="flex items-center justify-between px-8 py-4">

            <Logo />

            <nav className="hidden lg:flex gap-10">

              <a
                href="#home"
                className={`transition hover:text-cyan-500 ${
  theme === "dark"
    ? "text-slate-300"
    : "text-slate-700"
}`}
              >
                Home
              </a>

              <a
                href="#features"
                className={`transition hover:text-cyan-500 ${
  theme === "dark"
    ? "text-slate-300"
    : "text-slate-700"
}`}
              >
                Features
              </a>

              <a
                href="#about"
                className={`transition hover:text-cyan-500 ${
  theme === "dark"
    ? "text-slate-300"
    : "text-slate-700"
}`}
              >
                About
              </a>

            </nav>

            <div className="flex items-center gap-4">

              <ThemeToggle />

              <button
                onClick={() => navigate("/login")}
                className={`rounded-xl px-7 py-3 font-semibold transition hover:scale-105 ${
  theme === "dark"
    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
    : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
}`}
              >
                Login
              </button>

            </div>

          </div>
        </div>

      </div>
    </motion.header>
  );
}

export default Navbar;