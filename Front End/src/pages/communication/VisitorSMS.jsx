import DashboardLayout from "../../layouts/roles/DashboardLayout";

function VisitorSMS() {
  return (
    <DashboardLayout>

      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-8">

        <h1 className="text-2xl font-bold mb-6">
          SMS Preview
        </h1>

        <div className="bg-slate-100 rounded-xl p-6 leading-8">

          <p>
            Dear Rahul Sharma,
          </p>

          <br />

          <p>
            Your meeting request has been approved.
          </p>

          <br />

          <p>
            Visitor Code:
          </p>

          <h2 className="text-3xl font-bold text-blue-600">
            VMS-458921
          </h2>

          <br />

          <p>
            Please show this code at reception for verification.
          </p>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default VisitorSMS;