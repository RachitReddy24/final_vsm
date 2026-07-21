import {
  User,
  Phone,
  Building2,
  Calendar,
  Clock,
  Briefcase,
  CheckCircle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function VisitorDetailsCard() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow border p-8">
      <div className="flex gap-8">
        {/* Visitor Photo */}
        <div className="w-40 h-48 bg-slate-200 rounded-xl flex items-center justify-center">
          <User size={80} className="text-gray-500" />
        </div>

        {/* Details */}
        <div className="flex-1 grid md:grid-cols-2 gap-6">
          <Info icon={User} label="Visitor" value="Rahul Sharma" />

          <Info icon={Phone} label="Mobile" value="9876543210" />

          <Info icon={Building2} label="Company" value="ABC Pvt Ltd" />

          <Info
            icon={Briefcase}
            label="Purpose"
            value="Business Meeting"
          />

          <Info icon={User} label="Host" value="John Doe" />

          <Info
            icon={Building2}
            label="Department"
            value="IT"
          />

          <Info
            icon={Calendar}
            label="Visit Date"
            value="08 Jul 2026"
          />

          <Info
            icon={Clock}
            label="Visit Time"
            value="10:30 AM"
          />

          <Info
            icon={CheckCircle}
            label="Status"
            value="Pending Approval"
          />
        </div>
      </div>

      <div className="flex gap-5 justify-end mt-10">
        <button
          onClick={() => navigate("/approval-success")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
        >
          Approve
        </button>

        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl">
          Reject
        </button>
      </div>
    </div>
  );
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-3">
      <Icon className="text-blue-600 mt-1" size={20} />

      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}

export default VisitorDetailsCard;