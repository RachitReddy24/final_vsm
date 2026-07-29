import {
  ShieldCheck,
  BadgeCheck,
  ClipboardCheck,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Carry a Valid ID",
  },
  {
    icon: BadgeCheck,
    title: "Wear Visitor Badge",
  },
  {
    icon: ClipboardCheck,
    title: "Follow Security Rules",
  },
];

function VisitorGuidelines() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl p-6">

      <h2 className="text-xl font-bold text-white mb-5">
        Visitor Guidelines
      </h2>

      <div className="space-y-5">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-4 p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
            >
              <div className="bg-cyan-500/15 p-3 rounded-xl">
                <Icon
                  size={20}
                  className="text-cyan-400"
                />
              </div>

              <span className="text-slate-200 font-medium">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default VisitorGuidelines;