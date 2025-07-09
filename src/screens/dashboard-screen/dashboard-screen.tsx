import { selectLoggedInUser } from "@/redux/reducers/user-reducer";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useDeveloperHooks from "./hooks/developer-hooks";
import { DeveloperTable } from "./components/developer-table/developer-table";
import StatisticsChart from "./components/statistics-chart/statistics-chart";

export const DashboardScreen = memo(() => {
  // state
  const [order, setOrder] = useState<string>("asc");

  // hooks
  const { fetchDevelopersData } = useDeveloperHooks({
    order: order,
  });

  const navigate = useNavigate();
  const loggedInUser = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/auth");
    } else {
      fetchDevelopersData();
    }
  }, []);

  useEffect(() => {
    fetchDevelopersData();
  }, [order]);

  return (
    <div className="flex h-screen w-screen flex-1 flex-col gap-y-2 overflow-hidden p-2">
      <StatisticsChart />

      <DeveloperTable order={order} setOrder={setOrder} />
    </div>
  );
});
