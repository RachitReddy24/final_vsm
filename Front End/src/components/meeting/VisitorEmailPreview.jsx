import QRCode from "react-qr-code";

import {
  User,
  Building2,
  Calendar,
  Clock,
  MapPin,
  ShieldCheck,
  Download,
  Printer,
  QrCode,
} from "lucide-react";

function VisitorEmailPreview({ meeting }) {
  if (!meeting) return null;

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

      {/* Header */}

      <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-500 px-10 py-8">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-3xl font-bold text-white">
              S3D Technologies
            </h1>

            <p className="text-green-100 mt-2">
              Visitor Management System
            </p>

          </div>

          <QrCode
            size={55}
            className="text-white"
          />

        </div>

      </div>

      {/* Body */}

      <div className="p-10">

        <h2 className="text-2xl font-bold text-slate-800">

          Visitor Invitation

        </h2>

        <p className="mt-4 text-slate-600 leading-7">

          Dear <strong>{meeting.name || "Visitor"}</strong>,

          <br /><br />

          Your meeting request has been approved.

          Please carry the QR Code below while visiting our office.

        </p>

        {/* Information */}

        <div className="grid lg:grid-cols-2 gap-6 mt-10">

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

          <Info
            icon={Building2}
            label="Company"
            value={meeting.company}
          />

          <Info
            icon={MapPin}
            label="Office"
            value="S3D Technologies Pvt Ltd"
          />

        </div>

        {/* QR */}

        <div className="mt-12 flex flex-col items-center">

          <div className="bg-white border-4 border-slate-200 rounded-3xl p-6 shadow-lg">

            <QRCode
              value={meeting.meetingUrl}
              size={220}
            />

          </div>

          <p className="text-slate-500 mt-5">

            Scan this QR at Reception

          </p>

        </div>

        {/* Security */}

        <div className="mt-10 rounded-2xl bg-green-50 border border-green-200 p-6 flex gap-4">

          <ShieldCheck
            className="text-green-600"
            size={28}
          />

          <div>

            <h3 className="font-semibold text-green-700">

              Secure Entry

            </h3>

            <p className="text-green-600 mt-2">

              This QR Code is unique and can only be used for the scheduled meeting.

            </p>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-5 mt-10">

          <button
            className="
            flex-1
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-4
            rounded-xl
            flex
            justify-center
            items-center
            gap-2
            "
          >

            <Download size={18} />

            Download Pass

          </button>

          <button
            onClick={() => window.print()}
            className="
            flex-1
            bg-slate-800
            hover:bg-slate-900
            text-white
            py-4
            rounded-xl
            flex
            justify-center
            items-center
            gap-2
            "
          >

            <Printer size={18} />

            Print Pass

          </button>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t bg-slate-100 px-10 py-6">

        <p className="text-sm text-slate-500">

          © {new Date().getFullYear()} S3D Technologies Pvt. Ltd.

          <br />

          Visitor Management System

        </p>

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
    <div className="flex gap-4 border rounded-xl p-5">

      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">

        <Icon
          size={22}
          className="text-green-600"
        />

      </div>

      <div>

        <p className="text-sm text-slate-500">
          {label}
        </p>

        <h3 className="font-semibold text-slate-800 mt-1">
          {value || "--"}
        </h3>

      </div>

    </div>
  );
}

export default VisitorEmailPreview;