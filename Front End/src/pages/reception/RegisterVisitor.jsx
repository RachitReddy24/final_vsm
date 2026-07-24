import { useState } from "react";

import DashboardLayout from "../../layouts/roles/DashboardLayout";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import TextArea from "../../components/ui/TextArea";
import Button from "../../components/ui/Button";

import {
  User,
  Building2,
  Calendar,
  Clock,
  BadgeCheck,
  Mail,
  Shield,
} from "lucide-react";

function RegisterVisitor() {
  const meeting = {
    meetingId: "MTG-1001",
    title: "Vendor Discussion",
    host: "John Smith",
    department: "IT Department",
    date: "24 Jul 2026",
    time: "10:30 AM",
    purpose: "Product Demonstration",
  };

  const [visitor, setVisitor] = useState({
    visitorName: "",
    mobile: "",
    email: "",
    company: "",
    designation: "",
    idType: "",
    idNumber: "",
    visitors: 1,
    remarks: "",
  });

  const handleChange = (field, value) => {
    setVisitor((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Header */}

        <div className="rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-8 text-white">

          <div className="flex justify-between items-center">

            <div>

              <h1 className="text-4xl font-bold">
                Register Visitor
              </h1>

              <p className="mt-3 text-cyan-100">
                Register a visitor for the scheduled meeting.
              </p>

              <div className="flex gap-8 mt-6 text-sm">

                <span className="flex items-center gap-2">
                  <BadgeCheck size={18} />
                  {meeting.meetingId}
                </span>

                <span className="flex items-center gap-2">
                  <Calendar size={18} />
                  {meeting.date}
                </span>

                <span className="flex items-center gap-2">
                  <Clock size={18} />
                  {meeting.time}
                </span>

              </div>

            </div>

            <div className="w-24 h-24 rounded-3xl bg-white/10 flex items-center justify-center">

              <User size={50} />

            </div>

          </div>

        </div>

        {/* Meeting + Visitor */}

        <div className="grid xl:grid-cols-2 gap-8">          {/* Meeting Summary */}

          <Card className="bg-slate-900 border border-slate-800 text-white">

            <div className="flex items-center gap-3 mb-6">

              <Building2 className="text-cyan-400" size={24} />

              <h2 className="text-2xl font-semibold">
                Meeting Summary
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <Input
                label="Meeting ID"
                value={meeting.meetingId}
                readOnly
              />

              <Input
                label="Meeting Title"
                value={meeting.title}
                readOnly
              />

              <Input
                label="Host"
                value={meeting.host}
                readOnly
              />

              <Input
                label="Department"
                value={meeting.department}
                readOnly
              />

              <Input
                label="Meeting Date"
                value={meeting.date}
                readOnly
              />

              <Input
                label="Meeting Time"
                value={meeting.time}
                readOnly
              />

              <Input
                label="Purpose"
                value={meeting.purpose}
                readOnly
              />

            </div>

          </Card>

          {/* Visitor Details */}

          <Card className="bg-slate-900 border border-slate-800 text-white">

            <div className="flex items-center gap-3 mb-6">

              <User className="text-cyan-400" size={24} />

              <h2 className="text-2xl font-semibold">
                Visitor Details
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <Input
                label="Visitor Name"
                placeholder="Enter Visitor Name"
                value={visitor.visitorName}
                onChange={(e) =>
                  handleChange("visitorName", e.target.value)
                }
              />

              <Input
                label="Mobile Number"
                placeholder="Enter Mobile Number"
                value={visitor.mobile}
                onChange={(e) =>
                  handleChange("mobile", e.target.value)
                }
              />

              <Input
                type="email"
                label="Email Address"
                placeholder="Enter Email Address"
                value={visitor.email}
                onChange={(e) =>
                  handleChange("email", e.target.value)
                }
              />

              <Input
                label="Company Name"
                placeholder="Enter Company Name"
                value={visitor.company}
                onChange={(e) =>
                  handleChange("company", e.target.value)
                }
              />

              <Input
                label="Designation"
                placeholder="Enter Designation"
                value={visitor.designation}
                onChange={(e) =>
                  handleChange("designation", e.target.value)
                }
              />

            </div>

          </Card>

        </div>

        {/* Identity Verification */}

        <div className="grid xl:grid-cols-2 gap-8">          {/* Identity Verification */}

          <Card className="bg-slate-900 border border-slate-800 text-white">

            <div className="flex items-center gap-3 mb-6">

              <Shield className="text-cyan-400" size={24} />

              <h2 className="text-2xl font-semibold">
                Identity Verification
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <Select
                label="ID Type"
                value={visitor.idType}
                onChange={(e) =>
                  handleChange("idType", e.target.value)
                }
                options={[
                  "Aadhaar Card",
                  "PAN Card",
                  "Passport",
                  "Driving License",
                  "Employee ID",
                ]}
              />

              <Input
                label="ID Number"
                placeholder="Enter ID Number"
                value={visitor.idNumber}
                onChange={(e) =>
                  handleChange("idNumber", e.target.value)
                }
              />

            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">

              <div>

                <label className="block text-sm font-medium mb-2">
                  Upload ID Proof
                </label>

                <input
                  type="file"
                  accept="image/*,.pdf"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
                />

              </div>

              <div>

                <label className="block text-sm font-medium mb-2">
                  Visitor Photo
                </label>

                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
                />

              </div>

            </div>

          </Card>

          {/* Additional Information */}

          <Card className="bg-slate-900 border border-slate-800 text-white">

            <div className="flex items-center gap-3 mb-6">

              <Mail className="text-cyan-400" size={24} />

              <h2 className="text-2xl font-semibold">
                Additional Information
              </h2>

            </div>

            <Input
              type="number"
              label="Number of Visitors"
              placeholder="Enter Number of Visitors"
              value={visitor.visitors}
              onChange={(e) =>
                handleChange("visitors", e.target.value)
              }
            />

            <div className="mt-6">

              <TextArea
                label="Remarks"
                placeholder="Enter additional instructions or remarks..."
                value={visitor.remarks}
                onChange={(e) =>
                  handleChange("remarks", e.target.value)
                }
              />

            </div>

          </Card>

        </div>        {/* Quick Actions */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

          <ActionCard
            icon={BadgeCheck}
            title="Generate Visitor Code"
            description="Create a unique Visitor Code."
            onClick={() => alert("Visitor Code Generated")}
          />

          <ActionCard
            // eslint-disable-next-line no-undef
            icon={QrCode}
            title="Generate QR Code"
            description="Generate QR for Check-In."
            onClick={() => alert("QR Code Generated")}
          />

          <ActionCard
            icon={User}
            title="Preview Visitor Pass"
            description="Preview Visitor Pass."
            onClick={() => alert("Preview Visitor Pass")}
          />

          <ActionCard
            icon={Mail}
            title="Send Visitor Email"
            description="Send Visitor Pass & QR."
            onClick={() => alert("Visitor Email Sent")}
          />

        </div>

        {/* Registration Summary */}

        <Card className="bg-slate-900 border border-slate-800 text-white">

          <h2 className="text-2xl font-semibold mb-6">
            Registration Summary
          </h2>

          <div className="grid md:grid-cols-3 gap-5">

            <SummaryCard
              title="Meeting"
              value={meeting.title}
            />

            <SummaryCard
              title="Host"
              value={meeting.host}
            />

            <SummaryCard
              title="Visitor"
              value={visitor.visitorName || "--"}
            />

            <SummaryCard
              title="Company"
              value={visitor.company || "--"}
            />

            <SummaryCard
              title="Visitors"
              value={visitor.visitors}
            />

            <SummaryCard
              title="Email"
              value={visitor.email || "--"}
            />

          </div>

        </Card>

        {/* Footer */}

        <div className="flex justify-end gap-4">

          <Button
            className="bg-slate-600 hover:bg-slate-700"
            onClick={() => window.history.back()}
          >
            Cancel
          </Button>

          <Button
            onClick={() => {
              console.log(visitor);
              alert("Visitor Registered Successfully");
            }}
          >
            Register Visitor
          </Button>

        </div>

      </div>

    </DashboardLayout>

  );
}

/* ============================
   Action Card
============================ */

function ActionCard({
  icon: Icon,
  title,
  description,
  onClick,
}) {
  return (
    <Card
      className="bg-slate-900 border border-slate-800 text-white cursor-pointer hover:border-cyan-500 transition-all"
    >
      <div
        onClick={onClick}
        className="flex flex-col items-center text-center"
      >

        <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-5">

          <Icon
            size={30}
            className="text-cyan-400"
          />

        </div>

        <h3 className="font-semibold text-lg">
          {title}
        </h3>

        <p className="text-slate-400 text-sm mt-2">
          {description}
        </p>

      </div>
    </Card>
  );
}

/* ============================
   Summary Card
============================ */

function SummaryCard({
  title,
  value,
}) {
  return (
    <div className="rounded-2xl bg-slate-800 border border-slate-700 p-5">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h3 className="text-white text-lg font-semibold mt-2">
        {value}
      </h3>

    </div>
  );
}

export default RegisterVisitor;