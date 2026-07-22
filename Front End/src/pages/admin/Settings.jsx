import DashboardLayout from "../../layouts/roles/DashboardLayout";
import { useEffect, useState } from "react";
import api from "../../services/api";
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
  const [settings, setSettings] = useState({
  companyName: "",
  companyEmail: "",
  companyPhone: "",
  companyWebsite: "",
  companyAddress: "",
  companyLogo: "",

  otpLength: "",
  otpExpiry: "",
  maxVisitorsPerDay: "",

  qrExpiryHours: "",
  badgeValidity: "",
  checkInGraceTime: "",

  smtpEmail: "",
  smtpHost: "",
  smtpPort: "",

  smsProvider: "",
  senderId: "",
  smsApiKey: "",

  officeStartTime: "",
  officeEndTime: "",
});
const [logo, setLogo] = useState(null);
useEffect(() => {
  fetchSettings();
}, []);

const fetchSettings = async () => {
  try {
    const response = await api.get("/settings");
    setSettings(response.data.data);
  } catch (error) {
    console.error(error);
  }
};
const saveSettings = async () => {
  try {
    const formData = new FormData();

    Object.keys(settings).forEach((key) => {
      formData.append(key, settings[key] ?? "");
    });

    if (logo) {
      formData.append("companyLogo", logo);
    }

    await api.put("/settings", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    alert("Settings updated successfully");

    fetchSettings();
  } catch (error) {
  console.error(error.response?.data);
  alert(error.response?.data?.message || "Failed to update settings");
}
};
const handleChange = (e) => {
  const { name, value } = e.target;

  setSettings((prev) => ({
    ...prev,
    [name]: value,
  }));
};
const handleLogoChange = (e) => {
  setLogo(e.target.files[0]);
};
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
            onClick={saveSettings}
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
  name="companyName"
  value={settings.companyName}
  onChange={handleChange}
  placeholder="S3D Technologies Pvt. Ltd."
/>

            <Input
  label="Company Email"
  name="companyEmail"
  value={settings.companyEmail}
  onChange={handleChange}
  placeholder="support@s3dtechnologies.com"
/>

            <Input
  label="Phone Number"
  name="companyPhone"
  value={settings.companyPhone}
  onChange={handleChange}
  placeholder="+91 XXXXX XXXXX"
/>

           <Input
  label="Website"
  name="companyWebsite"
  value={settings.companyWebsite}
  onChange={handleChange}
  placeholder="www.s3dtechnologies.com"
/>

            <div className="md:col-span-2">

              <label className="block text-slate-300 mb-3">
                Company Address
              </label>

              <textarea
  rows={4}
  name="companyAddress"
  value={settings.companyAddress}
  onChange={handleChange}
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
  name="otpLength"
  value={settings.otpLength}
  onChange={handleChange}
  placeholder="6"
/>
              <Input
  label="OTP Expiry (Minutes)"
  name="otpExpiry"
  value={settings.otpExpiry}
  onChange={handleChange}
  placeholder="10"
/>

<Input
  label="Maximum Visitors Per Day"
  name="maxVisitorsPerDay"
  value={settings.maxVisitorsPerDay}
  onChange={handleChange}
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
  name="qrExpiryHours"
  value={settings.qrExpiryHours}
  onChange={handleChange}
  placeholder="24 Hours"
/>

              <Input
  label="Badge Validity"
  name="badgeValidity"
  value={settings.badgeValidity}
  onChange={handleChange}
  placeholder="Same Day"
/>

    <Input
  label="Check-In Grace Time"
  name="checkInGraceTime"
  value={settings.checkInGraceTime}
  onChange={handleChange}
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
  name="smtpEmail"
  value={settings.smtpEmail}
  onChange={handleChange}
  placeholder="support@company.com"
/>

              <Input
  label="SMTP Host"
  name="smtpHost"
  value={settings.smtpHost}
  onChange={handleChange}
  placeholder="smtp.gmail.com"
/>

              <Input
  label="SMTP Port"
  name="smtpPort"
  value={settings.smtpPort}
  onChange={handleChange}
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
  name="smsProvider"
  value={settings.smsProvider}
  onChange={handleChange}
  placeholder="Twilio"
/>

              <Input
  label="Sender ID"
  name="senderId"
  value={settings.senderId}
  onChange={handleChange}
  placeholder="VMS"
/>

              <Input
  label="API Key"
  name="smsApiKey"
  value={settings.smsApiKey}
  onChange={handleChange}
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
  name="officeStartTime"
  value={settings.officeStartTime}
  onChange={handleChange}
  placeholder="09:00 AM"
/>

  <Input
  label="Closing Time"
  name="officeEndTime"
  value={settings.officeEndTime}
  onChange={handleChange}
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

          <div className="border-2 border-dashed border-slate-700 rounded-3xl p-8 flex flex-col items-center">

  <Upload
    size={50}
    className="text-slate-500 mb-4"
  />

  <input
    type="file"
    accept="image/*"
    onChange={handleLogoChange}
    className="text-white"
  />

  {logo && (
    <p className="text-green-400 mt-4">
      {logo.name}
    </p>
  )}
  <p className="text-yellow-400 mt-2">
  DB Logo: {settings.companyLogo || "No logo"}
</p>
{settings.companyLogo && (
<img
  src={`http://localhost:5000/uploads/logos/${settings.companyLogo}?t=${Date.now()}`}
  alt="Company Logo"
  style={{
    width: "150px",
    height: "150px",
    border: "2px solid red",
    objectFit: "contain",
    backgroundColor: "white",
  }}
  onLoad={() => console.log("Image Loaded")}
  onError={(e) => {
    console.log("Image Failed");
    console.log(e.target.src);
  }}
/>
)}
</div>

        </div>

      </div>

    </DashboardLayout>
  );
}

function Input({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-slate-300 mb-3">
        {label}
      </label>

      <input
        name={name}
        value={value}
        onChange={onChange}
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