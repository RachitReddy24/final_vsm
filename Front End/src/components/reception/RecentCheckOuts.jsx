import { useEffect, useState } from "react";
import { LogOut, UserCircle2 } from "lucide-react";
import api from "../../services/api";


function RecentCheckOuts() {
  const [checkouts, setCheckouts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  fetchCheckOuts();
}, []);

const fetchCheckOuts = async () => {
  try {
    const res = await api.get("/dashboard/recent-visitors");

    const data = (res.data.data || []).filter(
      (visitor) => visitor.status === "CHECKED_OUT"
    );

    setCheckouts(data);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};
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
                  {item.name}
                </h3>

                <p className="text-slate-400">
                  Host : {item.host?.name || "-"}
                </p>

              </div>

            </div>

            <div className="text-right">

              <p className="text-cyan-400 font-semibold">
                {new Date(item.checkedOutAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                })}
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