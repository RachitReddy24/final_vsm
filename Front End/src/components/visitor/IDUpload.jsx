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
    <div className="bg-white rounded-xl shadow border p-6">
      <h2 className="text-xl font-semibold mb-4">
        Upload ID Proof
      </h2>

      <label
        className="border-2 border-dashed rounded-xl h-48 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50"
        onClick={() => fileRef.current.click()}
      >
        <Upload size={50} />

        <p className="mt-3 text-slate-500">
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