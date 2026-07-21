import DashboardLayout from "../../layouts/roles/DashboardLayout";
import {
  Building2,
  ShieldCheck,
  Clock3,
  Mail,
  MessageSquare,
  QrCode,
  Save,
  Upload,
} from "lucide-react";

function Settings() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between lg:items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              System Settings
            </h1>

            <p className="text-slate-400 mt-2">
              Configure your Visitor Management System preferences.
            </p>

          </div>

          <button
            className="
            mt-5 lg:mt-0
            flex
            items-center
            gap-3
            px-6
            py-3
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            text-white
            font-semibold
            hover:scale-105
            transition-all
            shadow-xl
            "
          >
            <Save size={20} />
            Save Settings
          </button>

        </div>

        {/* Company */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <div className="flex items-center gap-3 mb-6">

            <Building2 className="text-cyan-400" />

            <h2 className="text-2xl font-bold text-white">
              Company Information
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <Input
              label="Company Name"
              placeholder="S3D Technologies Pvt. Ltd."
            />

            <Input
              label="Company Email"
              placeholder="support@s3dtechnologies.com"
            />

            <Input
              label="Phone Number"
              placeholder="+91 XXXXX XXXXX"
            />

            <Input
              label="Website"
              placeholder="www.s3dtechnologies.com"
            />

            <div className="md:col-span-2">

              <label className="block text-slate-300 mb-3">
                Company Address
              </label>

              <textarea
                rows={4}
                className="
                w-full
                bg-slate-800
                border
                border-slate-700
                rounded-2xl
                p-4
                text-white
                outline-none
                focus:border-cyan-500
                "
                placeholder="Company Address..."
              />

            </div>

          </div>

        </div>

        {/* Visitor Settings */}

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-6">

              <ShieldCheck className="text-green-400" />

              <h2 className="text-2xl font-bold text-white">
                Visitor Security
              </h2>

            </div>

            <div className="space-y-5">

              <Input
                label="OTP Length"
                placeholder="6"
              />

              <Input
                label="OTP Expiry (Minutes)"
                placeholder="10"
              />

              <Input
                label="Maximum Visitors Per Day"
                placeholder="500"
              />

            </div>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-6">

              <QrCode className="text-blue-400" />

              <h2 className="text-2xl font-bold text-white">
                QR Settings
              </h2>

            </div>

            <div className="space-y-5">

              <Input
                label="QR Expiry"
                placeholder="24 Hours"
              />

              <Input
                label="Badge Validity"
                placeholder="Same Day"
              />

              <Input
                label="Check-In Grace Time"
                placeholder="30 Minutes"
              />

            </div>

          </div>

        </div>

        {/* Communication */}

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-6">

              <Mail className="text-orange-400" />

              <h2 className="text-2xl font-bold text-white">
                Email Settings
              </h2>

            </div>

            <div className="space-y-5">

              <Input
                label="SMTP Email"
                placeholder="support@company.com"
              />

              <Input
                label="SMTP Host"
                placeholder="smtp.gmail.com"
              />

              <Input
                label="SMTP Port"
                placeholder="587"
              />

            </div>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <div className="flex items-center gap-3 mb-6">

              <MessageSquare className="text-pink-400" />

              <h2 className="text-2xl font-bold text-white">
                SMS Settings
              </h2>

            </div>

            <div className="space-y-5">

              <Input
                label="SMS Provider"
                placeholder="Twilio"
              />

              <Input
                label="Sender ID"
                placeholder="VMS"
              />

              <Input
                label="API Key"
                placeholder="********"
              />

            </div>

          </div>

        </div>

        {/* Working Hours */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <div className="flex items-center gap-3 mb-6">

            <Clock3 className="text-yellow-400" />

            <h2 className="text-2xl font-bold text-white">
              Working Hours
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <Input
              label="Opening Time"
              placeholder="09:00 AM"
            />

            <Input
              label="Closing Time"
              placeholder="06:00 PM"
            />

          </div>

        </div>

        {/* Upload */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <div className="flex items-center gap-3 mb-6">

            <Upload className="text-cyan-400" />

            <h2 className="text-2xl font-bold text-white">
              Company Logo
            </h2>

          </div>

          <div className="border-2 border-dashed border-slate-700 rounded-3xl h-52 flex flex-col justify-center items-center">

            <Upload
              size={50}
              className="text-slate-500"
            />

            <p className="text-slate-400 mt-4">
              Upload Company Logo
            </p>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>

      <label className="block text-slate-300 mb-3">
        {label}
      </label>

      <input
        placeholder={placeholder}
        className="
        w-full
        bg-slate-800
        border
        border-slate-700
        rounded-2xl
        px-5
        py-4
        text-white
        outline-none
        focus:border-cyan-500
        "
      />

    </div>
  );
}

export default Settings;