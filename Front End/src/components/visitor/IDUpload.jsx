import { Upload } from "lucide-react";

function IDUpload() {
  return (
    <div className="bg-white rounded-xl shadow border p-6">
      <h2 className="text-xl font-semibold mb-4">
        Upload ID Proof
      </h2>

      <label className="border-2 border-dashed rounded-xl h-48 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50">
        <Upload size={50} />
        <p className="mt-3 text-slate-500">
          Click to Upload ID Proof
        </p>

        <input
          type="file"
          className="hidden"
          accept="image/*,.pdf"
        />
      </label>
    </div>
  );
}

export default IDUpload;