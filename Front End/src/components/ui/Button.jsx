import { motion } from "framer-motion";

function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className={`px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;