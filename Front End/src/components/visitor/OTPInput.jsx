import { useState } from "react";
import Button from "../ui/Button";
import otpService from "../../services/otpService";

function OTPInput({
  mobileNumber = "",
  onVerified,
}) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendingOTP, setSendingOTP] = useState(false);

  const handleVerifyOTP = async () => {
    if (!mobileNumber) {
      alert("Mobile number is missing.");
      return;
    }

    if (!otp) {
      alert("Please enter OTP.");
      return;
    }

    try {
      setLoading(true);

      const response = await otpService.verifyOTP(
        mobileNumber,
        otp
      );

      alert(
        response.data?.message ||
          "OTP verified successfully."
      );

      if (onVerified) {
        onVerified();
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "OTP verification failed."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!mobileNumber) {
      alert("Please enter mobile number.");
      return;
    }

    try {
      setSendingOTP(true);

      const response = await otpService.sendOTP(
        mobileNumber
      );

      alert(
        response.data?.message ||
          "OTP sent successfully."
      );
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to send OTP."
      );
    } finally {
      setSendingOTP(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow border p-8 max-w-md mx-auto">

      <h2 className="text-3xl font-bold text-center">
        OTP Verification
      </h2>

      <p className="text-center text-slate-500 mt-2">
        Enter the 6-digit OTP sent to your mobile
      </p>

      <input
        type="text"
        maxLength={6}
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="123456"
        className="w-full mt-8 border rounded-xl text-center text-3xl tracking-[12px] py-4 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mt-8">
        <Button
          onClick={handleVerifyOTP}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </Button>
      </div>

      <button
        onClick={handleResendOTP}
        disabled={sendingOTP}
        className="text-blue-600 mt-5 w-full disabled:opacity-50"
      >
        {sendingOTP ? "Sending..." : "Resend OTP"}
      </button>

    </div>
  );
}

export default OTPInput;