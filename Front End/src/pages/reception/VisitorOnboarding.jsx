import { useEffect, useState } from "react";
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


  useEffect(() => {
    fetchEmployees();
  }, []);

const fetchEmployees = async () => {
  try {
    const response = await api.get("/employees");

    console.log(response.data);

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
form.append("cameFrom", formData.cameFrom);
form.append("designation", formData.designation);
form.append("purpose", formData.purpose);
form.append("hostId", Number(formData.hostId));

if (photo) {
  form.append("photo", photo);
}

if (idProof) {
  form.append("idProof", idProof);
}
for (const pair of form.entries()) {
  console.log(pair[0], pair[1]);
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
          <UserPlus className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">
              Walk-In Visitor Registration
            </h1>

            <p className="text-gray-500">
              Register an unplanned visitor
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Input
            label="Visitor Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter visitor name"
            required
          />

          <Input
            label="Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="9876543210"
            required
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
            placeholder="ABC Pvt Ltd"
            required
          />
          <Input
          label="Came From"
           name="cameFrom"
           value={formData.cameFrom}
          onChange={handleChange}
          placeholder="Enter place or city"
          required
         />
          <Input
            label="Designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Manager"
            required
          />

          <Input
            label="Purpose of Visit"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            placeholder="Meeting"
            required
          />

        </div>

        <div className="mt-8">

          <label className="block mb-2 font-semibold">
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

            {Array.isArray(employees) &&
            employees.map((employee) => (

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
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <Send size={18} />
            Send OTP
          </button>

          <button
            type="button"
            onClick={handleGenerateQR}
            className="bg-purple-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <QrCode size={18} />
            Generate QR
          </button>

        </div>

        {otpSent && (

          <div className="mt-8 flex gap-4 items-end">

            <div className="flex-1">

              <Input
                label="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />

            </div>

            <button
              type="button"
              onClick={handleVerifyOTP}
              className="bg-green-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
            >
              <CheckCircle2 size={18} />
              Verify OTP
            </button>

          </div>

        )}
                <div className="mt-10">

          <h2 className="text-xl font-semibold mb-4">
            Visitor Photo
          </h2>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center">

            <Camera
              className="w-14 h-14 text-gray-400 mb-4"
            />

            <p className="text-gray-500 mb-4">
              Capture visitor photo
            </p>

            <button
              type="button"
              className="px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-black transition"
            >
              
              open Camera
              
            </button>

          </div>

        </div>

        <div className="mt-10">

          <h2 className="text-xl font-semibold mb-4">
            Identity Proof
          </h2>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setIdProof(e.target.files[0])}
             className="w-full border rounded-xl p-3"
             />

        </div>

        <div className="mt-10 flex justify-end gap-4">

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-xl border"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={handleSubmit}
            className="px-8 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading
              ? "Registering..."
              : "Register Visitor"}
          </button>

        </div>

      </Card>

    </div>

  </ReceptionLayout>
);

}

export default VisitorOnboarding;