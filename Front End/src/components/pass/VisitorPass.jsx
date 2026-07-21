import QRCode from "react-qr-code";
import {
  User,
  Building2,
  Calendar,
  Clock,
  Phone,
  Briefcase,
  BadgeCheck,
  Users,
} from "lucide-react";

function VisitorPass() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold">
              Visitor Pass
            </h1>

            <p className="text-blue-100">
              Visitor Management System
            </p>
          </div>

          <QRCode
            value="VISITOR-2026-001"
            size={120}
            bgColor="white"
          />
        </div>

        {/* Body */}
        <div className="grid md:grid-cols-3 gap-8 p-8">

          {/* Photo */}
          <div className="flex flex-col items-center">

            <div className="w-44 h-52 rounded-xl bg-slate-200 flex items-center justify-center">

              <User size={80} />

            </div>

            <span className="mt-4 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
              Approved
            </span>

          </div>

          {/* Details */}
          <div className="md:col-span-2">

            <div className="mb-8">

              <h2 className="text-3xl font-bold">
                Rahul Sharma
              </h2>

              <p className="text-slate-500">
                Visitor ID : VIS-001
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <Info
                icon={Building2}
                title="Company"
                value="ABC Pvt Ltd"
              />

              <Info
                icon={Phone}
                title="Mobile"
                value="9876543210"
              />

              <Info
                icon={Users}
                title="Host"
                value="John Doe"
              />

              <Info
                icon={Building2}
                title="Department"
                value="IT Department"
              />

              <Info
                icon={Briefcase}
                title="Purpose"
                value="Business Meeting"
              />

              <Info
                icon={Calendar}
                title="Visit Date"
                value="08 Jul 2026"
              />

              <Info
                icon={Clock}
                title="Visit Time"
                value="10:30 AM"
              />

              <Info
                icon={BadgeCheck}
                title="Validity"
                value="One Day"
              />

            </div>

          </div>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex justify-center gap-5 mt-8">

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
          Download PDF
        </button>

        <button
          onClick={handlePrint}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
        >
          Print Pass
        </button>

      </div>

    </div>
  );
}

function Info({ icon: Icon, title, value }) {
  return (
    <div className="flex gap-3">

      <Icon
        className="text-blue-600 mt-1"
        size={20}
      />

      <div>

        <p className="text-sm text-slate-500">
          {title}
        </p>

        <p className="font-semibold">
          {value}
        </p>

      </div>

    </div>
  );
}

export default VisitorPass;