import ReceptionLayout from "../../layouts/roles/ReceptionLayout";

import RegistrationForm from "../../components/visitor/RegistrationForm";
import IDUpload from "../../components/visitor/IDUpload";
import CameraCapture from "../../components/visitor/CameraCapture";
import QRCodeCard from "../../components/visitor/QRCodeCard";
import OTPInput from "../../components/visitor/OTPInput";

import {
  UserPlus,
  QrCode,
  Smartphone,
  Save,
} from "lucide-react";

function VisitorOnboarding() {
  return (
    <ReceptionLayout>

      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Visitor Onboarding
            </h1>

            <p className="text-slate-400 mt-2">
              Register scheduled and walk-in visitors before verification.
            </p>

          </div>

          <div className="mt-5 lg:mt-0">

            <div className="inline-flex items-center gap-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 px-5 py-3">

              <UserPlus
                size={20}
                className="text-cyan-400"
              />

              <span className="text-cyan-400 font-semibold">
                New Registration
              </span>

            </div>

          </div>

        </div>

        {/* Registration Form */}

        <RegistrationForm />

        {/* Upload Section */}

        <div className="grid xl:grid-cols-2 gap-8">

          <IDUpload />

          <CameraCapture />

        </div>

        {/* QR + OTP */}

        <div className="grid xl:grid-cols-2 gap-8">

          <QRCodeCard />

          <OTPInput />

        </div>

        {/* Buttons */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <div className="flex flex-wrap gap-5 justify-end">

            <button
              className="
              flex
              items-center
              gap-3
              px-7
              py-4
              rounded-2xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              transition
              "
            >

              <QrCode size={20} />

              Generate QR

            </button>

            <button
              className="
              flex
              items-center
              gap-3
              px-7
              py-4
              rounded-2xl
              bg-violet-600
              hover:bg-violet-700
              text-white
              transition
              "
            >

              <Smartphone size={20} />

              Generate OTP

            </button>

            <button
              className="
              flex
              items-center
              gap-3
              px-8
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-green-600
              to-emerald-500
              hover:scale-105
              transition
              text-white
              font-semibold
              shadow-xl
              "
            >

              <Save size={20} />

              Register Visitor

            </button>

          </div>

        </div>

      </div>

    </ReceptionLayout>
  );
}

export default VisitorOnboarding;