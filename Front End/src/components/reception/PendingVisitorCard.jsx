import ApprovalStatusBadge from "./ApprovalStatusBadge";

import {
  User,
  Building2,
  Phone,
  Briefcase,
  Users,
  CheckCircle,
  XCircle,
} from "lucide-react";

function PendingVisitorCard({
  visitor,
  onApprove,
  onReject,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-2xl font-bold">
            {visitor.name}
          </h2>

          <ApprovalStatusBadge
            status={visitor.status}
          />

        </div>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">

        <div className="flex items-center gap-3">
          <Phone className="text-blue-600" />
          <div>
            <p className="text-gray-500 text-sm">
              Mobile
            </p>
            <p className="font-semibold">
              {visitor.mobileNumber}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Building2 className="text-green-600" />
          <div>
            <p className="text-gray-500 text-sm">
              Company
            </p>
            <p className="font-semibold">
              {visitor.company}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Briefcase className="text-purple-600" />
          <div>
            <p className="text-gray-500 text-sm">
              Designation
            </p>
            <p className="font-semibold">
              {visitor.designation}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Users className="text-orange-600" />
          <div>
            <p className="text-gray-500 text-sm">
              Host Employee
            </p>
            <p className="font-semibold">
              {visitor.host?.name || "Not Assigned"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <User className="text-indigo-600" />
          <div>
            <p className="text-gray-500 text-sm">
              Purpose
            </p>
            <p className="font-semibold">
              {visitor.purpose}
            </p>
          </div>
        </div>

      </div>

      <div className="flex justify-end gap-4 mt-8">

        <button
          onClick={() => onReject(visitor.id)}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition"
        >
          <XCircle size={18} />
          Reject
        </button>

        <button
          onClick={() => onApprove(visitor.id)}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
        >
          <CheckCircle size={18} />
          Approve
        </button>

      </div>

    </div>
  );
}

export default PendingVisitorCard;