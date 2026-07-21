import { ShieldCheck, Lock, Copyright } from "lucide-react";
import { motion } from "framer-motion";

function LoginFooter() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="
      mt-10
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      "
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

        {/* Left */}

        <div>

          <h2 className="text-white font-bold text-lg">
            Visitor Management System
          </h2>

          <p className="text-slate-400 mt-2">
            Secure Visitor Registration & Access Management
          </p>

        </div>

        {/* Center */}

        <div className="flex gap-6">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
            flex
            items-center
            gap-2
            text-green-400
            "
          >

            <ShieldCheck size={18} />

            Secure

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
            flex
            items-center
            gap-2
            text-cyan-400
            "
          >

            <Lock size={18} />

            Privacy Protected

          </motion.div>

        </div>

      </div>

      <div className="mt-6 border-t border-white/10 pt-5 flex flex-col lg:flex-row justify-between items-center gap-4">

        <div className="flex items-center gap-2 text-slate-500 text-sm">

          <Copyright size={15} />

          © 2026 Visitor Management System

        </div>

        <div className="flex gap-6 text-sm">

          <button className="text-slate-400 hover:text-cyan-400 transition">
            Privacy Policy
          </button>

          <button className="text-slate-400 hover:text-cyan-400 transition">
            Terms & Conditions
          </button>

          <button className="text-slate-400 hover:text-cyan-400 transition">
            Help
          </button>

        </div>

      </div>

    </motion.div>
  );
}

export default LoginFooter;