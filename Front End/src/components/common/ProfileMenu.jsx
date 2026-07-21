import { UserCircle2, ChevronDown } from "lucide-react";

function ProfileMenu() {
  return (
    <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-100 px-3 py-2 rounded-xl transition">

      <UserCircle2
        size={42}
        className="text-blue-600"
      />

      <div>

        <h3 className="font-semibold">
          Reception Admin
        </h3>

        <p className="text-xs text-gray-500">
          Reception Desk
        </p>

      </div>

      <ChevronDown size={18} />

    </div>
  );
}

export default ProfileMenu;