import Button from "../ui/Button";

function VisitorApprovalCard() {
  return (
    <div className="bg-white rounded-xl shadow border p-8">

      <h2 className="text-2xl font-semibold mb-6">
        Visitor Approval
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="text-slate-500">Visitor Name</label>
          <p className="font-semibold">Rahul Sharma</p>
        </div>

        <div>
          <label className="text-slate-500">Company</label>
          <p className="font-semibold">ABC Pvt Ltd</p>
        </div>

        <div>
          <label className="text-slate-500">Purpose</label>
          <p className="font-semibold">Business Meeting</p>
        </div>

        <div>
          <label className="text-slate-500">Visit Time</label>
          <p className="font-semibold">10:30 AM</p>
        </div>

        <div>
          <label className="text-slate-500">Mobile</label>
          <p className="font-semibold">9876543210</p>
        </div>

        <div>
          <label className="text-slate-500">Email</label>
          <p className="font-semibold">
            rahul@gmail.com
          </p>
        </div>

      </div>

      <div className="flex gap-4 mt-10">

        <Button variant="success">
          Approve
        </Button>

        <Button variant="dark">
          Reject
        </Button>

      </div>

    </div>
  );
}

export default VisitorApprovalCard;