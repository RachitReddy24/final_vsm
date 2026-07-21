import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="relative">

      <Search
        className="absolute left-4 top-3 text-gray-400"
        size={18}
      />

      <input
        placeholder="Search visitors..."
        className="w-96 bg-slate-100 border border-transparent focus:border-blue-500 transition rounded-xl py-3 pl-11 pr-4 outline-none"
      />

    </div>
  );
}

export default SearchBar;