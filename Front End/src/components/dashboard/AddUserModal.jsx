import { useState } from "react";
import { X, UserPlus } from "lucide-react";

function AddUserModal({
  open,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    department: "",
    password: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    onSave(form);

    setForm({
      name: "",
      email: "",
      phone: "",
      role: "",
      department: "",
      password: "",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700 p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Add User
            </h2>

            <p className="text-slate-400 mt-2">
              Create a new system user.
            </p>

          </div>

          <button
            onClick={onClose}
            className="p-3 rounded-xl bg-slate-800 hover:bg-red-600 transition"
          >
            <X className="text-white" />
          </button>

        </div>

        {/* Form */}

        <div className="grid md:grid-cols-2 gap-6">

          <Input
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />

          <Select
            label="Role"
            name="role"
            value={form.role}
            onChange={handleChange}
            options={[
              "Admin",
              "Reception",
              "Host",
            ]}
          />

          <Input
            label="Department"
            name="department"
            value={form.department}
            onChange={handleChange}
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white"
          >
            Cancel
          </button>

          <button
            onClick={submit}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:scale-105 transition text-white"
          >
            <UserPlus size={18} />

            Add User
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
        outline-none
        focus:border-cyan-500
        "
      />

    </div>
  );
}

function Select({
  label,
  options,
  ...props
}) {
  return (
    <div>

      <label className="block mb-2 text-slate-300">
        {label}
      </label>

      <select
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
        outline-none
        focus:border-cyan-500
        "
      >

        <option value="">
          Select
        </option>

        {options.map((option) => (

          <option
            key={option}
            value={option}
          >
            {option}
          </option>

        ))}

      </select>

    </div>
  );
}

export default AddUserModal;