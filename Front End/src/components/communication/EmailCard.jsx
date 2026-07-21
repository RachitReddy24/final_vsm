import Button from "../ui/Button";

function EmailCard() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow border">

      <div className="bg-blue-600 text-white px-6 py-4 rounded-t-xl">
        <h2 className="text-2xl font-semibold">
          Visitor Management System
        </h2>
      </div>

      <div className="p-8 space-y-5">

        <p>Hi John,</p>

        <p>
          A visitor has arrived at the reception to meet you.
        </p>

        <div className="bg-slate-100 rounded-lg p-5">

          <h3 className="font-semibold mb-4">
            Visitor Details
          </h3>

          <p><strong>Name :</strong> Rahul Sharma</p>
          <p><strong>Mobile :</strong> 9876543210</p>
          <p><strong>Company :</strong> ABC Pvt Ltd</p>
          <p><strong>Purpose :</strong> Business Meeting</p>

        </div>

        <div className="flex gap-4">

          <Button variant="success">
            Approve
          </Button>

          <Button variant="dark">
            Reject
          </Button>

        </div>

      </div>

    </div>
  );
}

export default EmailCard;