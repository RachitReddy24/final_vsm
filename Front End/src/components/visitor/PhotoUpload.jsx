import { useRef } from "react";
import { Camera, UploadCloud } from "lucide-react";
 
function PhotoUpload({ photo, setPhoto }) {

  const fileInputRef = useRef(null);
 
const handleUpload = (e) => {
  const file = e.target.files[0];

  if (file) {
    setPhoto(file);
  }
};
 
  return (
<div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl p-6">
 
      <h2 className="text-xl font-bold text-white mb-4">

        Visitor Photo
</h2>
 
      <div className="border-2 border-dashed border-slate-700 bg-slate-800 rounded-xl h-72 flex flex-col justify-center items-center transition hover:border-cyan-500">
 
        {photo ? (
<img

            src={URL.createObjectURL(photo)}

            alt="Visitor"

            className="w-48 h-48 rounded-xl object-cover border-4 border-cyan-500 shadow-lg"

          />

        ) : (
<>
<Camera size={60} className="text-cyan-400" />
 
            <p className="mt-4 text-slate-300">

              Capture or Upload Visitor Photo
</p>
</>

        )}
 
        <input

          ref={fileInputRef}

          type="file"

          accept="image/*"

          className="hidden"

          onChange={handleUpload}

        />
 
        <div className="flex gap-4 mt-6">
 
          <button

            type="button"

           className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-lg transition"

            onClick={() => alert("Camera integration coming next")}
>

            Open Camera
</button>
 
          <button

            type="button"

            onClick={() => fileInputRef.current.click()}

           className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition"
>
<UploadCloud size={18} />

            Upload
</button>
 
        </div>
 
      </div>
 
    </div>

  );

}
 
export default PhotoUpload;

 