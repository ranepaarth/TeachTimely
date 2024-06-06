import Navbar from "@/components/app/navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
      <Navbar />
      <div className="flex-1 p-4 w-full max-w-screen-xl mx-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;
