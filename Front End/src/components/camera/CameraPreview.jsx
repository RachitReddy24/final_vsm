import { useRef, useState } from "react";
import Webcam from "react-webcam";
import {
  Camera,
  RotateCcw,
  Save,
  CheckCircle2,
} from "lucide-react";

function CameraPreview() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = () => {
    const img = webcamRef.current?.getScreenshot();
    if (img) setImage(img);
  };

  const retake = () => {
    setImage(null);
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

      {/* Camera */}

      <div className="p-6">

        <div className="rounded-3xl overflow-hidden border-2 border-slate-700 bg-black">

          {!image ? (

            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="w-full h-[420px] object-cover"
            />

          ) : (

            <img
              src={image}
              alt="Visitor"
              className="w-full h-[420px] object-cover"
            />

          )}

        </div>

        {/* Buttons */}

        <div className="grid grid-cols-2 gap-5 mt-6">

          {!image ? (

            <button
              onClick={capture}
              className="
              flex
              items-center
              justify-center
              gap-3
              py-4
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

              <Camera size={20} />

              Capture Photo

            </button>

          ) : (

            <button
              onClick={retake}
              className="
              flex
              items-center
              justify-center
              gap-3
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-yellow-500
              to-orange-500
              hover:scale-105
              transition-all
              text-white
              font-semibold
              shadow-xl
              "
            >

              <RotateCcw size={20} />

              Retake

            </button>

          )}

          <button
            className="
            flex
            items-center
            justify-center
            gap-3
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-green-600
            to-emerald-500
            hover:scale-105
            transition-all
            text-white
            font-semibold
            shadow-xl
            "
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