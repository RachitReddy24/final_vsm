import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const navigate = useNavigate();

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
          className="
            rounded-2xl
            border
            border-slate-800/60
            bg-slate-950/60
            backdrop-blur-2xl
            shadow-xl
          "
        >
          <div className="flex items-center justify-between px-8 py-4">

            <Logo />

            <nav className="hidden lg:flex gap-10">

              <a
                href="#home"
                className="text-slate-300 hover:text-cyan-400 transition"
              >
                Home
              </a>

              <a
                href="#features"
                className="text-slate-300 hover:text-cyan-400 transition"
              >
                Features
              </a>

              <a
                href="#about"
                className="text-slate-300 hover:text-cyan-400 transition"
              >
                About
              </a>

            </nav>

            <div className="flex items-center gap-4">

              <ThemeToggle />

              <button
                onClick={() => navigate("/login")}
                className="
                  rounded-xl
                  px-7
                  py-3
                  font-semibold
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  hover:scale-105
                  transition
                  shadow-lg
                  shadow-cyan-500/30
                "
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