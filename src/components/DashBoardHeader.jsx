import { useState, useCallback, lazy, Suspense } from "react";
import { FaArrowsRotate, FaEllipsisVertical } from "react-icons/fa6";
import AddWidgetButton from "./AddWidgetButton";
import DaysFilterButton from "./DaysFilterButton";
const AddWidgetModal = lazy(() => import("./AddWidgetModal"));

const DashBoardHeader = () => {
  const [showAddWidgetModal, setShowAddWidgetModal] = useState(false);

  const showAddWidgetModalHandler = useCallback(() => {
    setShowAddWidgetModal((prev) => !prev);
  }, []);

  return (
    <div className="dashboard_header">
      {showAddWidgetModal && (
        <Suspense fallback={<div>Loading AddWidgetModal...</div>}>
          <AddWidgetModal onClose={showAddWidgetModalHandler} />
        </Suspense>
      )}
      <h4>CNAPP Dashboard</h4>
      <div className="right_dashboard_header_menu">
        <AddWidgetButton showModal={showAddWidgetModalHandler} />
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
