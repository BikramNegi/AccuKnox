import { FaArrowsRotate, FaEllipsisVertical } from "react-icons/fa6";
import AddWidgetButton from "./AddWidgetButton";
import DaysFilterButton from "./DaysFilterButton";

const DashBoardHeader = () => {
  return (
    <div className="dashboard_header">
      <h4>CNAPP Dashboard</h4>
      <div className="right_dashboard_header_menu">
        <AddWidgetButton />
        <div className="right_dashboard_header_menu_button">
          <FaArrowsRotate />
        </div>
        <div className="right_dashboard_header_menu_button">
          <FaEllipsisVertical />
        </div>
        <DaysFilterButton />
      </div>
    </div>
  );
};

export default DashBoardHeader;
