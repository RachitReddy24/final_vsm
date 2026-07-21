import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import {
  ShieldCheck,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

import { statusData } from "../../data/reportData";

const COLORS = [
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#3B82F6",
];

const ICONS = [
  CheckCircle2,
  Clock3,
  XCircle,
  ShieldCheck,
];

function StatusChart() {
  const total = statusData.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Visitor Status
          </h2>

          <p className="text-slate-400 mt-1">
            Current visitor distribution
          </p>

        </div>

        <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center">

          <ShieldCheck
            size={24}
            className="text-green-400"
          />

        </div>

      </div>

      {/* Chart */}

      <div className="h-[340px]">

        <ResponsiveContainer>

          <PieChart>

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "16px",
                color: "#fff",
              }}
            />

            <Legend />

            <Pie
              data={statusData}
              dataKey="value"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={5}
              stroke="none"
            >
              {statusData.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />

              ))}
            </Pie>

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* Total */}

      <div className="px-6">

        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-5 text-center">

          <p className="text-slate-400">
            Total Visitors
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            {total}
          </h2>

        </div>

      </div>

      {/* Legend */}

      <div className="grid grid-cols-2 gap-4 p-6">

        {statusData.map((item, index) => {

          const Icon = ICONS[index % ICONS.length];

          return (

            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex items-center gap-4 hover:border-cyan-500 transition-all"
            >

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: `${COLORS[index]}20`,
                }}
              >

                <Icon
                  size={22}
                  color={COLORS[index]}
                />

              </div>

              <div>

                <p className="text-slate-400 text-sm">
                  {item.name}
                </p>

                <h3 className="text-white text-xl font-bold">
                  {item.value}
                </h3>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}

export default StatusChart;