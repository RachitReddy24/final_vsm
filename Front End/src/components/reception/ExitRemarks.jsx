import { motion } from "framer-motion";
import { ClipboardEdit } from "lucide-react";

function ExitRemarks({
  remarks,
  setRemarks,
  onSubmit,
  loading,
}) {
  const handleSubmit = () => {
    if (!remarks.notes.trim()) {
      alert("Please enter visitor feedback.");
      return;
    }

    if (remarks.notes.trim().length < 5) {
      alert("Feedback must be at least 5 characters.");
      return;
    }

    onSubmit();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[30px] border border-slate-800 bg-slate-900 p-8 shadow-xl"
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
            Feedback
          </h2>

          <p className="text-slate-400 mt-1">
            Record the visitor's feedback after checkout.
          </p>
        </div>
      </div>

      {/* Visitor Rating */}
      <div className="mb-6">
        <label className="block text-slate-300 mb-2 font-medium">
          Visitor Rating
        </label>

        <select
          value={remarks.rating}
          onChange={(e) =>
            setRemarks((prev) => ({
              ...prev,
              rating: Number(e.target.value),
            }))
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <option value={5}>⭐⭐⭐⭐⭐ Excellent</option>
          <option value={4}>⭐⭐⭐⭐ Good</option>
          <option value={3}>⭐⭐⭐ Average</option>
          <option value={2}>⭐⭐ Poor</option>
          <option value={1}>⭐ Very Poor</option>
        </select>
      </div>

      {/* Exit Condition */}
      <div className="mb-6">
        <label className="block text-slate-300 mb-2 font-medium">
          Exit Condition
        </label>

        <select
          value={remarks.exitCondition}
          onChange={(e) =>
            setRemarks((prev) => ({
              ...prev,
              exitCondition: e.target.value,
            }))
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <option value="Normal Exit">Normal Exit</option>
          <option value="Meeting Completed">Meeting Completed</option>
          <option value="Cancelled Visit">Cancelled Visit</option>
          <option value="Emergency Exit">Emergency Exit</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Visitor Remarks */}
      <div className="mb-6">
        <label className="block text-slate-300 mb-2 font-medium">
          Visitor Remarks
        </label>

        <textarea
          rows={6}
          value={remarks.notes}
          onChange={(e) =>
            setRemarks((prev) => ({
              ...prev,
              notes: e.target.value,
            }))
          }
          placeholder="Enter visitor feedback..."
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* Incident Report */}
      <div className="mb-8">
        <label className="block text-slate-300 mb-2 font-medium">
          Incident Report (Optional)
        </label>

        <textarea
          rows={4}
          value={remarks.incident}
          onChange={(e) =>
            setRemarks((prev) => ({
              ...prev,
              incident: e.target.value,
            }))
          }
          placeholder="Mention any issue during visitor exit..."
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        className="w-full rounded-xl bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-900 disabled:cursor-not-allowed transition-all py-3 text-white font-semibold"
      >
        {loading ? "Submitting Feedback..." : "Submit Feedback"}
      </button>
    </motion.div>
  );
}

export default ExitRemarks;