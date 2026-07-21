import { motion } from "framer-motion";
import {
  CheckCircle2,
  Printer,
  Mail,
  XCircle,
} from "lucide-react";

function CheckoutActions({
  onCheckout,
  onPrint,
  onNotify,
  onCancel,
}) {
  const actions = [
    {
      title: "Complete Check-Out",
      description: "Finalize visitor exit",
      icon: CheckCircle2,
      gradient: "from-green-500 to-emerald-600",
      hover: "hover:border-green-500/50",
      action: onCheckout,
    },
    {
      title: "Print Exit Slip",
      description: "Generate exit receipt",
      icon: Printer,
      gradient: "from-cyan-500 to-blue-600",
      hover: "hover:border-cyan-500/50",
      action: onPrint,
    },
    {
      title: "Notify Host",
      description: "Send exit notification",
      icon: Mail,
      gradient: "from-purple-500 to-pink-600",
      hover: "hover:border-purple-500/50",
      action: onNotify,
    },
    {
      title: "Cancel Check-Out",
      description: "Abort current process",
      icon: XCircle,
      gradient: "from-red-500 to-orange-600",
      hover: "hover:border-red-500/50",
      action: onCancel,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-[30px] border border-slate-800 bg-slate-900 p-8 shadow-xl"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Action Panel
        </h2>

        <p className="text-slate-400 mt-2">
          Choose an action to complete the visitor exit process.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5">

        {actions.map((action) => {

          const Icon = action.icon;

          return (
            <motion.button
              key={action.title}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={action.action}
              className={`
                group
                rounded-2xl
                border
                border-slate-800
                bg-slate-800/70
                p-5
                transition-all
                duration-300
                ${action.hover}
              `}
            >
              <div className="flex items-center gap-5">

                <div
                  className={`
                    w-14
                    h-14
                    rounded-2xl
                    bg-gradient-to-r
                    ${action.gradient}
                    flex
                    items-center
                    justify-center
                    shadow-lg
                  `}
                >
                  <Icon
                    size={28}
                    className="text-white"
                  />
                </div>

                <div className="text-left">

                  <h3 className="text-lg font-semibold text-white">
                    {action.title}
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    {action.description}
                  </p>

                </div>

              </div>
            </motion.button>
          );

        })}

      </div>

      <div className="mt-8 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">

        <p className="text-cyan-300 text-sm">
          Complete the security verification before confirming visitor
          check-out. Printing and host notification can be performed after
          successful check-out.
        </p>

      </div>

    </motion.div>
  );
}

export default CheckoutActions;