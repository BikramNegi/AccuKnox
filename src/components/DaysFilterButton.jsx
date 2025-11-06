import { FaClock, FaChevronDown } from "react-icons/fa6";

const DaysFilterButton = () => {
  return (
    <div className="right_dashboard_header_menu_button">
      <FaClock /> |<span>Last 2 Days</span>
      <FaChevronDown />
    </div>
  );
};

export default DaysFilterButton;
