import { createContext, useContext, useState } from "react";

const MeetingContext = createContext();

const initialMeetings = [
  {
    id: 1001,
    visitor: "Rahul Sharma",
    company: "Infosys",
    email: "rahul@gmail.com",
    mobile: "9876543210",
    host: "John Doe",
    department: "IT",
    purpose: "Project Discussion",
    date: "24 Jul 2026",
    time: "10:30 AM",
    status: "Pending",
  },
  {
    id: 1002,
    visitor: "Anjali Verma",
    company: "TCS",
    email: "anjali@gmail.com",
    mobile: "9876543210",
    host: "David",
    department: "Finance",
    purpose: "Vendor Meeting",
    date: "25 Jul 2026",
    time: "11:00 AM",
    status: "Pending",
  },
];

export const MeetingProvider = ({ children }) => {
  const [meetings, setMeetings] = useState(initialMeetings);

  /* ---------------- RECEPTION ---------------- */

  const addMeeting = (meeting) => {
    setMeetings((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...meeting,
        status: "Pending",
        createdAt: new Date().toLocaleString(),
        approvedAt: null,
        rejectedAt: null,
        verifiedAt: null,
        checkedInAt: null,
        checkedOutAt: null,
        reason: "",
      },
    ]);
  };

  const verifyVisitor = (id) => {
    setMeetings((prev) =>
      prev.map((m) =>
        m.id === id
          ? {
              ...m,
              status: "Verified",
              verifiedAt: new Date().toLocaleString(),
            }
          : m
      )
    );
  };

  const checkInVisitor = (id) => {
    setMeetings((prev) =>
      prev.map((m) =>
        m.id === id
          ? {
              ...m,
              status: "Checked In",
              checkedInAt: new Date().toLocaleString(),
            }
          : m
      )
    );
  };

  const checkOutVisitor = (id) => {
    setMeetings((prev) =>
      prev.map((m) =>
        m.id === id
          ? {
              ...m,
              status: "Checked Out",
              checkedOutAt: new Date().toLocaleString(),
            }
          : m
      )
    );
  };

  /* ---------------- ADMIN ---------------- */

  const approveMeeting = (id) => {
    setMeetings((prev) =>
      prev.map((m) =>
        m.id === id
          ? {
              ...m,
              status: "Approved",
              approvedAt: new Date().toLocaleString(),
            }
          : m
      )
    );
  };

  const rejectMeeting = (id, reason) => {
    setMeetings((prev) =>
      prev.map((m) =>
        m.id === id
          ? {
              ...m,
              status: "Rejected",
              reason,
              rejectedAt: new Date().toLocaleString(),
            }
          : m
      )
    );
  };

  /* ---------------- FILTERS ---------------- */

  const pendingMeetings = meetings.filter(
    (m) => m.status === "Pending"
  );

  const approvedMeetings = meetings.filter(
    (m) => m.status === "Approved"
  );

  const rejectedMeetings = meetings.filter(
    (m) => m.status === "Rejected"
  );

  const verifiedVisitors = meetings.filter(
    (m) => m.status === "Verified"
  );

  const checkedInVisitors = meetings.filter(
    (m) => m.status === "Checked In"
  );

  const checkedOutVisitors = meetings.filter(
    (m) => m.status === "Checked Out"
  );

  return (
    <MeetingContext.Provider
      value={{
        meetings,
        setMeetings,

        addMeeting,

        pendingMeetings,
        approvedMeetings,
        rejectedMeetings,
        verifiedVisitors,
        checkedInVisitors,
        checkedOutVisitors,

        approveMeeting,
        rejectMeeting,
        verifyVisitor,
        checkInVisitor,
        checkOutVisitor,
      }}
    >
      {children}
    </MeetingContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMeeting = () => useContext(MeetingContext);