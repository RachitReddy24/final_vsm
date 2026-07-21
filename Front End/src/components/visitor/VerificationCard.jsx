import { QrCode, ScanLine, ShieldCheck } from "lucide-react";

function VerificationCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center px-8 py-6 border-b border-slate-800">

        <div>

          <h2 className="text-2xl font-bold text-white">
            QR Verification
          </h2>

          <p className="text-slate-400 mt-1">
            Scan Visitor QR Code or Verify using OTP
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-xl bg-green-500/10 border border-green-500/30 px-4 py-2">

          <ShieldCheck
            size={18}
            className="text-green-400"
          />

          <span className="text-green-400 text-sm font-semibold">
            Scanner Ready
          </span>

        </div>

      </div>

      {/* Body */}

      <div className="grid xl:grid-cols-2 gap-10 p-8">

        {/* QR Scanner */}

        <div className="flex flex-col items-center">

          <div className="relative w-80 h-80 rounded-3xl border-4 border-dashed border-blue-500 bg-slate-800 flex items-center justify-center overflow-hidden">

            {/* Glow */}

            <div className="absolute inset-0 bg-blue-500/10"></div>

            {/* Animated Scan Line */}

            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 animate-pulse"></div>

            <QrCode
              size={120}
              className="text-blue-400"
            />

          </div>

          <p className="text-slate-400 mt-6 text-center">
            Position the visitor QR code inside the frame
          </p>

          <button
            className="
            mt-6
            flex items-center gap-3
            px-8 py-4
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            hover:scale-105
            transition-all
            text-white
            font-semibold
            shadow-xl
            "
          >

            <ScanLine size={20} />

            Start Scanner

          </button>

        </div>

        {/* OTP */}

        <div className="flex flex-col justify-center">

          <h3 className="text-white text-xl font-semibold mb-2">
            Verify using OTP
          </h3>

          <p className="text-slate-400 mb-6">
            If QR scanning is unavailable, enter the visitor OTP below.
          </p>

          <label className="text-slate-300 mb-3">
            Visitor OTP
          </label>

          <input
            placeholder="Enter 6 Digit OTP"
            className="
            w-full
            rounded-2xl
            bg-slate-800
            border
            border-slate-700
            px-5
            py-4
            text-white
            placeholder:text-slate-500
            focus:outline-none
            focus:border-blue-500
            "
          />

          <button
            className="
            mt-6
            rounded-2xl
            bg-gradient-to-r
            from-green-600
            to-emerald-500
            hover:scale-105
            transition-all
            text-white
            py-4
            font-semibold
            shadow-xl
            "
          >
            Verify OTP
          </button>

          {/* Info Box */}

          <div className="mt-8 rounded-2xl bg-slate-800 border border-slate-700 p-5">

            <h4 className="text-white font-semibold">
              Verification Instructions
            </h4>

            <ul className="mt-3 text-sm text-slate-400 space-y-2 list-disc list-inside">

              <li>Scan the visitor QR code.</li>

              <li>Or verify using the OTP sent to the visitor.</li>

              <li>Approve only after confirming visitor details.</li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default VerificationCard;