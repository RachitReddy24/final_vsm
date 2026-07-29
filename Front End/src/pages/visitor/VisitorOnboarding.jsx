import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
 
import ReceptionLayout from "../../layouts/roles/ReceptionLayout";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
 
import {
  UserPlus,
  Camera,
  QrCode,
  Send,
  CheckCircle2,
} from "lucide-react";
 
function VisitorOnboarding() {
  const navigate = useNavigate();
 
  const [employees, setEmployees] = useState([]);
 
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    company: "",
    designation: "",
    purpose: "",
    hostId: "",
    cameFrom: "",
  });
 
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const [photo, setPhoto] = useState(null);
  const [idProof, setIdProof] = useState(null);
 
  const [cameraOpen, setCameraOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
 
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
 
  useEffect(() => {
    fetchEmployees();
  }, []);
 
useEffect(() => {
  return () => {
    if (streamRef.current) {
      streamRef.current
        .getTracks()
        .forEach((track) => track.stop());
    }
  };
}, []);
 
  const fetchEmployees = async () => {
    try {
      const response = await api.get("/employees");
 
      setEmployees(
        Array.isArray(response.data?.data?.employees)
          ? response.data.data.employees
          : []
      );
    } catch (error) {
      console.error(error);
      alert("Unable to load employees");
      setEmployees([]);
    }
  };
 
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
 
  const handleGenerateQR = () => {
    alert("QR will be generated automatically after approval.");
  };
 
  const handleOpenCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
 
      streamRef.current = stream;
      setCameraOpen(true);
 
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, 100);
    } catch (err) {
      console.error(err);
      alert("Unable to access camera");
    }
  };
 
  const handleCapturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
 
    const ctx = canvas.getContext("2d");
 
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
 
    ctx.drawImage(video, 0, 0);
 
    canvas.toBlob((blob) => {
      const file = new File(
        [blob],
        "visitor-photo.jpg",
        {
          type: "image/jpeg",
        }
      );
 
      setPhoto(file);
      setCapturedImage(URL.createObjectURL(file));
    });
 
    streamRef.current
      ?.getTracks()
      .forEach((track) => track.stop());
 
    setCameraOpen(false);
  };
 
  const handleCloseCamera = () => {
    streamRef.current
      ?.getTracks()
      .forEach((track) => track.stop());
 
    setCameraOpen(false);
  };
 
  const handleRetake = async () => {
    setPhoto(null);
    setCapturedImage(null);
 
    await handleOpenCamera();
  };
 
  const handleSendOTP = async () => {
    if (!formData.mobileNumber) {
      alert("Please enter mobile number.");
      return;
    }
 
    try {
      setLoading(true);
 
      const response = await api.post("/otp/send", {
        mobileNumber: formData.mobileNumber,
      });
 
      alert(response.data.message);
      setOtpSent(true);
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to send OTP."
      );
    } finally {
      setLoading(false);
    }
  };
 
  const handleVerifyOTP = async () => {
    try {
      setLoading(true);
 
      const response = await api.post("/otp/verify", {
        mobileNumber: formData.mobileNumber,
        otp,
      });
 
      alert(response.data.message);
 
      setOtpVerified(true);
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "OTP verification failed."
      );
    } finally {
      setLoading(false);
    }
  };
 
  const handleSubmit = async () => {
    if (!otpVerified) {
      alert("Please verify OTP first.");
      return;
    }
 
    try {
      setLoading(true);
 
      const form = new FormData();
 
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("mobileNumber", formData.mobileNumber);
      form.append("company", formData.company);
      form.append("designation", formData.designation);
      form.append("cameFrom", formData.cameFrom);
      form.append("purpose", formData.purpose);
      form.append("hostId", Number(formData.hostId));
 
      if (photo) {
        form.append("photo", photo);
      }
 
      if (idProof) {
        form.append("idProof", idProof);
      }
 
      const response = await api.post(
        "/unplanned-visits",
        form
      );
 
      alert(response.data.message);
 
      navigate("/reception/pending-approvals");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
  <ReceptionLayout>
    <div className="max-w-6xl mx-auto space-y-8">
 
      <Card className="p-8">
 
        <div className="flex items-center gap-3 mb-8">
          <UserPlus className="w-8 h-8 text-cyan-500" />
 
          <div>
            <h1 className="text-3xl font-bold">
              Walk-In Visitor Registration
            </h1>
 
            <p className="text-gray-500">
              Register an unplanned visitor
            </p>
          </div>
        </div>
 
        <div className="grid md:grid-cols-2 gap-6">
 
          <Input
            label="Visitor Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Visitor Name"
          />
 
          <Input
            label="Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="9876543210"
          />
 
          <Input
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="visitor@gmail.com"
          />
 
          <Input
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
          />
 
          <Input
            label="Designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Manager"
          />
 
          <Input
            label="Came From"
            name="cameFrom"
            value={formData.cameFrom}
            onChange={handleChange}
            placeholder="Hyderabad"
          />
 
          <Input
            label="Purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            placeholder="Meeting"
          />
 
        </div>
 
        <div className="mt-8">
 
          <label className="block font-semibold mb-2">
            Select Host Employee
          </label>
 
          <select
            name="hostId"
            value={formData.hostId}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
 
            <option value="">
              Select Employee
            </option>
 
            {employees.map((employee) => (
 
              <option
                key={employee.id}
                value={employee.id}
              >
                {employee.name}
              </option>
 
            ))}
 
          </select>
 
        </div>
 
        <div className="mt-8 flex gap-4">
 
          <button
            type="button"
            onClick={handleSendOTP}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            <Send className="inline mr-2" size={18} />
            Send OTP
          </button>
 
          <button
            type="button"
            onClick={handleGenerateQR}
            className="bg-purple-600 text-white px-6 py-3 rounded-xl"
          >
            <QrCode className="inline mr-2" size={18} />
            Generate QR
          </button>
 
        </div>
 
        {otpSent && (
 
          <div className="mt-8 flex gap-4 items-end">
 
            <div className="flex-1">
 
              <Input
                label="OTP"
                value={otp}
                onChange={(e)=>setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
 
            </div>
 
            <button
              type="button"
              onClick={handleVerifyOTP}
              className="bg-green-600 text-white px-6 py-3 rounded-xl"
            >
              <CheckCircle2 className="inline mr-2" size={18}/>
              Verify OTP
            </button>
 
          </div>
 
        )}
 
        <div className="mt-10">
 
          <h2 className="text-xl font-semibold mb-4">
            Visitor Photo
          </h2>
 
          {!cameraOpen && !capturedImage && (
 
            <button
              type="button"
              onClick={handleOpenCamera}
              className="px-6 py-3 bg-cyan-600 text-white rounded-xl hover:bg-cyan-700"
            >
              Open Camera
            </button>
 
          )}
 
          {cameraOpen && (
 
            <div className="mt-6 flex flex-col items-center gap-5">
 
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-[450px] rounded-xl border"
              />
 
              <canvas
                ref={canvasRef}
                className="hidden"
              />
 
              <div className="flex gap-4">
 
                <button
                  type="button"
                  onClick={handleCapturePhoto}
                  className="bg-green-600 text-white px-6 py-2 rounded-xl"
                >
                  Capture
                </button>
 
                <button
                  type="button"
                  onClick={handleCloseCamera}
                  className="bg-red-600 text-white px-6 py-2 rounded-xl"
                >
                  Cancel
                </button>
 
              </div>
 
            </div>
 
          )}
 
          {capturedImage && (
 
            <div className="mt-6 flex flex-col items-center gap-5">
 
              <img
                src={capturedImage}
                alt="Visitor"
                className="w-60 rounded-xl border-4 border-cyan-500"
              />
 
              <div className="flex gap-4">
 
                <button
  type="button"
  onClick={() => setCapturedImage(capturedImage)}
  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl"
>
  Use Photo
</button>
 
                <button
                  type="button"
                  onClick={handleRetake}
                  className="bg-orange-500 text-white px-6 py-2 rounded-xl"
                >
                  Retake
                </button>
 
              </div>
 
            </div>
 
          )}
 
        </div>
 
        <div className="mt-10">
 
          <h2 className="text-xl font-semibold mb-4">
            Identity Proof
          </h2>
 
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={(e)=>setIdProof(e.target.files[0])}
            className="w-full border rounded-xl p-3"
          />
 
        </div>
 
        <div className="mt-10 flex justify-end gap-4">
 
          <button
            type="button"
            onClick={()=>navigate(-1)}
            className="border px-6 py-3 rounded-xl"
          >
            Cancel
          </button>
 
          <button
            type="button"
            disabled={loading}
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl"
          >
            {loading ? "Registering..." : "Register Visitor"}
          </button>
 
        </div>
 
      </Card>
 
    </div>
 
  </ReceptionLayout>
);
 
}
 
export default VisitorOnboarding;