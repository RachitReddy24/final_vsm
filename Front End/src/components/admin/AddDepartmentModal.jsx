import { X } from "lucide-react";
import { useState } from "react";
function AddDepartmentModal({ open, onClose, onSave }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("Department name is required");
      return;
    }

    onSave({
      name,
      description,
    });

    setName("");
    setDescription("");
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="w-full max-w-lg bg-slate-900 rounded-3xl border border-slate-700 p-8">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            Add Department
          </h2>

          <button onClick={onClose}>
            <X className="text-white" />
          </button>
        </div>

        <div className="space-y-5">

          <div>
            <label className="block text-slate-300 mb-2">
              Department Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
              placeholder="Enter department name"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-2">
              Description
            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
              placeholder="Enter description"
            />
          </div>

          <div className="flex justify-end gap-3">

            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-slate-700 text-white"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white"
            >
              Save
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default AddDepartmentModal;