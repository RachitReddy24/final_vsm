import {
  Building2,
  CalendarDays,
  Clock3,
} from "lucide-react";

function ReceptionWelcome() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-700 p-8 shadow-2xl">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* Left */}

        <div>

          <h1 className="text-4xl font-bold text-white">
            Reception Dashboard
          </h1>

          <p className="text-cyan-100 mt-3 text-lg">
            Manage today's visitors, verify QR codes, check-in visitors and monitor reception activities.
          </p>

          <div className="flex flex-wrap gap-6 mt-8">

            <div className="flex items-center gap-2 text-white">

              <CalendarDays size={20} />

              <span>{today}</span>

            </div>

            <div className="flex items-center gap-2 text-white">

              <Clock3 size={20} />

              <span>Reception Operations</span>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="hidden lg:flex">

          <div className="w-28 h-28 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center">

            <Building2
              size={64}
              className="text-white"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default ReceptionWelcome;