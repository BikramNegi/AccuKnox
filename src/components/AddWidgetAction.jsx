import PropTypes from "prop-types";
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

AddWidgetAction.propTypes = {
  openDrawer: PropTypes.func.isRequired,
};

export default AddWidgetAction;
