import AdminNavbar from "@/components/app/admin-navbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
