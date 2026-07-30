import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import {
  ShieldCheck,
  Building2,
  BarChart3,
  Users,
} from "lucide-react";



const features = [
  {
    icon: <ShieldCheck />,
    title: "Enterprise Security",
  },
  {
    icon: <Building2 />,
    title: "Multi Organization",
  },
  {
    icon: <BarChart3 />,
    title: "Real-time Analytics",
  },
  {
    icon: <Users />,
    title: "Employee Approval",
  },
];

function About() {
  const { theme } = useTheme();
  return (
    <section
  id="about"
  className={`py-32 transition-all duration-300 ${
    theme === "dark"
      ? "bg-slate-950 text-white"
      : "bg-white text-slate-900"
  }`}
>
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className={`rounded-full px-5 py-2 ${
  theme === "dark"
    ? "bg-cyan-500/10 text-cyan-400"
    : "bg-cyan-100 text-cyan-700"
}`}>
              About VisitorMS
            </span>

            <h2 
  className={`mt-6 text-5xl font-black ${
    theme === "dark"
      ? "text-white"
      : "text-slate-900"
  }`}
>
              Built for Modern Enterprises
            </h2>

            <p className={`mt-8 text-lg leading-8 ${
  theme === "dark"
    ? "text-slate-400"
    : "text-slate-600"
}`}>
              VisitorMS digitizes visitor registration,
              employee approvals, QR verification,
              analytics and security into one
              intelligent platform.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6">

              {features.map((item) => (

                <div
                  key={item.title}
                  className={`rounded-2xl border p-5 transition-all ${
  theme === "dark"
    ? "border-slate-800 bg-slate-900/60"
    : "border-gray-200 bg-gray-50 shadow-sm"
}`}
                >
                  <div className={`mb-4 ${
  theme === "dark"
    ? "text-cyan-400"
    : "text-cyan-600"
}`}>
                    {item.icon}
                  </div>

                  <h3
  className={`font-semibold ${
    theme === "dark"
      ? "text-white"
      : "text-slate-900"
  }`}
>
                    {item.title}
                  </h3>
                </div>

              ))}

            </div>

          </motion.div>

          {/* Right */}

          

        </div>

      </div>
    </section>
  );
}

export default About;