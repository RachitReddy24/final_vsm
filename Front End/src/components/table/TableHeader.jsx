import { Search } from "lucide-react";

function TableHeader({ title }) {
  return (
    <div className="flex justify-between items-center p-5 border-b">

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <div className="relative">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          placeholder="Search..."
          className="border rounded-lg pl-10 pr-4 py-2"
        />

      </div>

    </div>
  );
}

export default TableHeader;