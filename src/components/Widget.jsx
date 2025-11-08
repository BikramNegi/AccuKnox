import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { FaXmark } from "react-icons/fa6";
import { removeWidget } from "../store/slices/dashboardSlice";

const Widget = ({ widgetData: { id, name, text }, categoryId }) => {
  const dispatch = useDispatch();

  const removeWidgetItem = useCallback(() => {
    dispatch(removeWidget({ widgetId: id, categoryId }));
  }, [dispatch, id, categoryId]);

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

Widget.propTypes = {
  widgetData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  categoryId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default Widget;
