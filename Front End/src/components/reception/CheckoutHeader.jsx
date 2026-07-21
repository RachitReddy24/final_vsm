import { motion } from "framer-motion";
import {
  LogOut,
  ShieldCheck,
} from "lucide-react";

function CheckoutHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
      rounded-[32px]
      border
      border-slate-800
      bg-slate-900
      p-8
      shadow-xl
      "
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* Left */}

        <div>

          <div className="flex items-center gap-3">

            <div
              className="
              w-16
              h-16
              rounded-2xl
              bg-gradient-to-r
              from-red-500
              to-orange-500
              flex
              items-center
              justify-center
              "
            >
              <LogOut
                size={34}
                className="text-white"
              />
            </div>

            <div>

              <h1 className="text-4xl font-bold text-white">
                Visitor Check-Out
              </h1>

              <p className="text-slate-400 mt-2">
                Complete visitor exit after meeting completion.
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <div
            className="
            px-6
            py-3
            rounded-2xl
            bg-green-500/15
            border
            border-green-500/30
            flex
            items-center
            gap-3
            "
          >
            <ShieldCheck
              size={22}
              className="text-green-400"
            />

            <span className="text-green-400 font-semibold">
              Ready For Exit
            </span>

          </div>

          <button
            className="
            px-7
            py-3
            rounded-2xl
            bg-gradient-to-r
            from-red-600
            to-orange-500
            text-white
            font-semibold
            hover:scale-105
            transition-all
            shadow-xl
            "
          >
            Exit Management
          </button>

        </div>

      </div>

    </motion.div>
  );
}

export default CheckoutHeader;