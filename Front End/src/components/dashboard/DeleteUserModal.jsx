import {
  Trash2,
  X,
  AlertTriangle,
} from "lucide-react";

function DeleteUserModal({
  open,
  user,
  onClose,
  onDelete,
}) {
  if (!open || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-lg rounded-3xl bg-slate-900 border border-red-500/20 p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-6">

          <div className="flex items-center gap-3">

            <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center">

              <AlertTriangle
                size={28}
                className="text-red-400"
              />

            </div>

            <div>

              <h2 className="text-3xl font-bold text-white">
                Delete User
              </h2>

              <p className="text-slate-400">
                This action cannot be undone.
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-red-600 transition"
          >
            <X className="text-white" />
          </button>

        </div>

        {/* Warning */}

        <div className="rounded-2xl bg-red-500/10 border border-red-500/20 p-6">

          <h3 className="text-white font-semibold text-lg">
            Are you sure you want to delete this user?
          </h3>

          <div className="mt-5 space-y-3">

            <p className="text-slate-300">
              <span className="text-slate-400">Name :</span>{" "}
              {user.name}
            </p>

            <p className="text-slate-300">
              <span className="text-slate-400">Email :</span>{" "}
              {user.email}
            </p>

            <p className="text-slate-300">
              <span className="text-slate-400">Role :</span>{" "}
              {user.role}
            </p>

            <p className="text-slate-300">
              <span className="text-slate-400">Department :</span>{" "}
              {user.department}
            </p>

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition"
          >
            Cancel
          </button>

          <button
            onClick={() => onDelete(user.id)}
            className="
            flex
            items-center
            gap-2
            px-6
            py-3
            rounded-xl
            bg-gradient-to-r
            from-red-600
            to-rose-500
            hover:scale-105
            transition
            text-white
            "
          >

            <Trash2 size={18} />

            Delete User

          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteUserModal;