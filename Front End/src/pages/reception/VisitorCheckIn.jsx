import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import ReceptionLayout from "../../layouts/roles/ReceptionLayout";

import QRScanner from "../../components/checkin/QRScanner";
import CameraPreview from "../../components/camera/CameraPreview";
import VisitorInfoCard from "../../components/checkin/VisitorInfoCard";

function VisitorCheckIn() {
  const [visitorId, setVisitorId] = useState("");

  return (
    <ReceptionLayout>
      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Visitor Check-In
            </h1>

            <p className="text-slate-400 mt-2">
              Scan the visitor QR code to retrieve visitor details and complete the check-in process.
            </p>

          </div>

          <div className="mt-5 lg:mt-0">

            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-green-500/10 border border-green-500/30">

              <CheckCircle2
                size={18}
                className="text-green-400"
              />

              <span className="text-green-400 font-semibold">
                Reception Ready
              </span>

            </div>

          </div>

        </div>

        {/* Modules */}

        <div className="grid xl:grid-cols-3 gap-8">

          <div className="xl:col-span-1">
            <QRScanner
              onScan={(data) => setVisitorId(data)}
            />
          </div>

          <div className="xl:col-span-1">
            <CameraPreview />
          </div>

          <div className="xl:col-span-1">
            <VisitorInfoCard
              visitorId={visitorId}
            />
          </div>

        </div>

      </div>
    </ReceptionLayout>
  );
}

export default VisitorCheckIn;