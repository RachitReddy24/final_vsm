import {
  X,
  Copy,
  Link2,
  Mail,
  MessageSquare,
  QrCode,
  Clock3,
  CheckCircle2,
} from "lucide-react";

function ShareURLModal({
  open,
  onClose,
  meeting,
}) {
  if (!open) return null;

  const meetingURL =
    meeting?.url ||
    "https://vms.s3dtech.com/visit/ABCD1234";

  const copyURL = () => {
    navigator.clipboard.writeText(meetingURL);
    alert("Meeting URL copied.");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6">

      <div className="w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden">

        {/* Header */}

        <div className="flex justify-between items-center px-8 py-6 border-b border-slate-800">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Share Meeting URL
            </h2>

            <p className="text-slate-400 mt-2">
              Send the secure visitor link.
            </p>

          </div>

          <button
            onClick={onClose}
            className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-red-500 transition flex items-center justify-center"
          >
            <X className="text-white" />
          </button>

        </div>

        {/* Body */}

        <div className="p-8 space-y-8">

          {/* Meeting Info */}

          <div className="grid md:grid-cols-2 gap-6">

            <Card
              title="Meeting ID"
              value={meeting?.meetingId || "MTG-2026-001"}
            />

            <Card
              title="Visitor"
              value={meeting?.visitor || "Rahul Sharma"}
            />

            <Card
              title="Host"
              value={meeting?.host || "Reception Admin"}
            />

            <Card
              title="Department"
              value={meeting?.department || "IT"}
            />

          </div>

          {/* URL */}

          <div>

            <label className="text-slate-300 mb-3 block">
              Secure Meeting URL
            </label>

            <div className="flex">

              <input
                readOnly
                value={meetingURL}
                className="flex-1 bg-slate-800 border border-slate-700 rounded-l-2xl px-5 py-4 text-white"
              />

              <button
                onClick={copyURL}
                className="px-6 bg-blue-600 hover:bg-blue-700 rounded-r-2xl text-white flex items-center gap-2"
              >
                <Copy size={18} />
                Copy
              </button>

            </div>

          </div>

          {/* Expiry */}

          <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-5">

            <div className="flex items-center gap-3">

              <Clock3 className="text-amber-400" />

              <div>

                <h3 className="text-white font-semibold">
                  URL Expiry
                </h3>

                <p className="text-slate-400 text-sm">
                  Valid until 09 Jul 2026 • 06:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* Share Buttons */}

          <div className="grid lg:grid-cols-4 gap-5">

            <ShareCard
              icon={Link2}
              title="Copy Link"
              color="bg-blue-600"
              onClick={copyURL}
            />

            <ShareCard
              icon={Mail}
              title="Share Email"
              color="bg-green-600"
            />

            <ShareCard
              icon={MessageSquare}
              title="Share SMS"
              color="bg-orange-500"
            />

            <ShareCard
              icon={QrCode}
              title="Show QR"
              color="bg-purple-600"
            />

          </div>

          {/* Success */}

          <div className="rounded-2xl bg-green-500/10 border border-green-500/30 p-5">

            <div className="flex gap-3">

              <CheckCircle2
                className="text-green-400 mt-1"
              />

              <div>

                <h3 className="text-white font-semibold">
                  Secure Link Ready
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Share this URL with the visitor. The visitor can
                  complete registration, upload ID proof, receive
                  a QR pass and check in using this link.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="rounded-2xl bg-slate-800 border border-slate-700 p-5">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h3 className="text-white font-semibold mt-2">
        {value}
      </h3>

    </div>
  );
}

function ShareCard({
  icon: Icon,
  title,
  color,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`${color} rounded-2xl p-6 text-white hover:scale-105 transition`}
    >
      <Icon size={34} />

      <h3 className="mt-4 font-semibold">
        {title}
      </h3>
    </button>
  );
}

export default ShareURLModal;