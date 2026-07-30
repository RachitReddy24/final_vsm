import { ShieldCheck } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-3">

      <div
        className="
          h-12
          w-12
          rounded-2xl
          bg-gradient-to-br
          from-cyan-500
          to-blue-600
          flex
          items-center
          justify-center
          shadow-lg
          shadow-cyan-500/30
        "
      >
        <ShieldCheck size={24} className="text-white" />
      </div>

      <div>
        <h1 className="text-2xl font-black">
          <span className="text-cyan-400">Visitor</span>
          <span className="text-white dark:text-white text-slate-900">
            MS
          </span>
        </h1>

        <p className="text-xs text-slate-400">
          Enterprise Solution
        </p>
      </div>

    </div>
  );
}

export default Logo;