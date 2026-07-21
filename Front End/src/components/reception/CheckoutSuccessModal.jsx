import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  Printer,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";

function CheckoutSuccessModal({
  isOpen,
  onClose,
}) {
  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
          bg-black/70
          backdrop-blur-sm
          p-5
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
            w-full
            max-w-xl
            rounded-[32px]
            border
            border-slate-800
            bg-slate-900
            p-10
            shadow-2xl
            text-center
            "
          >

            {/* Success Icon */}

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 200,
              }}
              className="
              mx-auto
              w-28
              h-28
              rounded-full
              bg-green-500/20
              flex
              items-center
              justify-center
              "
            >

              <CheckCircle2
                size={70}
                className="text-green-400"
              />

            </motion.div>

            <h2 className="mt-8 text-4xl font-bold text-white">
              Check-Out Successful
            </h2>

            <p className="mt-3 text-slate-400">
              Visitor has successfully exited the premises.
            </p>

            {/* Summary */}

            <div
              className="
              mt-10
              rounded-3xl
              border
              border-slate-800
              bg-slate-800/60
              p-6
              space-y-5
              "
            >

              <SummaryRow
                label="Visitor"
                value="Rahul Sharma"
              />

              <SummaryRow
                label="Host"
                value="John Doe"
              />

              <SummaryRow
                label="Department"
                value="IT Department"
              />

              <SummaryRow
                label="Exit Time"
                value="04:45 PM"
                icon={<Clock3 size={18} />}
              />

              <SummaryRow
                label="Duration"
                value="6 Hours 15 Minutes"
              />

            </div>

            {/* Buttons */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              <button
                className="
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                py-4
                font-semibold
                text-white
                flex
                items-center
                justify-center
                gap-3
                hover:scale-105
                transition
                "
              >

                <Printer size={20} />

                Print Slip

              </button>

              <Link
                to="/reception/dashboard"
                onClick={onClose}
                className="
                rounded-2xl
                bg-gradient-to-r
                from-green-500
                to-emerald-600
                py-4
                font-semibold
                text-white
                flex
                items-center
                justify-center
                gap-3
                hover:scale-105
                transition
                "
              >

                <Home size={20} />

                Dashboard

              </Link>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

function SummaryRow({
  label,
  value,
  icon,
}) {
  return (
    <div className="flex justify-between items-center">

      <div className="flex items-center gap-2 text-slate-400">

        {icon}

        <span>{label}</span>

      </div>

      <span className="font-semibold text-white">
        {value}
      </span>

    </div>
  );
}

export default CheckoutSuccessModal;