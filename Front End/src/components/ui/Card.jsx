import { motion } from "framer-motion";

function Card({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`bg-white rounded-3xl shadow-md border p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default Card;