import {
  LogOut,
  UserCircle2,
} from "lucide-react";

const checkouts = [
  {
    id: 1,
    visitor: "Rahul Sharma",
    host: "John Doe",
    time: "11:45 AM",
  },
  {
    id: 2,
    visitor: "Anjali Verma",
    host: "David",
    time: "12:10 PM",
  },
  {
    id: 3,
    visitor: "Ramesh Kumar",
    host: "Michael",
    time: "01:05 PM",
  },
];

function RecentCheckOuts() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-2xl font-bold text-white">
          Recent Check-Outs
        </h2>

        <LogOut
          className="text-red-400"
          size={28}
        />

      </div>

      <div className="space-y-5">

        {checkouts.map((item) => (

          <div
            key={item.id}
            className="
            flex
            items-center
            justify-between
            rounded-2xl
            bg-slate-800
            border
            border-slate-700
            p-5
            hover:border-red-500/30
            transition
            "
          >

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center">

                <UserCircle2
                  className="text-white"
                  size={30}
                />

              </div>

              <div>

                <h3 className="text-white font-semibold">
                  {item.visitor}
                </h3>

                <p className="text-slate-400">
                  Host : {item.host}
                </p>

              </div>

            </div>

            <div className="text-right">

              <p className="text-cyan-400 font-semibold">
                {item.time}
              </p>

              <p className="text-red-400 text-sm">
                Checked Out
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentCheckOuts;