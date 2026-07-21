import { CheckCircle2 } from "lucide-react";
import Button from "../../components/ui/Button";

function RegistrationSuccess() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white rounded-xl shadow p-10 text-center max-w-lg">

        <CheckCircle2
          size={90}
          className="mx-auto text-green-600"
        />

        <h1 className="text-3xl font-bold mt-6">
          Registration Successful
        </h1>

        <p className="text-slate-500 mt-4">
          Your registration has been submitted successfully.
        </p>

        <p className="text-slate-500">
          Please wait for host approval.
        </p>

        <div className="mt-8">

          <Button>
            Done
          </Button>

        </div>

      </div>

    </div>
  );
}

export default RegistrationSuccess;