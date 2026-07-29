import { useRef } from "react";
import { Upload } from "lucide-react";

function IDUpload({ idProof, setIdProof }) {
  const fileRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      setIdProof(file);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl p-6">
      <h2 className="text-xl font-bold text-white mb-4">
        Upload ID Proof
      </h2>

      <label
        className="border-2 border-dashed border-slate-700 bg-slate-800 rounded-xl h-48 flex flex-col items-center justify-center cursor-pointer hover:border-cyan-500 transition"
        onClick={() => fileRef.current.click()}
      >
        <Upload size={50} className="text-cyan-400" />

        <p className="mt-3 text-slate-300 text-center px-4">
          {idProof ? idProof.name : "Click to Upload ID Proof"}
        </p>
      </label>

      <input
        ref={fileRef}
        type="file"
        className="hidden"
        accept="image/*,.pdf"
        onChange={handleFile}
      />
    </div>
  );
}

export default IDUpload;