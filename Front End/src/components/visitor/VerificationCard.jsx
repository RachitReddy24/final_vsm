import {
  QrCode,
  ScanLine,
  ShieldCheck,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import { useState, useRef, useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import api from "../../services/api";

function VerificationCard({ onVisitorVerified }) {
  const scannerRef = useRef(null);
  const html5QrCodeRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [scannerRunning, setScannerRunning] = useState(false);

  const [otp, setOtp] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [visitor, setVisitor] = useState(null);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      stopScanner();
    };
  }, []);

  const stopScanner = async () => {
    try {
      if (
        html5QrCodeRef.current &&
        html5QrCodeRef.current.isScanning
      ) {
        await html5QrCodeRef.current.stop();
        await html5QrCodeRef.current.clear();
      }
    } catch (err) {
      console.error(err);
    }

    html5QrCodeRef.current = null;
    setScannerRunning(false);
  };

  const verifyQRCode = async (visitorCode) => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response = await api.post(
        "/checkin/verify-qr",
        {
          visitorCode,
        }
      );

      const data =
        response.data.data || response.data.visitor;

      setVisitor(data);

      setMobileNumber(
        data.mobileNumber ||
          data.mobile ||
          ""
      );
       console.log("Sending visitor to parent:", data);
      if (onVisitorVerified) {
        onVisitorVerified(data);
      }

      setSuccess("QR Code verified successfully.");

      await stopScanner();
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "QR verification failed."
      );
    } finally {
      setLoading(false);
    }
  };
    const startScanner = async () => {
    try {
      setError("");
      setSuccess("");

      if (scannerRunning) return;

      html5QrCodeRef.current = new Html5Qrcode("reader");

      await html5QrCodeRef.current.start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: {
            width: 250,
            height: 250,
          },
        },
        async (decodedText) => {
          try {
            let visitorCode = decodedText;

            try {
              const qrData = JSON.parse(decodedText);

              visitorCode =
                qrData.visitorCode ||
                qrData.code ||
                decodedText;
            } catch (_) {}

            await verifyQRCode(visitorCode);
          } catch (err) {
            console.error(err);
          }
        },
        () => {}
      );

      setScannerRunning(true);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to access camera. Please allow camera permission."
      );
    }
  };

  const verifyOTP = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response = await api.post("/otp/verify", {
        mobileNumber,
        otp,
      });

      if (response.data.success) {
        setSuccess("OTP verified successfully.");

        if (visitor && onVisitorVerified) {
          onVisitorVerified(visitor);
        }
      } else {
        setError("Invalid OTP.");
      }
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "OTP verification failed."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetVerification = async () => {
    await stopScanner();

    setVisitor(null);
    setOtp("");
    setMobileNumber("");
    setSuccess("");
    setError("");
  };

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
        {scannerRunning ? "Scanner Running" : "Scanner Ready"}
      </span>

    </div>

  </div>

  {/* Body */}

  <div className="grid xl:grid-cols-2 gap-10 p-8">

    {/* Scanner */}

    <div className="flex flex-col items-center">

      <div
        id="reader"
        ref={scannerRef}
        className="relative w-80 min-h-[320px] rounded-3xl border-4 border-dashed border-blue-500 bg-slate-800 flex items-center justify-center overflow-hidden"
      >

        {!scannerRunning && (

          <div className="flex flex-col items-center">

            <QrCode
              size={120}
              className="text-blue-400"
            />

            <p className="text-slate-400 mt-6">
              Scanner is stopped
            </p>

          </div>

        )}

      </div>

      <p className="text-slate-400 mt-6 text-center">
        Position the visitor QR code inside the frame
      </p>

      <div className="flex gap-4 mt-6">

        <button
          onClick={startScanner}
          disabled={scannerRunning || loading}
          className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition-all text-white font-semibold shadow-xl disabled:opacity-50"
        >

          <ScanLine size={20} />

          Start Scanner

        </button>

        <button
          onClick={stopScanner}
          disabled={!scannerRunning}
          className="px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-semibold disabled:opacity-50"
        >

          Stop

        </button>

      </div>

      {loading && (

        <div className="flex items-center gap-2 mt-6 text-blue-400">

          <Loader2
            size={18}
            className="animate-spin"
          />

          Processing...

        </div>

      )}

      {success && (

        <div className="flex items-center gap-2 mt-6 text-green-400">

          <CheckCircle size={18} />

          {success}

        </div>

      )}

      {error && (

        <div className="flex items-center gap-2 mt-6 text-red-400">

          <AlertCircle size={18} />

          {error}

        </div>

      )}

    </div>

    {/* OTP Verification */}

    <div className="flex flex-col justify-center">

      <h3 className="text-white text-xl font-semibold mb-2">
        Verify using OTP
      </h3>

      <p className="text-slate-400 mb-6">
        Scan the visitor QR code first, then verify the OTP received on the visitor's mobile number.
      </p>

      <label className="text-slate-300 mb-2">
        Mobile Number
      </label>

      <input
        type="text"
        value={mobileNumber}
        readOnly
        placeholder="Scan QR to load mobile number"
        className="w-full rounded-2xl bg-slate-800 border border-slate-700 px-5 py-4 text-white mb-5"
      />

      <label className="text-slate-300 mb-2">
        Visitor OTP
      </label>

      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter 6 Digit OTP"
        className="w-full rounded-2xl bg-slate-800 border border-slate-700 px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
      />

      <button
        onClick={verifyOTP}
        disabled={loading}
        className="mt-6 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-105 transition-all text-white py-4 font-semibold shadow-xl disabled:opacity-50"
      >
        {loading ? "Verifying..." : "Verify OTP"}
      </button>

      {visitor && (
              <div className="mt-8 rounded-2xl bg-slate-800 border border-slate-700 p-5">

          <h4 className="text-lg font-semibold text-green-400 mb-4">
            Visitor Details
          </h4>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span className="text-slate-400">Name</span>
              <span className="text-white font-medium">
                {visitor.name || "-"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Company</span>
              <span className="text-white">
                {visitor.company || "-"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Mobile</span>
              <span className="text-white">
                {visitor.mobileNumber || visitor.mobile || "-"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Purpose</span>
              <span className="text-white">
                {visitor.purpose || "-"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Host</span>
              <span className="text-white">
                {visitor.host?.name ||
                  visitor.employeeName ||
                  "-"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Department</span>
              <span className="text-white">
                {visitor.host?.department?.name ||
                  visitor.department ||
                  "-"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Status</span>

              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                Verified
              </span>
            </div>

          </div>

        </div>

      )}

      <button
        onClick={resetVerification}
        className="mt-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition-colors"
      >
        Reset Verification
      </button>

      <div className="mt-8 rounded-2xl bg-slate-800 border border-slate-700 p-5">

        <h4 className="text-white font-semibold mb-3">
          Verification Instructions
        </h4>

        <ul className="text-sm text-slate-400 space-y-2 list-disc list-inside">
          <li>Click <strong>Start Scanner</strong>.</li>
          <li>Scan the visitor QR code.</li>
          <li>Visitor details will be fetched automatically.</li>
          <li>Enter the OTP received on the visitor's mobile.</li>
          <li>Click <strong>Verify OTP</strong>.</li>
          <li>After successful verification, the visitor is ready for check-in.</li>
        </ul>

      </div>

    </div>

  </div>

</div>
  );
}

export default VerificationCard;