import DashboardLayout from "../../layouts/roles/DashboardLayout";
import EmailCard from "../../components/communication/EmailCard";

function HostEmail() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        <h1 className="text-3xl font-bold">
          Host Email Preview
        </h1>

        <EmailCard />

      </div>

    </DashboardLayout>
  );
}

export default HostEmail;