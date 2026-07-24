function VisitorInfoCard({
  visitor,
  loading = false,
}) {
  const [processing, setProcessing] = useState(false);

  const handleCheckIn = async () => {
    if (!visitor) return;

    try {
      setProcessing(true);

      const visitorCode =
        visitor.visitorCode ||
        visitor.code ||
        visitor.visitor_id ||
        visitor.id;

      const response = await api.post("/checkin", {
        visitorCode,
      });

      alert(
        response.data.message || "Visitor checked in successfully."
      );

      window.location.reload();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Unable to complete check-in."
      );
    } finally {
      setProcessing(false);
    }
  };

  const handleReject = () => {
    alert("Reject functionality will be integrated with your approval workflow.");
  };

  if (loading) {
    // Keep your existing loading JSX
  }

  if (!visitor) {
    // Keep your existing empty-state JSX
  }

  return (
    // Keep your existing JSX exactly the same,
    // but make the changes shown below.
  );
}