import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

import {
  TrendingUp,
  CalendarDays,
} from "lucide-react";

import { monthlyVisitors } from "../../data/reportData";

const colors = [
  "#3B82F6",
  "#06B6D4",
  "#14B8A6",
  "#10B981",
  "#22C55E",
  "#84CC16",
  "#EAB308",
  "#F59E0B",
  "#F97316",
  "#EF4444",
  "#8B5CF6",
  "#6366F1",
];

function MonthlyChart() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Monthly Visitors
          </h2>

          <p className="text-slate-400 mt-1">
            Visitor statistics for the last 12 months
          </p>

        </div>

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">

            <TrendingUp
              size={24}
              className="text-cyan-400"
            />

          </div>

        </div>

      </div>

      {/* Summary */}

      <div className="grid grid-cols-3 gap-4 px-6 py-5 border-b border-slate-800">

        <Summary
          title="This Month"
          value="325"
        />

        <Summary
          title="Growth"
          value="+18%"
        />

        <Summary
          title="Average"
          value="280"
        />

      </div>

      {/* Chart */}

      <div className="p-6">

        <ResponsiveContainer
          width="100%"
          height={340}
        >

          <BarChart
            data={monthlyVisitors}
            margin={{
              top: 10,
              right: 20,
              left: -10,
              bottom: 0,
            }}
          >

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
              stroke="#94A3B8"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#94A3B8"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              cursor={{
                fill: "rgba(255,255,255,0.05)",
              }}
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "16px",
                color: "#fff",
              }}
            />

            <Bar
              dataKey="visitors"
              radius={[10, 10, 0, 0]}
            >

              {monthlyVisitors.map((entry, index) => (

                <Cell
                  key={index}
                  fill={colors[index % colors.length]}
                />

              ))}

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* Footer */}

      <div className="px-6 py-4 border-t border-slate-800 flex justify-between items-center">

        <div className="flex items-center gap-2 text-slate-400">

          <CalendarDays size={18} />

          <span>
            Updated Monthly
          </span>

        </div>

        <span className="text-green-400 font-semibold">
          ▲ 18% Growth
        </span>

      </div>

    </div>
  );
}

function Summary({ title, value }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h3 className="text-white text-2xl font-bold mt-2">
        {value}
      </h3>

    </div>
  );
}

export default MonthlyChart;