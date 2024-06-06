import { Outlet } from "react-router-dom";

const AppLayout = () => {


  return (
    <main className="w-full min-h-screen bg-white">
      <Outlet />
    </main>
  );
};

export default AppLayout;
