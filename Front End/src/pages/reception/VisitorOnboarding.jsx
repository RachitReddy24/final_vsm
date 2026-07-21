import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ReceptionLayout from "../../layouts/roles/ReceptionLayout";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";

import { useMeeting } from "../../context/MeetingContext";

import {
  UserPlus,
  Camera,
  QrCode,
  Send,
  CheckCircle2,
} from "lucide-react";

function VisitorOnboarding() {

  const navigate = useNavigate();

  const { addMeeting } = useMeeting();

  const [formData, setFormData] = useState({
    visitor: "",
    mobile: "",
    email: "",
    company: "",
    governmentId: "",
    idNumber: "",
    host: "",
    department: "",
    purpose: "",
    date: "",
    time: "",
    duration: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGenerateQR = () => {
    alert(
      "QR Code generation will be connected with backend."
    );
  };

  const handleShare = () => {
    alert(
      "Visitor Registration URL shared successfully."
    );
  };

  const handleSubmit = () => {

    if (
      !formData.visitor ||
      !formData.mobile ||
      !formData.host
    ) {
      alert("Please fill all required fields.");
      return;
    }

    addMeeting({
      visitor: formData.visitor,
      company: formData.company,
      email: formData.email,
      mobile: formData.mobile,
      host: formData.host,
      department: formData.department,
      purpose: formData.purpose,
      date: formData.date,
      time: formData.time,
    });

    alert(
      "Visitor Registered Successfully.\n\nWaiting for Admin Approval."
    );

    navigate("/admin/pending-approvals");
  };

  return (
    <ReceptionLayout>

      <div className="space-y-8">

        {/* Header */}

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Visitor Onboarding
            </h1>

            <p className="text-slate-400 mt-2">
              Register new visitors and generate a digital visitor pass.
            </p>

          </div>

          <div className="hidden lg:flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-400 px-5 py-3 rounded-2xl">

            <CheckCircle2 size={18} />

            Reception Module

          </div>

        </div>

        <div className="grid xl:grid-cols-2 gap-8">

          <Card title="Visitor Information">

            <div className="grid gap-5">

              <Input
                label="Visitor Name"
                name="visitor"
                value={formData.visitor}
                onChange={handleChange}
                placeholder="Enter visitor name"
              />

              <Input
                label="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
              />

              <Input
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="visitor@email.com"
              />

              <Input
                label="Company / Organization"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="ABC Pvt Ltd"
              />              <Input
                label="Government ID"
                name="governmentId"
                value={formData.governmentId}
                onChange={handleChange}
                placeholder="Aadhaar / PAN / Passport"
              />

              <Input
                label="ID Number"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                placeholder="Enter document number"
              />

            </div>

          </Card>

          {/* Meeting Information */}

          <Card title="Meeting Information">

            <div className="grid gap-5">

              <Input
                label="Host Name"
                name="host"
                value={formData.host}
                onChange={handleChange}
                placeholder="Meeting Person"
              />

              <Input
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Select Department"
              />

              <Input
                label="Purpose of Visit"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                placeholder="Business Meeting"
              />

              <Input
                type="date"
                label="Visit Date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />

              <Input
                type="time"
                label="Visit Time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />

              <Input
                label="Expected Duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="30 Minutes"
              />

            </div>

          </Card>

        </div>

        {/* Camera */}

        <Card title="Visitor Photo">

          <div className="rounded-3xl border-2 border-dashed border-slate-700 bg-slate-800 h-72 flex flex-col items-center justify-center">

            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl">

              <Camera
                size={34}
                className="text-white"
              />

            </div>

            <h3 className="text-white text-xl font-semibold mt-6">
              Camera Preview
            </h3>

            <p className="text-slate-400 mt-2">
              Webcam integration will be connected later.
            </p>

            <button
              type="button"
              className="mt-6 px-6 py-3 rounded-2xl bg-slate-700 hover:bg-slate-600 text-white transition"
            >
              Upload Photo
            </button>

          </div>

        </Card>        {/* Action Buttons */}

        <Card title="Registration Actions">

          <div className="grid lg:grid-cols-3 gap-6">

            <button
              type="button"
              onClick={handleGenerateQR}
              className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 font-semibold shadow-lg hover:scale-105 transition"
            >
              <QrCode size={22} />
              Generate QR
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-600 text-white py-4 font-semibold shadow-lg hover:scale-105 transition"
            >
              <Send size={22} />
              Share Registration URL
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 font-semibold shadow-lg hover:scale-105 transition"
            >
              <UserPlus size={22} />
              Register Visitor
            </button>

          </div>

        </Card>

        {/* Information */}

        <Card title="Registration Workflow">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-slate-800 rounded-2xl p-6 text-center">

              <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                1
              </div>

              <h3 className="mt-4 text-white font-semibold">
                Reception
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                Register visitor details.
              </p>

            </div>

            <div className="bg-slate-800 rounded-2xl p-6 text-center">

              <div className="w-12 h-12 mx-auto rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                2
              </div>

              <h3 className="mt-4 text-white font-semibold">
                Pending Approval
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                Waiting for Admin approval.
              </p>

            </div>

            <div className="bg-slate-800 rounded-2xl p-6 text-center">

              <div className="w-12 h-12 mx-auto rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                3
              </div>

              <h3 className="mt-4 text-white font-semibold">
                Approved
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                Reception can check-in visitor.
              </p>

            </div>

            <div className="bg-slate-800 rounded-2xl p-6 text-center">

              <div className="w-12 h-12 mx-auto rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                4
              </div>

              <h3 className="mt-4 text-white font-semibold">
                Check-Out
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                Visitor exits and meeting closes.
              </p>

            </div>

          </div>

        </Card>        {/* Registration Summary */}

        <Card title="Live Registration Summary">

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">

              <p className="text-slate-400 text-sm">
                Visitor
              </p>

              <h3 className="text-xl font-semibold text-white mt-2">
                {formData.visitor || "--"}
              </h3>

            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">

              <p className="text-slate-400 text-sm">
                Host
              </p>

              <h3 className="text-xl font-semibold text-white mt-2">
                {formData.host || "--"}
              </h3>

            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">

              <p className="text-slate-400 text-sm">
                Department
              </p>

              <h3 className="text-xl font-semibold text-white mt-2">
                {formData.department || "--"}
              </h3>

            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">

              <p className="text-slate-400 text-sm">
                Meeting Time
              </p>

              <h3 className="text-xl font-semibold text-white mt-2">
                {formData.time || "--"}
              </h3>

            </div>

          </div>

        </Card>

        {/* Notes */}

        <Card title="Instructions">

          <div className="space-y-4 text-slate-300">

            <div className="flex gap-3">

              <div className="w-3 h-3 rounded-full bg-green-500 mt-2"></div>

              <p>
                Every visitor registration is first submitted for
                <span className="text-green-400 font-semibold">
                  {" "}Admin Approval
                </span>.
              </p>

            </div>

            <div className="flex gap-3">

              <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2"></div>

              <p>
                Reception cannot check-in a visitor until the meeting
                request has been approved.
              </p>

            </div>

            <div className="flex gap-3">

              <div className="w-3 h-3 rounded-full bg-blue-500 mt-2"></div>

              <p>
                Once approved, a QR Pass and Email notification will be
                generated automatically by the backend.
              </p>

            </div>

          </div>

        </Card>

      </div>    </ReceptionLayout>
  );
}

export default VisitorOnboarding;