function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-yellow-500/20 text-yellow-400",
    Approved: "bg-green-500/20 text-green-400",
    Rejected: "bg-red-500/20 text-red-400",
    Verified: "bg-blue-500/20 text-blue-400",
    "Checked In": "bg-cyan-500/20 text-cyan-400",
    "Checked Out": "bg-slate-500/20 text-slate-300",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${
        styles[status] || "bg-slate-700 text-slate-300"
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;