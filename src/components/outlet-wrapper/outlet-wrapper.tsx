import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/navbar";

export const OutletWrapper = () => {
  return (
    <main className="flex h-screen w-screen flex-1 flex-col overflow-hidden text-sm">
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};
