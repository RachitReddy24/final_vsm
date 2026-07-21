import { Save } from "lucide-react";

function SystemSettings() {
  return (
    <div className="space-y-8">

      {/* Company Information */}

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold text-white mb-6">
          Company Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Input label="Company Name" defaultValue="S3D Technology Pvt Ltd" />

          <Input label="Company Email" defaultValue="info@s3dtechnology.com" />

          <Input label="Company Phone" defaultValue="+91 9876543210" />

          <Input label="Company Website" defaultValue="www.s3dtechnology.com" />

        </div>

      </div>

      {/* Visitor Settings */}

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold text-white mb-6">
          Visitor Settings
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Input label="OTP Expiry (Minutes)" defaultValue="10" />

          <Input label="QR Expiry (Hours)" defaultValue="24" />

          <Input label="Maximum Visitors Per Day" defaultValue="500" />

          <Input label="Visitor Badge Validity" defaultValue="1 Day" />

        </div>

      </div>

      {/* Email */}

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold text-white mb-6">
          Email Configuration
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Input label="SMTP Host" />

          <Input label="SMTP Port" />

          <Input label="Email Username" />

          <Input label="Email Password" type="password" />

        </div>

      </div>

      {/* SMS */}

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold text-white mb-6">
          SMS Configuration
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Input label="Twilio SID" />

          <Input label="Twilio Token" />

          <Input label="Twilio Number" />

        </div>

      </div>

      {/* Save */}

      <div className="flex justify-end">

        <button className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white">

          <Save size={20} />

          Save Settings

        </button>

      </div>

    </div>
  );
}

function Input({
  label,
  type = "text",
  defaultValue = "",
}) {
  return (
    <div>

      <label className="block mb-2 text-slate-300">
        {label}
      </label>

      <input
        type={type}
        defaultValue={defaultValue}
        className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-cyan-500"
      />

    </div>
  );
}

export default SystemSettings;