import { Bell } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import NotificationDrawer from "./NotificationDrawer";

function NotificationBell() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{
          rotate: 15,
          scale: 1.15,
        }}
        whileTap={{
          scale: 0.9,
        }}
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        onClick={() => setOpen(true)}
        className="relative"
      >
        <Bell
          size={24}
          className="text-gray-700"
        />

        <motion.span
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center shadow"
        >
          5
        </motion.span>
      </motion.button>

      {open && (
        <NotificationDrawer
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default NotificationBell;