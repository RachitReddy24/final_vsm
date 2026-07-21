import { useState } from "react";

import DashboardLayout from "../../layouts/roles/DashboardLayout";
// eslint-disable-next-line no-unused-vars
import ShareURLModal from "../../components/reception/ShareURLModal";

import MeetingPreviewCard from "../../components/meeting/MeetingPreviewCard";
import MeetingQRCode from "../../components/meeting/MeetingQRCode";

import { generateMeeting } from "../../utils/meetingUtils";

import {
  CalendarPlus,
  Link2,
  QrCode,
  Mail,
  User,
  Building2,
  Calendar,
  Clock,
  Briefcase,
} from "lucide-react";

function ScheduleMeeting() {

  const [meeting, setMeeting] = useState(null);

  const [visitor, setVisitor] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    host: "",
    department: "",
    date: "",
    time: "",
    purpose: "",
    notes: "",
  });
  
  const handleChange = (field, value) => {
    setVisitor((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleGenerateMeeting = () => {
    const data = generateMeeting();

    setMeeting({
      ...data,
      ...visitor,
    });
  };

  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Header */}

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Schedule Meeting
            </h1>

            <p className="text-slate-400 mt-2">
              Create a planned visitor meeting and send invitations.
            </p>

          </div>

          <button
            onClick={handleGenerateMeeting}
            className="
            px-6
            py-3
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            text-white
            font-semibold
            hover:scale-105
            transition
            "
          >

            <CalendarPlus
              size={20}
              className="inline mr-2"
            />

            Schedule Meeting

          </button>

        </div>

        {/* Forms */}

        <div className="grid xl:grid-cols-2 gap-8">

          {/* Visitor Information */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white mb-6">
              Visitor Information
            </h2>

            <div className="grid gap-5">

              <Input
                icon={User}
                label="Visitor Name"
                value={visitor.name}
                onChange={(e) =>
                  handleChange("name", e.target.value)
                }
              />

              <Input
                icon={User}
                label="Mobile Number"
                value={visitor.mobile}
                onChange={(e) =>
                  handleChange("mobile", e.target.value)
                }
              />

              <Input
                icon={Mail}
                label="Email"
                value={visitor.email}
                onChange={(e) =>
                  handleChange("email", e.target.value)
                }
              />

              <Input
                icon={Building2}
                label="Company"
                value={visitor.company}
                onChange={(e) =>
                  handleChange("company", e.target.value)
                }
              />

            </div>

          </div>

          {/* Meeting Information */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white mb-6">
              Meeting Information
            </h2>

            <div className="grid gap-5">

              <Input
                icon={User}
                label="Host"
                value={visitor.host}
                onChange={(e) =>
                  handleChange("host", e.target.value)
                }
              />

              <Input
                icon={Building2}
                label="Department"
                value={visitor.department}
                onChange={(e) =>
                  handleChange("department", e.target.value)
                }
              />

              <Input
                icon={Calendar}
                type="date"
                label="Meeting Date"
                value={visitor.date}
                onChange={(e) =>
                  handleChange("date", e.target.value)
                }
              />

              <Input
                icon={Clock}
                type="time"
                label="Meeting Time"
                value={visitor.time}
                onChange={(e) =>
                  handleChange("time", e.target.value)
                }
              />

              <Input
                icon={Briefcase}
                label="Purpose"
                value={visitor.purpose}
                onChange={(e) =>
                  handleChange("purpose", e.target.value)
                }
              />

            </div>

          </div>

        </div>

        {/* Meeting Notes */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold text-white mb-5">
            Meeting Notes
          </h2>

          <textarea
            rows={5}
            value={visitor.notes}
            onChange={(e) =>
              handleChange("notes", e.target.value)
            }
            placeholder="Enter meeting instructions..."
            className="
            w-full
            bg-slate-800
            border
            border-slate-700
            rounded-2xl
            p-5
            text-white
            outline-none
            focus:border-cyan-500
            "
          />

        </div>
                {/* Actions */}

        <div className="grid lg:grid-cols-4 gap-6">

          <ActionCard
            icon={Link2}
            title="Generate Secure URL"
            onClick={handleGenerateMeeting}
          />

          <ActionCard
            icon={QrCode}
            title="Generate QR"
            onClick={handleGenerateMeeting}
          />

          <ActionCard
            icon={Mail}
            title="Preview Host Email"
            onClick={() => alert("Host Email Preview (Next Step)")}
          />

          <ActionCard
            icon={Mail}
            title="Preview Visitor Email"
            onClick={() => alert("Visitor Email Preview (Next Step)")}
          />

        </div>

        {/* Generated Meeting */}

        {meeting && (

          <div className="grid xl:grid-cols-2 gap-8">

            <MeetingPreviewCard
              meetingId={meeting.meetingId}
              meetingUrl={meeting.meetingUrl}
            />

            <MeetingQRCode
              meetingUrl={meeting.meetingUrl}
            />

          </div>

        )}

      </div>

    </DashboardLayout>
  );
}

/* ========================================================= */

function Input({
  label,
  icon: Icon,
  type = "text",
  value,
  onChange,
}) {

  return (

    <div>

      <label className="block text-slate-300 mb-3">

        {label}

      </label>

      <div className="relative">

        <Icon
          size={18}
          className="absolute left-4 top-4 text-cyan-400"
        />

        <input
          type={type}
          value={value}
          onChange={onChange}
          className="
          w-full
          pl-12
          pr-5
          py-4
          rounded-2xl
          bg-slate-800
          border
          border-slate-700
          text-white
          outline-none
          focus:border-cyan-500
          "
        />

      </div>

    </div>

  );

}

/* ========================================================= */

function ActionCard({
  icon: Icon,
  title,
  onClick,
}) {

  return (

    <button
      onClick={onClick}
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-3xl
      p-8
      hover:border-cyan-500
      hover:scale-105
      transition-all
      duration-300
      text-left
      "
    >

      <Icon
        size={36}
        className="text-cyan-400"
      />

      <h3 className="text-white font-semibold mt-5">

        {title}

      </h3>

    </button>

  );

}

export default ScheduleMeeting;