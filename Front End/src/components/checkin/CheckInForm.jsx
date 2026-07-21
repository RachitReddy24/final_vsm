import { QrCode } from "lucide-react";
import Button from "../ui/Button";

function CheckInForm() {
  return (
    <div className="bg-white rounded-xl shadow border p-8">

      <h2 className="text-2xl font-semibold mb-6">
        Verify Visitor
      </h2>

      {/* QR Scanner */}

      <div className="border-2 border-dashed rounded-xl h-60 flex flex-col items-center justify-center">

        <QrCode
          size={70}
          className="text-blue-600"
        />

        <p className="mt-4 text-gray-500">
          QR Scanner Placeholder
        </p>

        <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg">
          Scan QR
        </button>

      </div>

      <div className="my-6 text-center text-gray-500">
        OR
      </div>

      <input
        type="text"
        placeholder="Enter Visitor Code"
        className="border rounded-lg w-full p-3"
      />

      <div className="mt-6">

        <Button>
          Verify Visitor
        </Button>

      </div>

    </div>
  );
}

export default CheckInForm;