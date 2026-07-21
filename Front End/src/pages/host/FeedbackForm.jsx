import HostLayout from "../../layouts/roles/HostLayout";
import FeedbackForm from "../../components/host/FeedbackForm";
import {
  Star,
  CircleCheckBig,
} from "lucide-react";

function FeedbackFormPage() {
  return (
    <HostLayout>

      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between lg:items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Meeting Feedback
            </h1>

            <p className="text-slate-400 mt-2">
              Rate the visitor meeting experience and submit your final remarks.
            </p>

          </div>

          <div className="flex gap-4 mt-5 lg:mt-0">

            <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl px-5 py-3">

              <Star
                size={18}
                className="text-yellow-400"
              />

              <span className="text-yellow-400 font-semibold">
                Feedback Pending
              </span>

            </div>

            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-2xl px-5 py-3">

              <CircleCheckBig
                size={18}
                className="text-green-400"
              />

              <span className="text-green-400 font-semibold">
                Meeting Completed
              </span>

            </div>

          </div>

        </div>

        {/* Meeting Summary */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <p className="text-slate-400 text-sm">
              Visitor
            </p>

            <h3 className="text-white text-xl font-bold mt-2">
              Rahul Sharma
            </h3>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <p className="text-slate-400 text-sm">
              Department
            </p>

            <h3 className="text-white text-xl font-bold mt-2">
              IT Department
            </h3>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <p className="text-slate-400 text-sm">
              Meeting Time
            </p>

            <h3 className="text-white text-xl font-bold mt-2">
              10:30 AM
            </h3>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <p className="text-slate-400 text-sm">
              Status
            </p>

            <span className="inline-block mt-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 font-semibold">
              Feedback Required
            </span>

          </div>

        </div>

        {/* Feedback Form */}

        <FeedbackForm />

      </div>

    </HostLayout>
  );
}

export default FeedbackFormPage;