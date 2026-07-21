import Button from "../ui/Button";

function OTPInput() {
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
        placeholder="123456"
        className="w-full mt-8 border rounded-xl text-center text-3xl tracking-[12px] py-4 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mt-8">

        <Button>
          Verify OTP
        </Button>

      </div>

      <button className="text-blue-600 mt-5 w-full">
        Resend OTP
      </button>

    </div>
  );
}

export default OTPInput;