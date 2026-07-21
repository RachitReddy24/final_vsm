import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ReceptionLayout from "../../layouts/roles/ReceptionLayout";

import CheckoutHeader from "../../components/reception/CheckoutHeader";
import VisitorCheckoutCard from "../../components/reception/VisitorCheckoutCard";
import MeetingSummary from "../../components/reception/MeetingSummary";
import ItemsChecklist from "../../components/reception/ItemsChecklist";
import SecurityChecklist from "../../components/reception/SecurityChecklist";
import ExitRemarks from "../../components/reception/ExitRemarks";
import CheckoutActions from "../../components/reception/CheckoutActions";
import CheckoutTimeline from "../../components/reception/CheckoutTimeline";
import CheckoutSuccessModal from "../../components/reception/CheckoutSuccessModal";

function VisitorCheckOut() {
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const handleCheckout = () => {
    setShowSuccess(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleNotify = () => {
    alert("Host notification sent successfully.");
  };

  const handleCancel = () => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel the checkout process?"
    );

    if (confirmCancel) {
      navigate("/reception/dashboard");
    }
  };

  return (
    <ReceptionLayout>

      <div className="space-y-8">

        <CheckoutHeader />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          <VisitorCheckoutCard />

          <MeetingSummary />

          <ItemsChecklist />

          <SecurityChecklist />

          <ExitRemarks />

          <CheckoutActions
            onCheckout={handleCheckout}
            onPrint={handlePrint}
            onNotify={handleNotify}
            onCancel={handleCancel}
          />

        </div>

        <CheckoutTimeline />

      </div>

      <CheckoutSuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />

    </ReceptionLayout>
  );
}

export default VisitorCheckOut;