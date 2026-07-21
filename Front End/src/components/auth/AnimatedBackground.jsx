import { motion } from "framer-motion";
import {
  ShieldCheck,
  QrCode,
  Building2,
  Users,
} from "lucide-react";

const floatingIcons = [
  {
    Icon: ShieldCheck,
    top: "10%",
    left: "12%",
    delay: 0,
    size: 44,
  },
  {
    Icon: QrCode,
    top: "65%",
    left: "18%",
    delay: 0.5,
    size: 52,
  },
  {
    Icon: Building2,
    top: "25%",
    right: "15%",
    delay: 1,
    size: 48,
  },
  {
    Icon: Users,
    bottom: "12%",
    right: "20%",
    delay: 1.5,
    size: 50,
  },
];

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Background Gradient */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />

      {/* Top Blob */}

      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -80, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-[520px]
          h-[520px]
          rounded-full
          bg-cyan-500/10
          blur-[140px]
          -top-48
          -left-40
        "
      />

      {/* Bottom Blob */}

      <motion.div
        animate={{
          x: [0, -60, 70, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-600/10
          blur-[140px]
          -bottom-40
          -right-32
        "
      />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Floating Icons */}

      {floatingIcons.map(
        ({ Icon, delay, size, ...position }, index) => (
          <motion.div
            key={index}
            style={position}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay,
            }}
            className="
              absolute
              w-20
              h-20
              rounded-3xl
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              shadow-2xl
              flex
              items-center
              justify-center
            "
          >
            <Icon
              size={size}
              className="text-cyan-400"
            />
          </motion.div>
        )
      )}

      {/* Decorative Rings */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          border
          border-cyan-500/5
        "
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[900px]
          h-[900px]
          rounded-full
          border
          border-blue-500/5
        "
      />

      {/* Bottom Glow */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-60
          bg-gradient-to-t
          from-cyan-500/10
          to-transparent
        "
      />

    </div>
  );
}

export default AnimatedBackground;