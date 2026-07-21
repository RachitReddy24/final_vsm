import { CheckCircle2, Mail, X } from "lucide-react";

function ApproveModal({
  open,
  onClose,
  onApprove,
  visitor,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">

      <div className="w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700 p-8">

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold text-white">
            Approve Meeting
          </h2>

          <button onClick={onClose}>
            <X className="text-slate-400" />
          </button>

        </div>

        <div className="mt-8 space-y-4">

          <div className="rounded-2xl bg-slate-800 p-5">

            <p className="text-slate-400">
              Visitor
            </p>

            <h3 className="text-white text-xl font-semibold">
              {visitor?.visitor}
            </h3>

          </div>

          <div className="rounded-2xl bg-slate-800 p-5">

            <p className="text-slate-400">
              Company
            </p>

            <h3 className="text-white">
              {visitor?.company}
            </h3>

          </div>

          <div className="rounded-2xl bg-slate-800 p-5">

            <p className="text-slate-400">
              Host
            </p>

            <h3 className="text-white">
              {visitor?.host}
            </h3>

          </div>

        </div>

        <div className="mt-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 p-5">

          <div className="flex gap-3">

            <Mail className="text-cyan-400" />

            <div>

              <h3 className="text-white font-semibold">
                After Approval
              </h3>

              <p className="text-slate-400 mt-1">
                Visitor Email will be prepared.
              </p>

              <p className="text-slate-400">
                Host Email will be prepared.
              </p>

            </div>

          </div>

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-slate-700 text-white"
          >
            Cancel
          </button>

          <button
            onClick={onApprove}
            className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
          >

            <CheckCircle2 size={18} />

            Approve

          </button>

        </div>

      </div>

    </div>
  );
}

export default ApproveModal;