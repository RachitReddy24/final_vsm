import StatCard from "../dashboard/StatCard";
import { stats } from "../../data/dashboard";

function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => (
        <StatCard
          key={item.id}
          title={item.title}
          value={item.value}
          color={item.color}
          percentage={item.percentage}
        />
      ))}
    </div>
  );
}

export default DashboardStats;