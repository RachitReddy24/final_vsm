import { motion } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  QrCode,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    text: "Enterprise Security",
  },
  {
    icon: QrCode,
    text: "QR Visitor Verification",
  },
  {
    icon: BadgeCheck,
    text: "Digital Visitor Pass",
  },
];

function LoginIllustration() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl mx-auto mb-6"
      >
        <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight">
          Visitor
          <br />
          Management System
        </h1>

        <p className="mt-4 text-slate-400 text-base leading-7 max-w-md mx-auto">
          Smart visitor registration, secure QR verification,
          digital visitor passes and seamless reception management.
        </p>
      </motion.div>

      {/* Illustration */}

      <div className="relative flex items-center justify-center w-full h-[280px]">

        {/* Glow */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="
            absolute
            w-[260px]
            h-[260px]
            rounded-full
            bg-cyan-500/10
            blur-[90px]
          "
        />

        {/* Outer Ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            w-[260px]
            h-[260px]
            rounded-full
            border
            border-cyan-500/20
          "
        />

        {/* Inner Ring */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            w-[190px]
            h-[190px]
            rounded-full
            border
            border-blue-500/20
          "
        />

        {/* Building */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            relative
            w-32
            h-32
            rounded-[30px]
            bg-gradient-to-br
            from-blue-600
            to-cyan-500
            flex
            items-center
            justify-center
            shadow-[0_15px_60px_rgba(14,165,233,.45)]
          "
        >
          <Building2
            size={60}
            className="text-white"
          />
        </motion.div>

      </div>

      {/* Features */}

      <div className="w-full max-w-md mt-6 space-y-3">

        {features.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                px-5
                py-4
                hover:border-cyan-400
                transition-all
                duration-300
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={18}
                    className="text-white"
                  />
                </div>

                <span className="text-white text-base font-medium">
                  {item.text}
                </span>

              </div>

              <ArrowRight
                size={16}
                className="text-cyan-400"
              />

            </motion.div>

          );

        })}

      </div>

    </div>
  );
}

export default LoginIllustration;