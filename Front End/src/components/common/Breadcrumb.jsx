import { Home, ChevronRight } from "lucide-react";

function Breadcrumb({ current }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">

      <Home size={16} />

      <ChevronRight size={14} />

      <span className="font-medium text-gray-700">
        {current}
      </span>

    </div>
  );
}

export default Breadcrumb;