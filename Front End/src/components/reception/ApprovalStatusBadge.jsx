function ApprovalStatusBadge({ status }) {
  const getStatusStyle = () => {
    switch ((status || "").toUpperCase()) {
      case "APPROVED":
        return "bg-green-100 text-green-700 border-green-300";

      case "REJECTED":
        return "bg-red-100 text-red-700 border-red-300";

      case "PENDING":
      default:
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
    }
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border mt-2 ${getStatusStyle()}`}
    >
      {status || "PENDING"}
    </span>
  );
}

export default ApprovalStatusBadge;