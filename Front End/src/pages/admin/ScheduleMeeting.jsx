/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/roles/DashboardLayout";

import MeetingPreviewCard from "../../components/meeting/MeetingPreviewCard";
import MeetingQRCode from "../../components/meeting/MeetingQRCode";

import api from "../../services/api";

import {
  CalendarPlus,
  Briefcase,
  User,
  Building2,
  Calendar,
} from "lucide-react";

function ScheduleMeeting() {
  const [loading, setLoading] = useState(false);

  const [meeting, setMeeting] = useState(null);

  const [employees, setEmployees] = useState([]);

  const [departments, setDepartments] = useState([]);

  const [meetingData, setMeetingData] = useState({
    title: "",
    departmentId: "",
    hostId: "",
    date: "",
    time: "",
    purpose: "",
    remarks: "",
  });

  useEffect(() => {
    loadEmployees();
    loadDepartments();
  }, []);

  async function loadEmployees() {
    try {
      const res = await api.get("/employees");

      console.log("Employees:", res.data);

      let data = [];

      if (Array.isArray(res.data))
        data = res.data;
      else if (Array.isArray(res.data.data))
        data = res.data.data;
      else if (Array.isArray(res.data.employees))
        data = res.data.employees;
      else if (Array.isArray(res.data.data?.employees))
        data = res.data.data.employees;

      setEmployees(data);

    } catch (err) {
      console.error(err);
    }
  }

  async function loadDepartments() {
    try {

      const res = await api.get("/departments");

      console.log("Departments:", res.data);

      let data = [];

      if (Array.isArray(res.data))
        data = res.data;
      else if (Array.isArray(res.data.data))
        data = res.data.data;
      else if (Array.isArray(res.data.departments))
        data = res.data.departments;
      else if (Array.isArray(res.data.data?.departments))
        data = res.data.data.departments;

      setDepartments(data);

    } catch (err) {
      console.error(err);
    }
  }

  const handleChange = (field, value) => {
    setMeetingData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleScheduleMeeting = async () => {

    if (!meetingData.title)
      return alert("Meeting title is required");

    if (!meetingData.hostId)
      return alert("Please select Host");

    if (!meetingData.date)
      return alert("Please select Date");

    if (!meetingData.time)
      return alert("Please select Time");

    setLoading(true);

    try {

      const payload = {
        title: meetingData.title,

        description:
          `${meetingData.purpose}\n\n${meetingData.remarks}`,

        meetingDate:
          `${meetingData.date}T${meetingData.time}:00`,

        hostId: Number(meetingData.hostId),
      };

      console.log(payload);

      const res = await api.post(
        "/meetings",
        payload
      );

      console.log(res.data);

      const data =
        res.data.data || res.data;

      setMeeting({
        meetingId:
          data.id ||
          data.meetingId,

        meetingUrl:
          data.bookingUrl ||
          data.meetingUrl ||
          `${window.location.origin}/booking/${data.bookingToken}`,

        ...data,
      });

      alert("Meeting Scheduled Successfully");

    } catch (err) {

      console.error(err);

      alert(
        err?.response?.data?.message ||
        "Unable to schedule meeting"
      );

    } finally {
      setLoading(false);
    }
  };
    return (
    <DashboardLayout>

      <div className="space-y-8">

        <div className="rounded-[30px] border border-slate-800 bg-slate-900 shadow-xl p-8">

          {/* Header */}

          <div className="flex items-center gap-4 mb-8">

            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">

              <CalendarPlus
                size={28}
                className="text-cyan-400"
              />

            </div>

            <div>

              <h1 className="text-3xl font-bold text-white">
                Schedule Meeting
              </h1>

              <p className="text-slate-400 mt-1">
                Create a new meeting for a visitor
              </p>

            </div>

          </div>

          {/* Meeting Details */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Input
              icon={Briefcase}
              label="Meeting Title"
              value={meetingData.title}
              onChange={(e) =>
                handleChange(
                  "title",
                  e.target.value
                )
              }
              placeholder="Project Discussion"
            />

            <Select
              icon={Building2}
              label="Department"
              value={meetingData.departmentId}
              onChange={(e) =>
                handleChange(
                  "departmentId",
                  e.target.value
                )
              }
            >

              <option value="">
                Select Department
              </option>

              {departments.map((department) => (

                <option
                  key={department.id}
                  value={department.id}
                >
                  {department.name}
                </option>

              ))}

            </Select>

            <Select
              icon={User}
              label="Host"
              value={meetingData.hostId}
              onChange={(e) =>
                handleChange(
                  "hostId",
                  e.target.value
                )
              }
            >

              <option value="">
                Select Host
              </option>

              {employees.map((employee) => (

                <option
                  key={employee.id}
                  value={employee.id}
                >
                  {employee.name}
                </option>

              ))}

            </Select>

            <Input
              icon={Calendar}
              type="date"
              label="Meeting Date"
              value={meetingData.date}
              onChange={(e) =>
                handleChange(
                  "date",
                  e.target.value
                )
              }
            />

            <Input
              type="time"
              label="Meeting Time"
              value={meetingData.time}
              onChange={(e) =>
                handleChange(
                  "time",
                  e.target.value
                )
              }
            />

          </div>

          {/* Purpose */}

          <div className="mt-6">

            <label className="block text-slate-300 text-sm font-medium mb-2">
              Purpose
            </label>

            <textarea
              rows={4}
              value={meetingData.purpose}
              onChange={(e) =>
                handleChange(
                  "purpose",
                  e.target.value
                )
              }
              placeholder="Purpose of the meeting..."
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

          </div>

          {/* Remarks */}

          <div className="mt-6">

            <label className="block text-slate-300 text-sm font-medium mb-2">
              Remarks
            </label>

            <textarea
              rows={3}
              value={meetingData.remarks}
              onChange={(e) =>
                handleChange(
                  "remarks",
                  e.target.value
                )
              }
              placeholder="Additional remarks..."
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />          </div>

          {/* Button */}

          <div className="mt-8">

            <button
              onClick={handleScheduleMeeting}
              disabled={loading}
              className="w-full rounded-xl bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-900 disabled:cursor-not-allowed py-4 text-white font-semibold transition-all duration-300"
            >
              {loading
                ? "Scheduling..."
                : "Schedule Meeting"}
            </button>

          </div>

        </div>

        {/* Meeting Preview */}

        {meeting && (

          <div className="grid lg:grid-cols-2 gap-6">

            <MeetingPreviewCard
              meetingId={meeting.meetingId}
              meetingUrl={meeting.meetingUrl}
            />

            <MeetingQRCode
              meeting={meeting}
            />

          </div>

        )}

      </div>

    </DashboardLayout>
  );
}
function Input({
  icon: Icon,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>

      <label className="block text-slate-300 text-sm font-medium mb-2">
        {label}
      </label>

      <div className="relative">

        {Icon && (
          <Icon
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
        )}

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full h-12 rounded-xl border border-slate-700 bg-slate-800 text-white placeholder:text-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
            Icon
              ? "pl-12 pr-4"
              : "px-4"
          }`}
        />

      </div>

    </div>
  );
}
function Select({
  icon: Icon,
  label,
  value,
  onChange,
  children,
}) {
  return (
    <div>

      <label className="block text-slate-300 text-sm font-medium mb-2">
        {label}
      </label>

      <div className="relative">

        {Icon && (
          <Icon
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        )}

        <select
          value={value}
          onChange={onChange}
          className={`w-full h-12 rounded-xl border border-slate-700 bg-slate-800 text-white appearance-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
            Icon
              ? "pl-12 pr-10"
              : "px-4"
          }`}
        >
          {children}
        </select>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>

      </div>

    </div>
  );
}

export default ScheduleMeeting;