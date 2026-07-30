import {
  QrCode,
  ShieldCheck,
  BarChart3,
  Users,
  Bell,
  CalendarDays,
} from "lucide-react";

import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Visitor Registration",
    description:
      "Digitally register visitors with a modern and paperless onboarding process.",
    icon: <Users className="text-white" size={30} />,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "QR Check-In",
    description:
      "Fast and secure visitor verification using QR codes for seamless entry.",
    icon: <QrCode className="text-white" size={30} />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "OTP Verification",
    description:
      "Strengthen security by verifying visitors using one-time passwords.",
    icon: <ShieldCheck className="text-white" size={30} />,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Analytics",
    description:
      "Track visitor trends with interactive dashboards and reports.",
    icon: <BarChart3 className="text-white" size={30} />,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Notifications",
    description:
      "Automatically notify employees and visitors through email and SMS.",
    icon: <Bell className="text-white" size={30} />,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Meeting Management",
    description:
      "Schedule, approve and manage meetings from one central dashboard.",
    icon: <CalendarDays className="text-white" size={30} />,
    color: "from-pink-500 to-rose-500",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="relative py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-400">
            Core Features
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            A complete enterprise solution to simplify visitor
            registration, approvals, security and reporting.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;