import {
  Star,
  Smile,
  Meh,
  Frown,
  CheckCircle2,
} from "lucide-react";

import TextArea from "../ui/TextArea";
import Input from "../ui/Input";
import Button from "../ui/Button";

function FeedbackForm() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="px-8 py-6 border-b border-slate-800">

        <h2 className="text-3xl font-bold text-white">
          Meeting Feedback
        </h2>

        <p className="text-slate-400 mt-2">
          Rate the visitor experience and complete the meeting.
        </p>

      </div>

      <div className="p-8 space-y-8">

        {/* Rating */}

        <div>

          <h3 className="text-white text-lg font-semibold mb-5">
            Overall Experience
          </h3>

          <div className="flex gap-4">

            {[1,2,3,4,5].map((star)=>(
              <button
                key={star}
                className="
                w-14
                h-14
                rounded-2xl
                bg-slate-800
                border
                border-slate-700
                hover:border-yellow-400
                hover:bg-yellow-500/10
                transition-all
                flex
                items-center
                justify-center
                "
              >

                <Star
                  size={24}
                  className="text-yellow-400"
                />

              </button>
            ))}

          </div>

        </div>

        {/* Satisfaction */}

        <div>

          <h3 className="text-white text-lg font-semibold mb-5">
            Visitor Experience
          </h3>

          <div className="grid md:grid-cols-3 gap-5">

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-green-500 cursor-pointer transition">

              <Smile
                size={36}
                className="text-green-400"
              />

              <h4 className="text-white font-semibold mt-4">
                Excellent
              </h4>

              <p className="text-slate-400 text-sm mt-2">
                Everything went perfectly.
              </p>

            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-yellow-500 cursor-pointer transition">

              <Meh
                size={36}
                className="text-yellow-400"
              />

              <h4 className="text-white font-semibold mt-4">
                Good
              </h4>

              <p className="text-slate-400 text-sm mt-2">
                Meeting completed successfully.
              </p>

            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-red-500 cursor-pointer transition">

              <Frown
                size={36}
                className="text-red-400"
              />

              <h4 className="text-white font-semibold mt-4">
                Needs Improvement
              </h4>

              <p className="text-slate-400 text-sm mt-2">
                Visitor experience could be improved.
              </p>

            </div>

          </div>

        </div>

        {/* Notes */}

        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6">

          <TextArea
            label="Meeting Notes"
            placeholder="Describe the meeting outcome, visitor behaviour, observations and follow-up actions..."
          />

        </div>

        {/* OTP */}

        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6">

          <Input
            label="Visitor OTP Verification"
            placeholder="Enter Visitor OTP"
          />

        </div>

        {/* Success Box */}

        <div className="rounded-2xl bg-green-500/10 border border-green-500/20 p-5 flex items-center gap-4">

          <CheckCircle2
            size={28}
            className="text-green-400"
          />

          <div>

            <h4 className="text-white font-semibold">
              Ready to Complete Visit
            </h4>

            <p className="text-slate-400">
              Once submitted, the visitor session will be marked as completed.
            </p>

          </div>

        </div>

        {/* Button */}

        <div className="flex justify-end">

          <Button
            className="
            px-10
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-indigo-600
            hover:scale-105
            transition-all
            shadow-xl
            text-lg
            "
          >
            Complete Visit
          </Button>

        </div>

      </div>

    </div>
  );
}

export default FeedbackForm;