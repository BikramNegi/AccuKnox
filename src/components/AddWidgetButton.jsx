import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa6";

const AddWidgetButton = ({ showModal }) => {
  return (
    <div>
      <button
        className="right_dashboard_header_menu_button"
        onClick={showModal}
      >
        <span>Add Widget</span>
        <FaPlus />
      </button>
    </div>
  );
};

AddWidgetButton.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default AddWidgetButton;
