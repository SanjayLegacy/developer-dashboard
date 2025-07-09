import { AuthScreen } from "@/screens/auth-screen/auth-screen";
import { DashboardScreen } from "@/screens/dashboard-screen/dashboard-screen";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthOutletWrapper } from "../auth-outlet-wrapper/auth-outlet-wrapper";
import { OutletWrapper } from "../outlet-wrapper/outlet-wrapper";
import PageNotFound from "../page-not-found/page-not-found";
import ScrollToTop from "../scroll-to-top/scroll-to-top";

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<PageNotFound />} />

        <Route element={<AuthOutletWrapper />}>
          <Route index element={<Navigate to="auth" replace />} />
          <Route path="auth" element={<AuthScreen />} />
        </Route>

        <Route element={<OutletWrapper />}>
          <Route path="dashboard" element={<DashboardScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
