import Sidebar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

import adminMenu from "../../data/adminMenu";
import receptionMenu from "../../data/receptionMenu";

function DashboardLayout({ children }) {

  const role = localStorage.getItem("role") || "admin";

  const userName =
    localStorage.getItem("userName") || "Administrator";

  const userRole =
    localStorage.getItem("userRole") || "Administrator";

  const menu =
    role === "admin"
      ? adminMenu
      : receptionMenu;

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar
        menu={menu}
        userName={userName}
        userRole={userRole}
      />

      <div className="flex flex-col flex-1 min-h-screen">

        <Header
          userName={userName}
          userRole={userRole}
        />

        <main className="flex-1 overflow-y-auto p-8">

          {children}

        </main>

        <Footer />

      </div>

    </div>
  );
}

export default DashboardLayout;