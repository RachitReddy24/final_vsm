import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  Building2,
  Users,
  CalendarDays,
  Clock3,
  Briefcase,
  Car,
  FileText,
} from "lucide-react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    company: "",
    gender: "",
    visitorType: "",
    idType: "",
    idNumber: "",
    host: "",
    department: "",
    purpose: "",
    visitDate: "",
    visitTime: "",
    duration: "",
    vehicle: "",
    laptop: "No",
    remarks: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="space-y-8">

      {/* Personal Information */}

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold text-white mb-8">
          Personal Information
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">

          <Input icon={User} label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter Full Name" />

          <Input icon={Phone} label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter Mobile Number" />

          <Input icon={Mail} label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" />

          <Input icon={Building2} label="Company Name" name="company" value={formData.company} onChange={handleChange} placeholder="Company" />

          <Input icon={User} label="Gender" name="gender" value={formData.gender} onChange={handleChange} placeholder="Male / Female" />

          <Input icon={Users} label="Visitor Type" name="visitorType" value={formData.visitorType} onChange={handleChange} placeholder="Scheduled / Walk-In" />

          <Input icon={FileText} label="Government ID" name="idType" value={formData.idType} onChange={handleChange} placeholder="Aadhaar / PAN / Passport" />

          <Input icon={FileText} label="ID Number" name="idNumber" value={formData.idNumber} onChange={handleChange} placeholder="Enter ID Number" />

        </div>

      </div>

      {/* Meeting Information */}

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold text-white mb-8">
          Meeting Information
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">

          <Input icon={Users} label="Host Name" name="host" value={formData.host} onChange={handleChange} placeholder="Meeting Host" />

          <Input icon={Building2} label="Department" name="department" value={formData.department} onChange={handleChange} placeholder="Department" />

          <Input icon={Briefcase} label="Purpose" name="purpose" value={formData.purpose} onChange={handleChange} placeholder="Purpose of Visit" />

          <Input icon={CalendarDays} label="Visit Date" name="visitDate" type="date" value={formData.visitDate} onChange={handleChange} />

          <Input icon={Clock3} label="Visit Time" name="visitTime" type="time" value={formData.visitTime} onChange={handleChange} />

          <Input icon={Clock3} label="Expected Duration" name="duration" value={formData.duration} onChange={handleChange} placeholder="2 Hours" />

        </div>

      </div>

      {/* Additional Information */}

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold text-white mb-8">
          Additional Information
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">

          <Input icon={Car} label="Vehicle Number" name="vehicle" value={formData.vehicle} onChange={handleChange} placeholder="TS09AB1234" />

          <Input icon={Briefcase} label="Laptop Carrying" name="laptop" value={formData.laptop} onChange={handleChange} placeholder="Yes / No" />

          <Input icon={Phone} label="Emergency Contact" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} placeholder="Emergency Contact" />

          <Input icon={FileText} label="Remarks" name="remarks" value={formData.remarks} onChange={handleChange} placeholder="Additional Remarks" />

        </div>

      </div>

    </div>
  );
}

function Input({
  icon: Icon,
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>

      <label className="block text-slate-300 mb-2">
        {label}
      </label>

      <div className="relative">

        <Icon
          size={18}
          className="absolute left-4 top-4 text-cyan-400"
        />

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full
            pl-12
            pr-4
            py-3
            rounded-xl
            bg-slate-800
            border
            border-slate-700
            text-white
            placeholder:text-slate-500
            focus:border-cyan-500
            outline-none
          "
        />

      </div>

    </div>
  );
}

export default RegistrationForm;