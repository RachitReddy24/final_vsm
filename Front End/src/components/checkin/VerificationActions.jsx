import {
  CheckCircle2,
  XCircle,
  Mail,
} from "lucide-react";

function VerificationActions() {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      <h2 className="text-2xl font-bold text-white mb-8">

        Verification Actions

      </h2>

      <div className="grid lg:grid-cols-3 gap-6">

        <button
          className="
          rounded-2xl
          bg-green-600
          hover:bg-green-700
          py-5
          text-white
          font-semibold
          flex
          justify-center
          items-center
          gap-3
          "
        >

          <CheckCircle2 size={22}/>

          Verify Visitor

        </button>

        <button
          className="
          rounded-2xl
          bg-blue-600
          hover:bg-blue-700
          py-5
          text-white
          font-semibold
          flex
          justify-center
          items-center
          gap-3
          "
        >

          <Mail size={22}/>

          Notify Host

        </button>

        <button
          className="
          rounded-2xl
          bg-red-600
          hover:bg-red-700
          py-5
          text-white
          font-semibold
          flex
          justify-center
          items-center
          gap-3
          "
        >

          <XCircle size={22}/>

          Reject Entry

        </button>

      </div>

    </div>

  );

}

export default VerificationActions;