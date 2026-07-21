import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "HR", value: 32 },
  { name: "IT", value: 48 },
  { name: "Finance", value: 21 },
  { name: "Sales", value: 27 },
  { name: "Admin", value: 18 },
];

const COLORS = [
  "#3B82F6",
  "#06B6D4",
  "#10B981",
  "#F59E0B",
  "#8B5CF6",
];

function DepartmentChart() {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="px-6 py-5 border-b border-slate-800">

        <h2 className="text-2xl font-bold text-white">
          Department Visits
        </h2>

        <p className="text-slate-400 mt-1">
          Visitors by Department
        </p>

      </div>

      {/* Chart */}

      <div className="h-[420px] p-6">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              cx="50%"
              cy="45%"
              innerRadius={70}
              outerRadius={120}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Legend
              verticalAlign="bottom"
              iconType="circle"
              wrapperStyle={{
                color: "#fff",
                paddingTop: "20px",
              }}
            />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default DepartmentChart;