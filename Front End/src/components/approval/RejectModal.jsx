import { useState } from "react";
import { XCircle, X } from "lucide-react";

function RejectModal({
  open,
  onClose,
  onReject,
  visitor,
}) {
  const [reason, setReason] = useState("");

  if (!open) return null;

  const handleReject = () => {
    if (!reason.trim()) {
      alert("Please enter a rejection reason.");
      return;
    }

    onReject(reason);
    setReason("");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">

      <div className="w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700 p-8">

        {/* Header */}

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold text-white">
            Reject Meeting
          </h2>

          <button onClick={onClose}>
            <X className="text-slate-400" />
          </button>

        </div>

        {/* Visitor */}

        <div className="mt-8 space-y-5">

          <div className="bg-slate-800 rounded-2xl p-5">

            <p className="text-slate-400">
              Visitor
            </p>

            <h3 className="text-white text-xl font-semibold">
              {visitor?.visitor}
            </h3>

          </div>

          <div className="bg-slate-800 rounded-2xl p-5">

            <p className="text-slate-400">
              Company
            </p>

            <h3 className="text-white">
              {visitor?.company}
            </h3>

          </div>

          <div className="bg-slate-800 rounded-2xl p-5">

            <p className="text-slate-400">
              Host
            </p>

            <h3 className="text-white">
              {visitor?.host}
            </h3>

          </div>

        </div>

        {/* Reason */}

        <div className="mt-8">

          <label className="block text-slate-300 mb-3">
            Reason for Rejection
          </label>

          <textarea
            rows={5}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter rejection reason..."
            className="
              w-full
              rounded-2xl
              bg-slate-800
              border
              border-slate-700
              p-5
              text-white
              outline-none
              resize-none
              focus:border-red-500
            "
          />

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="
              px-6
              py-3
              rounded-xl
              bg-slate-700
              text-white
            "
          >
            Cancel
          </button>

          <button
            onClick={handleReject}
            className="
              px-6
              py-3
              rounded-xl
              bg-red-600
              hover:bg-red-700
              text-white
              flex
              items-center
              gap-2
            "
          >

            <XCircle size={18} />

            Reject Meeting

          </button>

        </div>

      </div>

    </div>
  );
}

export default RejectModal;