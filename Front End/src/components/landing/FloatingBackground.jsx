import { motion } from "framer-motion";

function FloatingBackground() {
  return (
    <>
      {/* Main Background */}
      <div className="absolute inset-0 -z-50 overflow-hidden">

        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 light:from-slate-100 light:via-white light:to-slate-100" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right,#38bdf8 1px,transparent 1px),
              linear-gradient(to bottom,#38bdf8 1px,transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Cyan Orb */}
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-40
            -left-40
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-500/20
            blur-[170px]
          "
        />

        {/* Blue Orb */}
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -70, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-0
            top-32
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/20
            blur-[170px]
          "
        />

        {/* Violet Orb */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-0
            left-1/3
            h-[420px]
            w-[420px]
            rounded-full
            bg-violet-500/20
            blur-[170px]
          "
        />

        {/* Small Floating Glow */}
        <motion.div
          animate={{
            y: [0, -35, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="
            absolute
            top-52
            right-1/4
            h-28
            w-28
            rounded-full
            bg-cyan-400/30
            blur-3xl
          "
        />

        {/* Bottom Glow */}
        <motion.div
          animate={{
            x: [0, 70, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-20
            left-20
            h-40
            w-40
            rounded-full
            bg-blue-400/30
            blur-3xl
          "
        />

        {/* Noise Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(circle,#fff 1px,transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

      </div>
    </>
  );
}

export default FloatingBackground;