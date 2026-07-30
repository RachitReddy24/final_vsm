import { motion } from "framer-motion";

function FeatureCard({
  icon,
  title,
  description,
  color = "from-cyan-500 to-blue-600",
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
        rotateX: 6,
      }}
      transition={{ duration: 0.3 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur-xl
        p-8
        shadow-xl
        transition-all
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
          bg-gradient-to-br
          from-cyan-500/10
          via-transparent
          to-blue-500/10
        "
      />

      {/* Icon */}
      <div
        className={`
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-r
          ${color}
          shadow-lg
        `}
      >
        {icon}
      </div>

      <h3 className="relative mt-7 text-2xl font-bold">
        {title}
      </h3>

      <p className="relative mt-4 leading-7 text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;