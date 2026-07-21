import { motion } from "framer-motion";
import {
  ShieldCheck,
  UserCheck,
  QrCode,
  PackageCheck,
  FileSignature,
  CheckCircle2,
} from "lucide-react";

const checklist = [
  {
    id: 1,
    title: "Visitor Identity Verified",
    description: "Identity matches registered visitor.",
    icon: UserCheck,
    completed: true,
  },
  {
    id: 2,
    title: "Host Approved Exit",
    description: "Host has approved visitor departure.",
    icon: ShieldCheck,
    completed: true,
  },
  {
    id: 3,
    title: "QR Badge Scanned",
    description: "Visitor badge successfully scanned.",
    icon: QrCode,
    completed: true,
  },
  {
    id: 4,
    title: "No Pending Assets",
    description: "All issued assets have been returned.",
    icon: PackageCheck,
    completed: true,
  },
  {
    id: 5,
    title: "Visitor Signature Collected",
    description: "Digital exit confirmation completed.",
    icon: FileSignature,
    completed: false,
  },
];

function SecurityChecklist() {
  const completedCount = checklist.filter(item => item.completed).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[30px] border border-slate-800 bg-slate-900 p-8 shadow-xl"
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Security Checklist
          </h2>

          <p className="text-slate-400 mt-2">
            Complete all security verifications before checkout.
          </p>
        </div>

        <div className="text-right">

          <p className="text-slate-400 text-sm">
            Progress
          </p>

          <h3 className="text-2xl font-bold text-green-400">
            {completedCount}/{checklist.length}
          </h3>

        </div>

      </div>

      {/* Checklist */}

      <div className="space-y-4 mt-8">

        {checklist.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.id}
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-800/60 p-5"
            >

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">

                  <Icon
                    size={22}
                    className="text-cyan-400"
                  />

                </div>

                <div>

                  <h4 className="text-white font-semibold">
                    {item.title}
                  </h4>

                  <p className="text-sm text-slate-400">
                    {item.description}
                  </p>

                </div>

              </div>

              {item.completed ? (

                <span className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 text-green-400">

                  <CheckCircle2 size={18} />

                  Verified

                </span>

              ) : (

                <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-yellow-400">

                  Pending

                </span>

              )}

            </div>

          );

        })}

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-5">

        <div className="flex items-center gap-3">

          <ShieldCheck className="text-green-400" size={24} />

          <div>

            <h4 className="font-semibold text-green-400">
              Security Verification Status
            </h4>

            <p className="text-sm text-slate-300">
              Complete all pending verification steps before enabling visitor check-out.
            </p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default SecurityChecklist;