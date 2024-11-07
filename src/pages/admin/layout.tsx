import { Outlet } from "react-router-dom";
import HeaderAdmin from "./components/HeaderAdmin";

function AdminLayout() {
  return (
    <div className="flex m-0">
      <div className="w-1/5 p-0">
        <HeaderAdmin />
      </div>
      <div className="w-4/5 p-2">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
