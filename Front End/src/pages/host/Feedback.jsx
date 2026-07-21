import HostLayout from "../../layouts/roles/HostLayout";
import FeedbackForm from "../../components/host/FeedbackForm";
import {
  Star,
  MessageSquare,
} from "lucide-react";

function Feedback() {
  return (
    <HostLayout>

      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Meeting Feedback
            </h1>

            <p className="text-slate-400 mt-2">
              Complete the meeting by providing your feedback and rating the visitor experience.
            </p>

          </div>

          <div className="flex gap-4 mt-5 lg:mt-0">

            <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/30">

              <Star
                size={18}
                className="text-yellow-400"
              />

              <span className="text-yellow-400 font-semibold">
                Feedback Pending
              </span>

            </div>

            <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-500/10 border border-blue-500/30">

              <MessageSquare
                size={18}
                className="text-blue-400"
              />

              <span className="text-blue-400 font-semibold">
                Host Review
              </span>

            </div>

          </div>

        </div>

        {/* Meeting Summary */}

        <div className="grid lg:grid-cols-4 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <p className="text-slate-400 text-sm">
              Visitor
            </p>

            <h2 className="text-white text-xl font-bold mt-2">
              Rahul Sharma
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <p className="text-slate-400 text-sm">
              Department
            </p>

            <h2 className="text-white text-xl font-bold mt-2">
              IT Department
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <p className="text-slate-400 text-sm">
              Meeting Time
            </p>

            <h2 className="text-white text-xl font-bold mt-2">
              10:30 AM
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <p className="text-slate-400 text-sm">
              Status
            </p>

            <span className="inline-block mt-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 font-semibold">
              Completed
            </span>

          </div>

        </div>

        {/* Feedback Form */}

        <FeedbackForm />

      </div>

    </HostLayout>
  );
}

export default Feedback;