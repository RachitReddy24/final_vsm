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
<div className="bg-white rounded-xl shadow border p-6">
 
      <h2 className="text-xl font-semibold mb-4">

        Visitor Photo
</h2>
 
      <div className="border-2 border-dashed rounded-xl h-72 flex flex-col justify-center items-center">
 
        {photo ? (
<img

            src={URL.createObjectURL(photo)}

            alt="Visitor"

            className="w-48 h-48 rounded-lg object-cover"

          />

        ) : (
<>
<Camera size={60} />
 
            <p className="mt-4 text-slate-500">

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

            className="bg-blue-600 text-white px-5 py-2 rounded-lg"

            onClick={() => alert("Camera integration coming next")}
>

            Open Camera
</button>
 
          <button

            type="button"

            onClick={() => fileInputRef.current.click()}

            className="bg-green-600 text-white px-5 py-2 rounded-lg flex gap-2 items-center"
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

 