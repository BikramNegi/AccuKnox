import { lazy, Suspense } from "react";
const Categories = lazy(() => import("../components/Categories"));
import DashBoardHeader from "../components/DashBoardHeader";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashBoardHeader />
      <Suspense fallback={<div>Loading Categories...</div>}>
        <Categories />
      </Suspense>
    </div>
  );
};

export default Dashboard;
