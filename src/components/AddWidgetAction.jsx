import { FaPlus } from "react-icons/fa6";

const AddWidgetAction = ({ openDrawer }) => {
  return (
    <div className="AddWidgetAction category_widget">
      <button className="AddWidgetActionButton" onClick={openDrawer}>
        <FaPlus />
        <span>Add Widget</span>
      </button>
    </div>
  );
};

export default AddWidgetAction;
