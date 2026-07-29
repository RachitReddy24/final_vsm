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
    // eslint-disable-next-line react-hooks/immutability
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

  const loadDepartments = async () => {
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
  };

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
              <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="flex items-center gap-3 mb-8">
          <CalendarPlus className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">
              Schedule Meeting
            </h1>
            <p className="text-gray-500">
              Create a new meeting for a visitor
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <Input
            icon={Briefcase}
            label="Meeting Title"
            value={meetingData.title}
            onChange={(e) =>
              handleChange("title", e.target.value)
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
              handleChange("hostId", e.target.value)
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
              handleChange("date", e.target.value)
            }
          />

          <Input
            type="time"
            label="Meeting Time"
            value={meetingData.time}
            onChange={(e) =>
              handleChange("time", e.target.value)
            }
          />

        </div>

        <div className="mt-6">

          <label className="block text-sm font-semibold mb-2">
            Purpose
          </label>

          <textarea
            rows="4"
            value={meetingData.purpose}
            onChange={(e) =>
              handleChange(
                "purpose",
                e.target.value
              )
            }
            className="w-full rounded-xl border p-3 focus:ring-2 focus:ring-blue-500"
            placeholder="Purpose of the meeting..."
          />

        </div>

        <div className="mt-6">

          <label className="block text-sm font-semibold mb-2">
            Remarks
          </label>

          <textarea
            rows="3"
            value={meetingData.remarks}
            onChange={(e) =>
              handleChange(
                "remarks",
                e.target.value
              )
            }
            className="w-full rounded-xl border p-3 focus:ring-2 focus:ring-blue-500"
            placeholder="Additional remarks..."
          />

        </div>

        <div className="mt-8">

          <button
            onClick={handleScheduleMeeting}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 font-semibold transition"
          >
            {loading
              ? "Scheduling..."
              : "Schedule Meeting"}
          </button>

        </div>

      </div>

      {meeting && (

        <div className="grid lg:grid-cols-2 gap-6">

          <MeetingPreviewCard
            meeting={meeting}
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
      <label className="block text-sm font-semibold mb-2">
        {label}
      </label>

      <div className="relative">

        {Icon && (
          <Icon className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
        )}

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full border rounded-xl p-3 ${
            Icon ? "pl-11" : ""
          } focus:ring-2 focus:ring-blue-500 focus:outline-none`}
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

      <label className="block text-sm font-semibold mb-2">
        {label}
      </label>

      <div className="relative">

        {Icon && (
          <Icon className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
        )}

        <select
          value={value}
          onChange={onChange}
          className={`w-full border rounded-xl p-3 ${
            Icon ? "pl-11" : ""
          } focus:ring-2 focus:ring-blue-500 focus:outline-none`}
        >
          {children}
        </select>

      </div>

    </div>
  );
}

export default ScheduleMeeting;