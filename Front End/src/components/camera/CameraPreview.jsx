import { useRef, useState } from "react";
import Webcam from "react-webcam";
import {
  Camera,
  RotateCcw,
  Save,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

function CameraPreview({ onCapture }) {
  const webcamRef = useRef(null);

  const [image, setImage] = useState(null);
  const [capturedAt, setCapturedAt] = useState("");
  const [cameraError, setCameraError] = useState(false);
  const [saved, setSaved] = useState(false);

  const capture = () => {
    const img = webcamRef.current?.getScreenshot();

    if (!img) return;

    setImage(img);
    setCapturedAt(new Date().toLocaleString());
    setSaved(false);

    if (onCapture) {
      onCapture(img);
    }
  };

  const retake = () => {
    setImage(null);
    setCapturedAt("");
    setSaved(false);

    if (onCapture) {
      onCapture(null);
    }
  };

  const savePhoto = () => {
    // Backend API will be added here later

    setSaved(true);

    console.log("Photo Ready", image);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center px-6 py-5 border-b border-slate-800">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Visitor Camera
          </h2>

          <p className="text-slate-400 mt-1">
            Capture visitor photograph
          </p>

        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/30">

          <CheckCircle2
            size={18}
            className="text-green-400"
          />

          <span className="text-green-400 text-sm font-semibold">
            Camera Ready
          </span>

        </div>

      </div>

      <div className="p-6">

        {cameraError ? (

          <div className="h-[420px] rounded-3xl border border-red-500/30 bg-red-500/10 flex flex-col items-center justify-center">

            <AlertTriangle
              size={55}
              className="text-red-400"
            />

            <h3 className="text-white text-xl font-semibold mt-4">
              Camera Unavailable
            </h3>

            <p className="text-slate-400 mt-2 text-center px-8">
              Please allow camera permission and refresh the page.
            </p>

          </div>

        ) : (

          <div className="rounded-3xl overflow-hidden border-2 border-slate-700 bg-black">

            {!image ? (

              <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/jpeg"
                className="w-full h-[420px] object-cover"
                onUserMediaError={() => setCameraError(true)}
              />

            ) : (

              <img
                src={image}
                alt="Visitor"
                className="w-full h-[420px] object-cover"
              />

            )}

          </div>

        )}

        {capturedAt && (

          <div className="mt-5 rounded-2xl border border-green-500/30 bg-green-500/10 p-4">

            <h4 className="text-green-400 font-semibold">
              Photo Captured
            </h4>

            <p className="text-slate-300 text-sm mt-1">
              Captured At : {capturedAt}
            </p>

          </div>

        )}

        {saved && (

          <div className="mt-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-4">

            <p className="text-cyan-300 font-medium">
              ✔ Visitor photo saved successfully.
            </p>

          </div>

        )}

        <div className="grid grid-cols-2 gap-5 mt-6">

          {!image ? (

            <button
              onClick={capture}
              disabled={cameraError}
              className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition-all text-white font-semibold shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >

              <Camera size={20} />

              Capture Photo

            </button>

          ) : (

            <button
              onClick={retake}
              className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105 transition-all text-white font-semibold shadow-xl"
            >

              <RotateCcw size={20} />

              Retake

            </button>

          )}

          <button
            onClick={savePhoto}
            disabled={!image}
            className={`flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold shadow-xl transition-all
              ${
                image
                  ? "bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-105 text-white"
                  : "bg-slate-700 text-slate-500 cursor-not-allowed"
              }`}
          >

            <Save size={20} />

            Save Photo

          </button>

        </div>

      </div>

    </div>
  );
}

export default CameraPreview;