function ForgotPassword() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <div className="bg-white rounded-xl shadow p-10 w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6">
          Forgot Password
        </h2>

        <input
          placeholder="Enter Email"
          className="border rounded-lg w-full p-3"
        />

        <button className="w-full bg-blue-600 text-white rounded-lg py-3 mt-5">
          Send Reset Link
        </button>

      </div>

    </div>
  );
}

export default ForgotPassword;