import {
  QrCode,
  User,
  Printer,
  Download,
} from "lucide-react";

function VisitorBadgeCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Visitor Badge
          </h2>

          <p className="text-slate-400 mt-2">
            Badge generated after successful verification.
          </p>

        </div>

      </div>

      <div className="grid xl:grid-cols-2 gap-8">

        {/* Badge */}

        <div className="rounded-3xl bg-slate-800 border border-slate-700 p-8">

          <div className="flex flex-col items-center">

            <div className="w-24 h-24 rounded-full bg-cyan-600 flex items-center justify-center">

              <User
                size={50}
                className="text-white"
              />

            </div>

            <h3 className="text-white text-2xl font-bold mt-5">
              Rahul Sharma
            </h3>

            <p className="text-slate-400">
              Visitor ID : VMS-2026-001
            </p>

            <div className="my-6">

              <QrCode
                size={120}
                className="text-white"
              />

            </div>

            <span className="px-5 py-2 rounded-full bg-green-500/20 text-green-400">
              Approved
            </span>

          </div>

        </div>

        {/* Actions */}

        <div className="flex flex-col justify-center gap-5">

          <button
            className="
            flex
            items-center
            justify-center
            gap-3
            py-4
            rounded-2xl
            bg-blue-600
            hover:bg-blue-700
            text-white
            "
          >

            <Printer size={20} />

            Print Badge

          </button>

          <button
            className="
            flex
            items-center
            justify-center
            gap-3
            py-4
            rounded-2xl
            bg-cyan-600
            hover:bg-cyan-700
            text-white
            "
          >

            <Download size={20} />

            Download Badge

          </button>

        </div>

      </div>

    </div>
  );
}

export default VisitorBadgeCard;