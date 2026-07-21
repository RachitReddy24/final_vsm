import {
  QrCode,
  ShieldCheck,
  Clock3,
  ArrowRight,
} from "lucide-react";

import { useMeeting } from "../../context/MeetingContext";

function PendingVerification() {
  const { approvedMeetings } = useMeeting();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-2xl font-bold text-white">
          Pending Verification
        </h2>

        <ShieldCheck
          className="text-cyan-400"
          size={28}
        />

      </div>

      {/* List */}

      <div className="space-y-5">

        {approvedMeetings.length === 0 ? (

          <div className="text-center py-12 text-slate-500">

            No Visitors Waiting For Verification

          </div>

        ) : (

          approvedMeetings.map((visitor) => (

            <div
              key={visitor.id}
              className="rounded-2xl bg-slate-800 border border-slate-700 p-5 hover:border-cyan-500 transition"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="text-white font-semibold text-lg">
                    {visitor.visitor}
                  </h3>

                  <p className="text-slate-400 mt-1">
                    {visitor.company}
                  </p>

                  <p className="text-slate-500 mt-1">
                    Host : {visitor.host}
                  </p>

                  <div className="flex items-center gap-2 mt-3 text-cyan-400">

                    <Clock3 size={16} />

                    {visitor.date} • {visitor.time}

                  </div>

                </div>

                <button
                  className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-cyan-600
                  hover:bg-cyan-700
                  px-5
                  py-3
                  text-white
                  "
                >

                  <QrCode size={18} />

                  Verify

                  <ArrowRight size={16} />

                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default PendingVerification;