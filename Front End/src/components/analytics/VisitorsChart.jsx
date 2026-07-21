import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", visitors: 18 },
  { day: "Tue", visitors: 25 },
  { day: "Wed", visitors: 22 },
  { day: "Thu", visitors: 35 },
  { day: "Fri", visitors: 42 },
  { day: "Sat", visitors: 28 },
  { day: "Sun", visitors: 20 },
];

function VisitorsChart() {
  return (
    <div className="rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="px-7 py-5 border-b border-slate-800">

        <h2 className="text-2xl font-bold text-white">
          Visitor Analytics
        </h2>

        <p className="text-slate-400 mt-1">
          Weekly Visitor Trends
        </p>

      </div>

      {/* Chart */}

      <div className="p-6 h-[420px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="colorVisitors"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#3B82F6"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="#06B6D4"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="5 5"
            />

            <XAxis
              dataKey="day"
              stroke="#94A3B8"
            />

            <YAxis
              stroke="#94A3B8"
            />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="visitors"
              stroke="#3B82F6"
              strokeWidth={4}
              fill="url(#colorVisitors)"
              activeDot={{
                r: 8,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default VisitorsChart;