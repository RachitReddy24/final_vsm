import { motion } from "framer-motion";
import {
  Laptop,
  BadgeCheck,
  CreditCard,
  Car,
  CheckCircle2,
  Circle,
} from "lucide-react";

const checklist = [
  {
    key: "laptop",
    title: "Laptop",
    icon: Laptop,
  },
  {
    key: "visitorBadge",
    title: "Visitor Badge",
    icon: BadgeCheck,
  },
  {
    key: "idCard",
    title: "ID Card Returned",
    icon: CreditCard,
  },
  {
    key: "parkingToken",
    title: "Parking Token",
    icon: Car,
  },
];

function ItemsChecklist({
  items,
  setItems,
}) {

  const toggleItem = (key) => {
    setItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const returnedItems = Object.values(items).filter(Boolean).length;
  const totalItems = checklist.length;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="rounded-[30px] border border-slate-800 bg-slate-900 p-8 shadow-xl"
    >

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Visitor Items
          </h2>

          <p className="text-slate-400 mt-2">
            Verify all visitor belongings before exit.
          </p>

        </div>

        <div className="text-cyan-400 font-semibold">
          {returnedItems} / {totalItems}
        </div>

      </div>

      {/* Checklist */}

      <div className="space-y-5 mt-8">

        {checklist.map((item) => {

          const Icon = item.icon;
          const returned = items[item.key];

          return (

            <button
              key={item.key}
              type="button"
              onClick={() => toggleItem(item.key)}
              className="w-full flex items-center justify-between rounded-2xl bg-slate-800 border border-slate-700 hover:border-cyan-500 transition p-5"
            >

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">

                  <Icon
                    size={22}
                    className="text-cyan-400"
                  />

                </div>

                <span className="text-white font-medium">
                  {item.title}
                </span>

              </div>

              {returned ? (

                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400">

                  <CheckCircle2 size={18} />

                  Returned

                </span>

              ) : (

                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400">

                  <Circle size={16} />

                  Pending

                </span>

              )}

            </button>

          );

        })}

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 p-5">

        <div className="flex justify-between items-center">

          <span className="text-slate-300">
            Items Returned
          </span>

          <span className="text-cyan-400 font-bold text-lg">
            {returnedItems} / {totalItems}
          </span>

        </div>

      </div>

    </motion.div>
  );
}

export default ItemsChecklist;