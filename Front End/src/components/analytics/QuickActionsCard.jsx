import {
  UserPlus,
  QrCode,
  BadgeCheck,
  CreditCard,
  Users,
  ClipboardCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const actions = [
  {
    title: "New Visitor",
    icon: UserPlus,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Visitor Check-In",
    icon: QrCode,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Verify Visitor",
    icon: BadgeCheck,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Visitor Pass",
    icon: CreditCard,
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Visitor Status",
    icon: Users,
    color: "from-cyan-500 to-sky-600",
  },
  {
    title: "Host Approval",
    icon: ClipboardCheck,
    color: "from-red-500 to-pink-600",
  },
];

function QuickActionsCard() {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl">

      {/* Header */}

      <div className="px-6 py-5 border-b border-slate-800">

        <h2 className="text-2xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="text-slate-400 mt-1">
          Frequently used operations
        </p>

      </div>

      {/* Buttons */}

      <div className="grid grid-cols-2 gap-5 p-6">

        {actions.map((item) => {

          const Icon = item.icon;

          return (

            <motion.button
              key={item.title}
              whileHover={{
                y: -6,
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
              group
              rounded-2xl
              border
              border-slate-700
              bg-slate-800
              hover:border-blue-500
              transition-all
              duration-300
              p-5
              "
            >

              <div
                className={`
                w-14
                h-14
                rounded-2xl
                bg-gradient-to-r
                ${item.color}
                flex
                items-center
                justify-center
                shadow-lg
                mx-auto
                `}
              >

                <Icon
                  size={28}
                  className="text-white"
                />

              </div>

              <h3 className="text-white font-semibold mt-5">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                Open Module
              </p>

            </motion.button>

          );

        })}

      </div>

    </div>
  );
}

export default QuickActionsCard;