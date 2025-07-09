import { Outlet } from "react-router-dom";
import { AuthNavbar } from "../auth-navbar/auth-navbar";

export const AuthOutletWrapper = () => {
  return (
    <main className="flex h-screen w-screen flex-1 flex-col overflow-hidden text-sm">
      <div className="flex flex-1 flex-col overflow-hidden">
        <AuthNavbar />
        <Outlet />
      </div>
    </main>
  );
};
