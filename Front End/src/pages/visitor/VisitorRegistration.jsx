import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getMeetingByToken } from "../../services/meeting.service";

import RegistrationForm from "../../components/visitor/RegistrationForm";
import PhotoUpload from "../../components/visitor/PhotoUpload";
import IDUpload from "../../components/visitor/IDUpload";
import VisitorGuidelines from "../../components/visitor/VisitorGuidelines";

function VisitorRegistration() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [meeting, setMeeting] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [idProof, setIdProof] = useState(null);

  useEffect(() => {
    if (token) {
      // eslint-disable-next-line react-hooks/immutability
      fetchMeeting();
    }
  }, [token]);

const fetchMeeting = async () => {
  try {
    const response = await getMeetingByToken(token);

    console.log("Response:", response);
    console.log("Meeting:", response.data.meeting);

    setMeeting(response.data.meeting);

  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Visitor Registration
          </h1>

          <p className="text-gray-600 mt-2">
            Complete the registration before entering the premises.
          </p>
        </div>

        {meeting && (
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl shadow-xl p-8 mb-8">

            <h2 className="text-3xl font-bold text-white mb-6">
              📅 Meeting Details
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-slate-400 text-sm">Meeting Title</p>
                <p className="text-white text-lg font-semibold">
                  {meeting.title || "N/A"}
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-slate-400 text-sm">Host</p>
                <p className="text-white text-lg font-semibold">
                  {meeting.host?.name || "N/A"}
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-slate-400 text-sm">Department</p>
                <p className="text-white text-lg font-semibold">
                  {meeting.host?.department?.name || "N/A"}
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-slate-400 text-sm">Meeting Date</p>
                <p className="text-white text-lg font-semibold">
                  {meeting.meetingDate
                    ? new Date(meeting.meetingDate).toLocaleString()
                    : "N/A"}
                </p>
              </div>

              <div className="md:col-span-2 bg-slate-800 rounded-xl p-4">
                <p className="text-slate-400 text-sm">Description</p>
                <p className="text-white text-lg">
                  {meeting.description || "N/A"}
                </p>
              </div>

            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <RegistrationForm
              photo={photo}
              idProof={idProof}
            />
          </div>

          <div className="space-y-8">
            <PhotoUpload
              photo={photo}
              setPhoto={setPhoto}
            />

            <IDUpload
              idProof={idProof}
              setIdProof={setIdProof}
            />

            <VisitorGuidelines />
          </div>

        </div>

      </div>
    </div>
  );
}

export default VisitorRegistration;