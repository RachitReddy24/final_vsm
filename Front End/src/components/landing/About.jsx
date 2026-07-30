import { motion } from "framer-motion";
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
  return (
    <section
      id="about"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full bg-cyan-500/10 px-5 py-2 text-cyan-400">
              About VisitorMS
            </span>

            <h2 className="mt-6 text-5xl font-black">
              Built for Modern Enterprises
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              VisitorMS digitizes visitor registration,
              employee approvals, QR verification,
              analytics and security into one
              intelligent platform.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6">

              {features.map((item) => (

                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
                >
                  <div className="mb-4 text-cyan-400">
                    {item.icon}
                  </div>

                  <h3 className="font-semibold">
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