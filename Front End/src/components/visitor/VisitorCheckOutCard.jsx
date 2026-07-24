import {
  Search,
  User,
  Building2,
  Clock3,
  LogIn,
  LogOut,
  CheckCircle2,
} from "lucide-react";

function VisitorCheckoutCard({
  search,
  setSearch,
  visitor,
  loading = false,
  feedback,
  setFeedback,
  onSearch,
  onCheckout,
  onBack,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">
          Check-Out Visitor
        </h2>

        <p className="text-slate-400 mt-2">
          Search and complete visitor checkout.
        </p>

      </div>

      {/* Search */}

      <div className="flex gap-4 mb-8">

        <div className="relative flex-1">

          <Search
            size={20}
            className="absolute left-4 top-4 text-slate-500"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Visitor Name / Mobile / Visitor ID"
            className="w-full pl-12 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-white outline-none"
          />

        </div>

        <button
          onClick={onSearch}
          disabled={loading}
          className={`px-8 rounded-2xl text-white font-semibold transition ${
            loading
              ? "bg-slate-700 cursor-not-allowed"
              : "bg-cyan-600 hover:bg-cyan-500"
          }`}
        >
          {loading ? "Searching..." : "Search"}
        </button>

      </div>

      {/* Loading */}

      {loading && (

        <div className="rounded-2xl bg-slate-800 border border-slate-700 p-10">

          <div className="flex flex-col items-center">

            <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />

            <p className="text-slate-300 mt-5">
              Loading visitor...
            </p>

          </div>

        </div>

      )}

      {/* No Visitor */}

      {!loading && !visitor && (

        <div className="rounded-2xl bg-slate-800 border border-slate-700 p-10">

          <div className="text-center">

            <User
              size={60}
              className="mx-auto text-slate-600"
            />

            <h3 className="text-white text-xl font-semibold mt-5">
              No Visitor Selected
            </h3>

            <p className="text-slate-400 mt-2">
              Search using Visitor ID, Mobile Number or Name.
            </p>

          </div>

        </div>

      )}

      {/* Visitor */}

      {!loading && visitor && (

        <>

          <div className="grid lg:grid-cols-2 gap-6">

            <Info
              icon={User}
              label="Visitor"
              value={visitor.name}
            />

            <Info
              icon={Building2}
              label="Company"
              value={visitor.company}
            />

            <Info
              icon={User}
              label="Host"
              value={visitor.host}
            />

            <Info
              icon={Clock3}
              label="Check-In"
              value={visitor.checkInTime}
            />

            <Info
              icon={Clock3}
              label="Meeting Duration"
              value={visitor.duration}
            />

            <Info
              icon={CheckCircle2}
              label="Status"
              value={visitor.status}
            />

          </div>

          {/* Feedback */}

          <div className="mt-8 rounded-2xl bg-slate-800 border border-slate-700 p-6">

            <h3 className="text-white text-xl font-semibold">
              Visitor Feedback
            </h3>

            <textarea
              rows="4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter visitor feedback..."
              className="mt-5 w-full rounded-2xl bg-slate-900 border border-slate-700 p-4 text-white outline-none resize-none"
            />

          </div>

        </>

      )}

      {/* Buttons */}

      <div className="flex justify-end gap-4 mt-8">

        <button
          onClick={onBack}
          className="flex items-center gap-3 px-7 py-4 rounded-2xl bg-slate-700 hover:bg-slate-600 text-white transition"
        >

          <LogIn size={20} />

          Back

        </button>

        <button
          onClick={onCheckout}
          disabled={!visitor}
          className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold transition ${
            visitor
              ? "bg-gradient-to-r from-red-600 to-rose-500 hover:scale-105"
              : "bg-slate-700 cursor-not-allowed"
          }`}
        >

          <LogOut size={20} />

          Check-Out Visitor

        </button>

      </div>

    </div>
  );
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">

          <Icon
            size={20}
            className="text-cyan-400"
          />

        </div>

        <div>

          <p className="text-slate-400 text-sm">
            {label}
          </p>

          <p className="text-white font-semibold mt-1">
            {value || "--"}
          </p>

        </div>

      </div>

    </div>
  );
}

export default VisitorCheckoutCard;