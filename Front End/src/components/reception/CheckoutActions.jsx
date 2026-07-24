import { motion } from "framer-motion";
import {
  CheckCircle2,
  Printer,
  Mail,
  XCircle,
  Loader2,
} from "lucide-react";

function CheckoutActions({
  visitor = null,
  items = {},
  security = {},
  loading = false,
  checkoutCompleted = false,
  onCheckout,
  onPrint,
  onNotify,
  onCancel,
}) {
  const itemsVerified = Object.values(items ?? {}).every(Boolean);
  const securityVerified = Object.values(security ?? {}).every(Boolean);

  const canCheckout =
    visitor &&
    itemsVerified &&
    securityVerified &&
    !checkoutCompleted;

  const actions = [
    {
      title: "Complete Check-Out",
      description: checkoutCompleted
        ? "Visitor already checked out"
        : "Finalize visitor exit",
      icon: loading ? Loader2 : CheckCircle2,
      gradient: "from-green-500 to-emerald-600",
      hover: "hover:border-green-500/50",
      action: onCheckout,
      disabled: !canCheckout || loading,
      spin: loading,
    },
    {
      title: "Print Exit Slip",
      description: "Generate exit receipt",
      icon: Printer,
      gradient: "from-cyan-500 to-blue-600",
      hover: "hover:border-cyan-500/50",
      action: onPrint,
      disabled: !checkoutCompleted,
    },
    {
      title: "Notify Host",
      description: "Send exit notification",
      icon: Mail,
      gradient: "from-purple-500 to-pink-600",
      hover: "hover:border-purple-500/50",
      action: onNotify,
      disabled: !checkoutCompleted,
    },
    {
      title: "Cancel Check-Out",
      description: "Abort current process",
      icon: XCircle,
      gradient: "from-red-500 to-orange-600",
      hover: "hover:border-red-500/50",
      action: onCancel,
      disabled: loading,
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

      <div className="mb-8 rounded-2xl border border-slate-700 bg-slate-800 p-5">

        <div className="flex justify-between py-2 border-b border-slate-700">
          <span className="text-slate-400">
            Visitor Selected
          </span>

          <span className={visitor ? "text-green-400" : "text-red-400"}>
            {visitor ? "Completed" : "Pending"}
          </span>
        </div>

        <div className="flex justify-between py-2 border-b border-slate-700">
          <span className="text-slate-400">
            Items Returned
          </span>

          <span className={itemsVerified ? "text-green-400" : "text-yellow-400"}>
            {itemsVerified ? "Verified" : "Pending"}
          </span>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-slate-400">
            Security Verification
          </span>

          <span className={securityVerified ? "text-green-400" : "text-yellow-400"}>
            {securityVerified ? "Verified" : "Pending"}
          </span>
        </div>

      </div>

      <div className="grid gap-5">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <motion.button
              key={action.title}
              whileHover={!action.disabled ? { scale: 1.03 } : {}}
              whileTap={!action.disabled ? { scale: 0.98 } : {}}
              disabled={action.disabled}
              onClick={action.action}
              className={`rounded-2xl border border-slate-800 bg-slate-800/70 p-5 transition ${
                action.hover
              } ${action.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div className="flex items-center gap-5">

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${action.gradient} flex items-center justify-center`}
                >
                  <Icon
                    size={28}
                    className={action.spin ? "animate-spin text-white" : "text-white"}
                  />
                </div>

                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white">
                    {loading && action.title === "Complete Check-Out"
                      ? "Processing..."
                      : action.title}
                  </h3>

                  <p className="text-slate-400 text-sm">
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
          {checkoutCompleted
            ? "Visitor checkout completed successfully."
            : "Complete all verification steps before checkout."}
        </p>
      </div>
    </motion.div>
  );
}

export default CheckoutActions;