import { Copy, Link2, CheckCircle2 } from "lucide-react";

function MeetingPreviewCard({
  meetingId,
  meetingUrl,
}) {
  const copyUrl = () => {
    navigator.clipboard.writeText(meetingUrl);

    alert("Meeting URL Copied");
  };

  if (!meetingId) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      <div className="flex items-center gap-3 mb-6">

        <CheckCircle2
          className="text-green-400"
        />

        <h2 className="text-2xl font-bold text-white">
          Meeting Generated
        </h2>

      </div>

      <div className="space-y-6">

        <div>

          <p className="text-slate-400 mb-2">
            Meeting ID
          </p>

          <h2 className="text-cyan-400 text-2xl font-bold">
            {meetingId}
          </h2>

        </div>

        <div>

          <p className="text-slate-400 mb-2">
            Secure Meeting URL
          </p>

          <div className="bg-slate-800 rounded-xl p-4 break-all text-white">

            <Link2
              size={18}
              className="inline mr-2"
            />

            {meetingUrl}

          </div>

        </div>

        <button
          onClick={copyUrl}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 flex items-center gap-2"
        >

          <Copy size={18} />

          Copy URL

        </button>

      </div>

    </div>
  );
}

export default MeetingPreviewCard;