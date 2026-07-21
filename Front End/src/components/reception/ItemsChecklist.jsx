import { motion } from "framer-motion";
import {
  Laptop,
  BadgeCheck,
  CreditCard,
  Car,
  CheckCircle2,
} from "lucide-react";

const items = [
  {
    id: 1,
    title: "Laptop",
    status: true,
    icon: Laptop,
  },
  {
    id: 2,
    title: "Visitor Badge",
    status: true,
    icon: BadgeCheck,
  },
  {
    id: 3,
    title: "ID Card Returned",
    status: true,
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Parking Token",
    status: false,
    icon: Car,
  },
];

function ItemsChecklist() {
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
      className="
      rounded-[30px]
      border
      border-slate-800
      bg-slate-900
      p-8
      shadow-xl
      "
    >

      <h2 className="text-2xl font-bold text-white">
        Visitor Items
      </h2>

      <p className="text-slate-400 mt-2">
        Verify all visitor belongings before exit.
      </p>

      <div className="space-y-5 mt-8">

        {items.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.id}
              className="
              flex
              items-center
              justify-between
              rounded-2xl
              bg-slate-800
              border
              border-slate-700
              p-5
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                  w-12
                  h-12
                  rounded-xl
                  bg-cyan-500/20
                  flex
                  items-center
                  justify-center
                  "
                >

                  <Icon
                    size={22}
                    className="text-cyan-400"
                  />

                </div>

                <span className="text-white font-medium">
                  {item.title}
                </span>

              </div>

              {item.status ? (

                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400">

                  <CheckCircle2 size={18} />

                  Returned

                </span>

              ) : (

                <span className="px-4 py-2 rounded-full bg-red-500/20 text-red-400">

                  Pending

                </span>

              )}

            </div>

          );

        })}

      </div>

    </motion.div>
  );
}

export default ItemsChecklist;