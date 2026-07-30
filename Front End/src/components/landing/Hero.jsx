import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
function Hero() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  return (
    <section
  id="home"
  className={`relative flex min-h-screen items-center py-20 transition-all duration-300 ${
    theme === "dark"
      ? "bg-slate-950 text-white"
      : "bg-white text-slate-900"
  }`}
>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className={`rounded-full px-5 py-2 text-sm font-medium border ${
  theme === "dark"
    ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
    : "border-cyan-300 bg-cyan-50 text-cyan-700"
}`}>
            Enterprise Visitor Management
          </span>

          <h1
  className={`mt-8 text-6xl font-black leading-tight lg:text-7xl ${
    theme === "dark"
      ? "text-white"
      : "text-slate-900"
  }`}
>

            Smart

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              {" "}Visitor
            </span>

            <br />

            Management

            <br />

            System

          </h1>

          <p className={`mt-8 max-w-xl text-lg leading-8 ${
  theme === "dark"
    ? "text-slate-400"
    : "text-slate-600"
}`}>

            Digitize visitor registration, employee approvals,
            QR Check-In, OTP verification and analytics using
            one modern enterprise platform.

          </p>
        </motion.div>

        {/* RIGHT */}

      </div>
    </section>
  );
}

export default Hero;