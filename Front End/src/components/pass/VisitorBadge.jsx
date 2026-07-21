import QRCode from "react-qr-code";
import { User } from "lucide-react";

function VisitorBadge() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border overflow-hidden">

      <div className="bg-blue-600 text-white text-center py-5">

        <h1 className="text-2xl font-bold">
          VISITOR PASS
        </h1>

      </div>

      <div className="p-8">

        <div className="flex justify-center mb-6">

          <div className="w-28 h-32 rounded-xl bg-slate-200 flex items-center justify-center">

            <User size={60} />

          </div>

        </div>

        <div className="space-y-4">

          <Info label="Name" value="Rahul Sharma" />

          <Info label="Company" value="ABC Pvt Ltd" />

          <Info label="Host" value="John Doe" />

          <Info label="Department" value="IT" />

          <Info label="Purpose" value="Business Meeting" />

          <Info label="Date" value="08 Jul 2026" />

          <Info label="Time" value="10:30 AM" />

          <Info label="Visitor ID" value="VMS-458921" />

        </div>

        <div className="flex justify-center my-8">

          <QRCode
            value="VMS-458921"
            size={150}
          />

        </div>

        <div className="grid grid-cols-2 gap-4">

          <button
            onClick={() => window.print()}
            className="bg-blue-600 text-white rounded-lg py-3"
          >
            Print
          </button>

          <button
            className="bg-green-600 text-white rounded-lg py-3"
          >
            Download PDF
          </button>

        </div>

      </div>

    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="font-medium text-gray-500">
        {label}
      </span>

      <span className="font-semibold">
        {value}
      </span>
    </div>
  );
}

export default VisitorBadge;