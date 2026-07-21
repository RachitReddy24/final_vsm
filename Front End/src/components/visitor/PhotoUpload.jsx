import { Camera, UploadCloud } from "lucide-react";

function PhotoUpload() {
  return (
    <div className="bg-white rounded-xl shadow border p-6">

      <h2 className="text-xl font-semibold mb-4">
        Visitor Photo
      </h2>

      <div className="border-2 border-dashed rounded-xl h-64 flex flex-col justify-center items-center">

        <Camera size={60} />

        <p className="mt-4 text-slate-500">
          Capture or Upload Visitor Photo
        </p>

        <div className="flex gap-4 mt-6">

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
            Open Camera
          </button>

          <button className="bg-green-600 text-white px-5 py-2 rounded-lg flex gap-2 items-center">
            <UploadCloud size={18} />
            Upload
          </button>

        </div>

      </div>

    </div>
  );
}

export default PhotoUpload;