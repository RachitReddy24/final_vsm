import { useEffect, useState } from "react";
import {
  X,
  Save,
} from "lucide-react";

function EditUserModal({
  open,
  user,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState({});

  useEffect(() => {
    if (user) {
      setForm(user);
    }
  }, [user]);

  if (!open || !user) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const save = () => {
    onSave(form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700 p-8">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold text-white">
            Edit User
          </h2>

          <button
            onClick={onClose}
            className="p-3 rounded-xl bg-slate-800 hover:bg-red-600"
          >
            <X className="text-white" />
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <Input
            label="Full Name"
            name="name"
            value={form.name || ""}
            onChange={handleChange}
          />

          <Input
            label="Email"
            name="email"
            value={form.email || ""}
            onChange={handleChange}
          />

          <Input
            label="Phone"
            name="phone"
            value={form.phone || ""}
            onChange={handleChange}
          />

          <Input
            label="Department"
            name="department"
            value={form.department || ""}
            onChange={handleChange}
          />

        </div>

        <div className="flex justify-end mt-8 gap-4">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-slate-700 text-white"
          >
            Cancel
          </button>

          <button
            onClick={save}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 text-white"
          >
            <Save size={18} />

            Save Changes

          </button>

        </div>

      </div>

    </div>
  );
}

function Input({
  label,
  ...props
}) {
  return (
    <div>

      <label className="block mb-2 text-slate-300">
        {label}
      </label>

      <input
        {...props}
        className="
        w-full
        rounded-xl
        bg-slate-800
        border
        border-slate-700
        px-4
        py-3
        text-white
        "
      />

    </div>
  );
}

export default EditUserModal;