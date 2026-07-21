import DashboardLayout from "./DashboardLayout";

function AdminLayout({ children }) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}

export default AdminLayout;