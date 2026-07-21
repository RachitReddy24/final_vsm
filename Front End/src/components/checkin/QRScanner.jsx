import { useState } from "react";
import {
  Scanner,
} from "@yudiel/react-qr-scanner";

import {
  QrCode,
  Camera,
  ScanLine,
  CheckCircle2,
  RefreshCcw,
} from "lucide-react";

function QRScanner({ onScan }) {
  const [lastScan, setLastScan] = useState("");
  const [scanned, setScanned] = useState(false);

  const handleScan = (result) => {
    if (!result || result.length === 0) return;

    const value = result[0].rawValue;

    if (value === lastScan) return;

    setLastScan(value);
    setScanned(true);

    onScan(value);
  };

  const resetScanner = () => {
    setScanned(false);
    setLastScan("");
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl overflow-hidden">

      {/* Header */}

      <div className="border-b border-slate-800 p-6 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">

            <QrCode
              size={30}
              className="text-cyan-400"
            />

          </div>

          <div>

            <h2 className="text-white text-xl font-bold">
              QR Code Scanner
            </h2>

            <p className="text-slate-400 text-sm">
              Scan Visitor QR Pass
            </p>

          </div>

        </div>

        <ScanLine
          className="text-cyan-400"
          size={28}
        />

      </div>

      {/* Camera */}

      <div className="p-6">

        <div className="overflow-hidden rounded-2xl border-2 border-cyan-500 bg-black">

          <Scanner
            onScan={handleScan}
            onError={(err) => console.log(err)}
            constraints={{
              facingMode: "environment",
            }}
            styles={{
              container: {
                width: "100%",
              },
            }}
          />

        </div>

        {/* Status */}

        {!scanned ? (

          <div className="mt-6 rounded-2xl bg-slate-800 border border-slate-700 p-5">

            <div className="flex items-center gap-3">

              <Camera
                size={22}
                className="text-cyan-400"
              />

              <div>

                <h3 className="text-white font-semibold">
                  Waiting for QR Code...
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Position the visitor QR inside the camera frame.
                </p>

              </div>

            </div>

          </div>

        ) : (

          <div className="mt-6 rounded-2xl bg-green-500/10 border border-green-500/30 p-5">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <CheckCircle2
                  className="text-green-400"
                  size={24}
                />

                <div>

                  <h3 className="text-green-400 font-semibold">
                    QR Code Detected
                  </h3>

                  <p className="text-slate-300 text-sm mt-1 break-all">
                    {lastScan}
                  </p>

                </div>

              </div>

              <button
                onClick={resetScanner}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white flex items-center gap-2 transition"
              >

                <RefreshCcw size={18} />

                Scan Again

              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default QRScanner;