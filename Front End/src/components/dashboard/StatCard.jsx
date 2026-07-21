function StatCard({
  title,
  value,
  color = "bg-blue-600",
  percentage,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
      <div className="flex justify-between items-center">

        <div>
          <p className="text-slate-400">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-white mt-3">
            {value}
          </h2>

          {percentage && (
            <p className="text-green-400 mt-3 text-sm">
              {percentage}
            </p>
          )}
        </div>

        <div
          className={`w-14 h-14 rounded-2xl ${color}`}
        />

      </div>
    </div>
  );
}

export default StatCard;