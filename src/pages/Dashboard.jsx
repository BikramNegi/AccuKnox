import Categories from "../components/Categories";
import DashBoardHeader from "../components/DashBoardHeader";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashBoardHeader />
      <Categories />
    </div>
  );
};

export default Dashboard;
