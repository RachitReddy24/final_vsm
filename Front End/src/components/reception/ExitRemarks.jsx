import { motion } from "framer-motion";
import { ClipboardEdit, FileText, AlertCircle } from "lucide-react";
import { useState } from "react";

function ExitRemarks() {
  const [exitCondition, setExitCondition] = useState("Normal Exit");
  const [remarks, setRemarks] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        rounded-[30px]
        border
        border-slate-800
        bg-slate-900
        p-8
        shadow-xl
      "
    >
      {/* Header */}

      <div className="flex items-center gap-4 mb-8">

        <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
          <ClipboardEdit
            size={28}
            className="text-cyan-400"
          />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Exit Remarks
          </h2>

          <p className="text-slate-400 mt-1">
            Record the visitor's exit details before checkout.
          </p>

        </div>

      </div>

      {/* Exit Condition */}

      <div className="mb-6">

        <label className="block text-slate-300 mb-2 font-medium">
          Exit Condition
        </label>

        <select
          value={exitCondition}
          onChange={(e) => setExitCondition(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-800
            px-4
            py-3
            text-white
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-500
          "
        >
          <option>Normal Exit</option>
          <option>Meeting Completed</option>
          <option>Cancelled Visit</option>
          <option>Emergency Exit</option>
          <option>Other</option>
        </select>

      </div>

      {/* Remarks */}

      <div>

        <label className="block text-slate-300 mb-2 font-medium">
          Receptionist Remarks
        </label>

        <textarea
          rows={6}
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          placeholder="Enter checkout remarks..."
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-800
            px-4
            py-3
            text-white
            placeholder:text-slate-500
            resize-none
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-500
          "
        />

      </div>

      {/* Information Box */}

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-amber-500/30
          bg-amber-500/10
          p-5
          flex
          gap-4
        "
      >

        <AlertCircle
          className="text-amber-400 mt-1"
          size={22}
        />

        <div>

          <h4 className="text-amber-300 font-semibold">
            Important
          </h4>

          <p className="text-slate-300 text-sm mt-1">
            Ensure all company assets are returned and all verification
            steps are completed before confirming visitor check-out.
          </p>

        </div>

      </div>

      {/* Live Preview */}

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-slate-800
          bg-slate-800/60
          p-5
        "
      >

        <div className="flex items-center gap-3 mb-4">

          <FileText
            size={22}
            className="text-cyan-400"
          />

          <h4 className="text-lg font-semibold text-white">
            Exit Summary
          </h4>

        </div>

        <div className="space-y-3 text-sm">

          <div className="flex justify-between">
            <span className="text-slate-400">Exit Condition</span>
            <span className="text-white font-medium">
              {exitCondition}
            </span>
          </div>

          <div className="flex justify-between items-start gap-5">
            <span className="text-slate-400">Remarks</span>

            <span className="text-white text-right max-w-xs">
              {remarks || "No remarks added"}
            </span>
          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default ExitRemarks;