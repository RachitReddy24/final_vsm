import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import ReceptionLayout from "../../layouts/roles/ReceptionLayout";

import CheckoutHeader from "../../components/reception/CheckoutHeader";
import VisitorCheckoutCard from "../../components/reception/VisitorCheckOutCard";
import MeetingSummary from "../../components/reception/MeetingSummary";
import ExitRemarks from "../../components/reception/ExitRemarks";
import CheckoutSuccessModal from "../../components/reception/CheckoutSuccessModal";

function VisitorCheckOut() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [search, setSearch] = useState("");
  const [visitor, setVisitor] = useState(null);

  const [feedback, setFeedback] = useState("");

  const [remarks, setRemarks] = useState({
    rating: 5,
    exitCondition: "Normal Exit",
    notes: "",
    incident: "",
  });

  const handleSearch = async () => {
    if (!search.trim()) {
      alert("Please enter Visitor Code");
      return;
    }

    try {
      setLoading(true);

      const response = await api.get(`/checkin/status/${search}`);

      console.log("Search Response:", response.data);

      setVisitor(response.data.data);
    } catch (error) {
      console.error(error);
      setVisitor(null);

      alert(
        error.response?.data?.message ||
          "Visitor not found."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = async () => {
    if (!visitor) {
      alert("Please search a visitor first.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post(
        `/checkout/${visitor.id}`,
        {
          exitCondition: remarks.exitCondition,
          notes: remarks.notes,
          incident: remarks.incident,
        }
      );

      alert(
        response.data?.message ||
          "Visitor checked out successfully."
      );

      setVisitor((prev) => ({
        ...prev,
        status: "CHECKED_OUT",
      }));
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Checkout failed."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleFeedbackSubmit = async () => {
    if (!visitor) {
      alert("Please search a visitor first.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post(
        `/feedback/${visitor.id}`,
        {
          rating: remarks.rating,
          comments: remarks.notes,
        }
      );

      alert(response.data.data.message);

      setShowSuccess(true);
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to submit feedback."
      );
    } finally {
      setLoading(false);
    }
  };
    return (
    <ReceptionLayout>
      <div className="space-y-8">

        <CheckoutHeader />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          <VisitorCheckoutCard
            search={search}
            setSearch={setSearch}
            visitor={visitor}
            loading={loading}
            feedback={feedback}
            setFeedback={setFeedback}
            onSearch={handleSearch}
            onCheckout={handleCheckout}
            onBack={() => navigate("/reception/dashboard")}
          />

          <MeetingSummary visitor={visitor} />

          <ExitRemarks
            remarks={remarks}
            setRemarks={setRemarks}
            onSubmit={handleFeedbackSubmit}
            loading={loading}
          />

        </div>

      </div>

      <CheckoutSuccessModal
        isOpen={showSuccess}
        visitor={visitor}
        onClose={() => {
          setShowSuccess(false);

          setVisitor(null);
          setSearch("");
          setFeedback("");

          setRemarks({
            rating: 5,
            exitCondition: "Normal Exit",
            notes: "",
            incident: "",
          });
        }}
      />

    </ReceptionLayout>
  );
}

export default VisitorCheckOut;