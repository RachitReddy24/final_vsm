import DashboardLayout from "./DashboardLayout";
import { hostMenu } from "../../data/hostMenu";

function HostLayout({ children }) {
  return (
    <DashboardLayout menu={hostMenu}>
      {children}
    </DashboardLayout>
  );
}

export default HostLayout;