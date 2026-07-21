import QRCode from "react-qr-code";
import {
  QrCode,
  Download,
} from "lucide-react";

function MeetingQRCode({ meetingUrl }) {
  const downloadQR = () => {
    alert("Download QR functionality will be added with backend.");
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Meeting QR Code
          </h2>

          <p className="text-slate-400 mt-2">
            Visitor will use this QR for reception verification.
          </p>

        </div>

        <QrCode
          size={34}
          className="text-cyan-400"
        />

      </div>

      {/* QR */}

      <div className="flex justify-center">

        <div className="bg-white rounded-3xl p-6 shadow-xl">

          <QRCode
            value={meetingUrl || "https://visitor-management.local"}
            size={220}
          />

        </div>

      </div>

      {/* URL */}

      <div className="mt-8">

        <label className="block text-slate-300 mb-3">
          Meeting URL
        </label>

        <input
          value={meetingUrl || ""}
          readOnly
          className="
          w-full
          rounded-2xl
          bg-slate-800
          border
          border-slate-700
          px-5
          py-4
          text-white
          outline-none
          "
        />

      </div>

      {/* Button */}

      <button
        onClick={downloadQR}
        className="
        w-full
        mt-8
        rounded-2xl
        bg-gradient-to-r
        from-cyan-600
        to-blue-600
        hover:scale-105
        transition-all
        py-4
        text-white
        font-semibold
        flex
        justify-center
        items-center
        gap-3
        "
      >

        <Download size={20} />

        Download QR

      </button>

    </div>
  );
}

export default MeetingQRCode;