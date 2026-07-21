import QRCode from "react-qr-code";
import {
  User,
  Building2,
  Calendar,
  Clock,
  ShieldCheck,
  Download,
  Printer,
  BadgeCheck,
} from "lucide-react";

function VisitorPass({ meeting }) {
  if (!meeting) return null;

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 p-6 text-center">

        <h2 className="text-2xl font-bold text-white">
          S3D Technologies
        </h2>

        <p className="text-blue-100 mt-2">
          Visitor Management System
        </p>

      </div>

      {/* Photo */}

      <div className="flex justify-center -mt-10">

        <div className="w-28 h-28 rounded-full bg-slate-200 border-4 border-white flex items-center justify-center shadow-xl">

          <User
            size={55}
            className="text-slate-500"
          />

        </div>

      </div>

      {/* Name */}

      <div className="text-center mt-5">

        <h2 className="text-2xl font-bold text-slate-800">
          {meeting.name}
        </h2>

        <p className="text-slate-500 mt-1">
          Visitor ID
        </p>

        <h3 className="text-cyan-600 font-bold">
          {meeting.meetingId}
        </h3>

      </div>

      {/* Details */}

      <div className="px-8 mt-8 space-y-5">

        <Info
          icon={Building2}
          label="Company"
          value={meeting.company}
        />

        <Info
          icon={User}
          label="Host"
          value={meeting.host}
        />

        <Info
          icon={Building2}
          label="Department"
          value={meeting.department}
        />

        <Info
          icon={Calendar}
          label="Meeting Date"
          value={meeting.date}
        />

        <Info
          icon={Clock}
          label="Meeting Time"
          value={meeting.time}
        />

      </div>

      {/* QR */}

      <div className="flex justify-center mt-10">

        <div className="bg-white border-4 border-slate-200 rounded-3xl p-5">

          <QRCode
            value={meeting.meetingUrl}
            size={180}
          />

        </div>

      </div>

      <p className="text-center text-slate-500 mt-4">
        Scan this QR at Reception
      </p>

      {/* Status */}

      <div className="mx-8 mt-8 bg-green-50 border border-green-200 rounded-2xl p-5">

        <div className="flex items-center gap-3">

          <BadgeCheck
            className="text-green-600"
          />

          <div>

            <h3 className="font-semibold text-green-700">
              Pass Active
            </h3>

            <p className="text-green-600 text-sm mt-1">
              Valid only for the scheduled meeting.
            </p>

          </div>

        </div>

      </div>

      {/* Security */}

      <div className="mx-8 mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-5">

        <div className="flex items-center gap-3">

          <ShieldCheck
            className="text-blue-600"
          />

          <p className="text-blue-700 text-sm">

            This visitor pass is digitally generated and secured.

          </p>

        </div>

      </div>

      {/* Buttons */}

      <div className="grid grid-cols-2 gap-4 p-8">

        <button
          className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          rounded-xl
          py-3
          flex
          justify-center
          items-center
          gap-2
          "
        >

          <Download size={18} />

          Download

        </button>

        <button
          onClick={() => window.print()}
          className="
          bg-slate-900
          hover:bg-black
          text-white
          rounded-xl
          py-3
          flex
          justify-center
          items-center
          gap-2
          "
        >

          <Printer size={18} />

          Print

        </button>

      </div>

    </div>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="flex items-center gap-4">

      <div className="w-11 h-11 rounded-xl bg-cyan-100 flex items-center justify-center">

        <Icon
          size={20}
          className="text-cyan-600"
        />

      </div>

      <div>

        <p className="text-slate-500 text-sm">
          {label}
        </p>

        <h3 className="font-semibold text-slate-800">
          {value || "--"}
        </h3>

      </div>

    </div>
  );
}

export default VisitorPass;