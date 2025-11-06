import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { FaXmark } from "react-icons/fa6";
import { removeWidget } from "../store/slices/dashboardSlice";

const Widget = ({ widgetData: { id, name, text }, categoryId }) => {
  const dispatch = useDispatch();

  const removeWidgetItem = () => {
    dispatch(removeWidget({ widgetId: id, categoryId: categoryId }));
  };

  return (
    <div className="category_widget">
      <div className="widget_header">
        <span>{name}</span>
        <div className="widget_header_close_button" onClick={removeWidgetItem}>
          <FaXmark />
        </div>
      </div>

      <div>{text}</div>
    </div>
  );
};

Widget.PropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Widget;
