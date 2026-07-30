import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.4 }}
      onClick={toggleTheme}
      className="
        h-11 w-11
        rounded-xl
        border
        border-slate-700
        bg-slate-900/70
        backdrop-blur-xl
        flex
        items-center
        justify-center
        hover:border-cyan-500
        transition
      "
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400" size={20} />
      ) : (
        <Moon className="text-cyan-500" size={20} />
      )}
    </motion.button>
  );
}

export default ThemeToggle;