import {
  Bell,
  CheckCircle2,
  UserPlus,
  Mail,
  X,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: UserPlus,
    title: "New Visitor Registered",
    message: "Rahul Sharma registered for a meeting.",
    time: "2 mins ago",
    color: "text-blue-600",
  },
  {
    id: 2,
    icon: CheckCircle2,
    title: "Host Approved",
    message: "John Doe approved visitor request.",
    time: "10 mins ago",
    color: "text-green-600",
  },
  {
    id: 3,
    icon: Mail,
    title: "Email Sent",
    message: "Visitor pass emailed successfully.",
    time: "20 mins ago",
    color: "text-purple-600",
  },
];

function NotificationDrawer({ onClose }) {
  return (
    <div className="fixed inset-0 z-50">

      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />

      <div className="absolute right-0 top-0 h-screen w-96 bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <div className="flex items-center gap-3">

            <Bell className="text-blue-600" />

            <h2 className="text-xl font-bold">
              Notifications
            </h2>

          </div>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        {/* Notification List */}

        <div className="overflow-y-auto h-[calc(100vh-80px)]">

          {notifications.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="border-b p-5 hover:bg-slate-50 transition cursor-pointer"
              >

                <div className="flex gap-4">

                  <div>

                    <Icon
                      size={24}
                      className={item.color}
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      {item.message}
                    </p>

                    <p className="text-xs text-gray-400 mt-2">
                      {item.time}
                    </p>

                  </div>

                </div>

              </div>
            );

          })}

        </div>

      </div>

    </div>
  );
}

export default NotificationDrawer;