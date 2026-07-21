import QRCode from "react-qr-code";
import {
  QrCode,
  Download,
  ShieldCheck,
} from "lucide-react";

function QRCodeCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Visitor QR Pass
          </h2>

          <p className="text-slate-400 mt-1">
            Scan this QR at Reception
          </p>

        </div>

        <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center">

          <QrCode
            size={24}
            className="text-white"
          />

        </div>

      </div>

      {/* QR */}

      <div className="flex flex-col items-center py-10">

        <div className="bg-white rounded-3xl p-6 shadow-xl">

          <QRCode
            value="https://visitor.app/register/12345"
            size={220}
          />

        </div>

        <div className="mt-6 flex items-center gap-2 rounded-xl bg-green-500/10 border border-green-500/30 px-4 py-2">

          <ShieldCheck
            size={18}
            className="text-green-400"
          />

          <span className="text-green-400 font-medium">
            Secure QR Generated
          </span>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-slate-800 px-6 py-6">

        <button
          className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          hover:from-blue-700
          hover:to-cyan-600
          transition-all
          duration-300
          text-white
          font-semibold
          shadow-lg
          "
        >

          <Download size={20} />

          Download QR Code

        </button>

      </div>

    </div>
  );
}

export default QRCodeCard;