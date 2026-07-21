import {
  ShieldCheck,
  BadgeCheck,
  ClipboardCheck,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Carry a Valid ID",
  },
  {
    icon: BadgeCheck,
    title: "Wear Visitor Badge",
  },
  {
    icon: ClipboardCheck,
    title: "Follow Security Rules",
  },
];

function VisitorGuidelines() {
  return (
    <div className="bg-white rounded-xl shadow border p-6">

      <h2 className="text-xl font-semibold mb-5">
        Visitor Guidelines
      </h2>

      <div className="space-y-5">

        {items.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="flex items-center gap-4"
            >

              <div className="bg-blue-100 p-3 rounded-lg">

                <Icon
                  size={20}
                  className="text-blue-600"
                />

              </div>

              <span>{item.title}</span>

            </div>

          );

        })}

      </div>

    </div>
  );
}

export default VisitorGuidelines;