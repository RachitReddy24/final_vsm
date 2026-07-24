import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import ReceptionLayout from "../../layouts/roles/ReceptionLayout";

import CheckoutHeader from "../../components/reception/CheckoutHeader";
import VisitorCheckoutCard from "../../components/reception/VisitorCheckoutCard";
import MeetingSummary from "../../components/reception/MeetingSummary";
import ItemsChecklist from "../../components/reception/ItemsChecklist";
import SecurityChecklist from "../../components/reception/SecurityChecklist";
import ExitRemarks from "../../components/reception/ExitRemarks";
import CheckoutTimeline from "../../components/reception/CheckoutTimeline";
import CheckoutSuccessModal from "../../components/reception/CheckoutSuccessModal";

function VisitorCheckOut() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [search, setSearch] = useState("");
  const [visitor, setVisitor] = useState(null);
  const [feedback, setFeedback] = useState("");

  const [items, setItems] = useState({
    laptop: false,
    visitorBadge: false,
    idCard: false,
    parkingToken: false,
  });

  const [securityChecklist, setSecurityChecklist] = useState({
    bagChecked: false,
    accessCardReturned: false,
    escortCompleted: false,
  });

  const [remarks, setRemarks] = useState("");

  const handleSearch = async () => {
    if (!search.trim()) {
      alert("Please enter Visitor Code");
      return;
    }

    try {
      setLoading(true);

      const response = await api.get(
        `/checkin/status/${search}`
      );

      setVisitor(response.data.data);

    } catch (error) {
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
        `/checkout/${visitor.id}`
      );

      alert(response.data.message);

      setShowSuccess(true);

      setVisitor(null);
      setSearch("");
      setFeedback("");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Checkout failed."
      );

    } finally {

      setLoading(false);

    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleNotify = () => {
    alert("Host notified successfully.");
  };

  const handleCancel = () => {
    if (
      window.confirm(
        "Cancel checkout?"
      )
    ) {
      navigate("/reception/dashboard");
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

      <ItemsChecklist
        items={items}
        setItems={setItems}
      />

      <SecurityChecklist
        securityChecklist={securityChecklist}
        setSecurityChecklist={setSecurityChecklist}
      />

      <ExitRemarks
        remarks={remarks}
        setRemarks={setRemarks}
      />

    </div>

    <CheckoutTimeline visitor={visitor} />

  </div>

  <CheckoutSuccessModal
    isOpen={showSuccess}
    onClose={() => setShowSuccess(false)}
  />
</ReceptionLayout>
};
export default VisitorCheckOut;