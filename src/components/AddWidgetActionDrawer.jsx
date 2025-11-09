import { FaXmark } from "react-icons/fa6";
import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAllWidgets } from "../store/slices/dashboardSlice";
import PropTypes from "prop-types";

const AddWidgetActionDrawer = ({ onClose }) => {
  const categories = useSelector((state) => state.dashboard.categories);
  const [allCategories, setAllCategories] = useState(categories);
  const dispatch = useDispatch();
  const [activeCategoryId, setActiveCategoryId] = useState(
    allCategories[0]?.id || null
  );

  const handleActiveTab = useCallback((e) => {
    setActiveCategoryId(Number.parseInt(e.target.id));
  }, []);

  const activeCategoryWidgets = useMemo(() => {
    const category = allCategories.find(
      (eachCategory) => eachCategory.id === activeCategoryId
    );
    return category ? category.widgets : [];
  }, [allCategories, activeCategoryId]);

  const toggleWidgetActive = useCallback((categories, widgetId) => {
    return categories.map((eachCategory) => {
      const widgets = eachCategory.widgets.map((eachWidget) =>
        eachWidget.id === widgetId
          ? { ...eachWidget, active: !eachWidget.active }
          : eachWidget
      );
      return { ...eachCategory, widgets };
    });
  }, []);

  const handleCheckboxChange = useCallback(
    (widgetId) => {
      setAllCategories((prev) => toggleWidgetActive(prev, widgetId));
    },
    [toggleWidgetActive]
  );

  const handleDrawerSubmit = useCallback(() => {
    dispatch(updateAllWidgets([...allCategories]));
    onClose();
  }, [dispatch, allCategories, onClose]);

  useEffect(() => {
    setAllCategories(categories);
  }, [categories]);

  return (
    <div className="AddWidgetActionDrawerContainer">
      <div className="AddWidgetActionDrawer">
        <div className="AddWidgetActionDrawerHeader">
          <span>Add Widget</span>
          <button
            className="AddWidgetActionDrawerCloseButton"
            onClick={onClose}
          >
            <FaXmark />
          </button>
        </div>
        <div className="AddWidgetActionDrawerBody">
          <span className="AddWidgetActionDrawerBodyText">
            Personalise your dashboard by adding the following widget
          </span>
          <div className="AddWidgetActionDrawerBodyWidgets">
            <div className="category_tabs" onClick={handleActiveTab}>
              {allCategories.map((eachCategory) => {
                return (
                  <span
                    key={eachCategory.id}
                    id={eachCategory.id}
                    className={`drawer_category_header ${
                      activeCategoryId === eachCategory.id
                        ? "drawer_active_tab"
                        : ""
                    }`}
                  >
                    {eachCategory.name}
                  </span>
                );
              })}
            </div>
            <div className="drawer_category_widgets">
              {activeCategoryWidgets.map(({ id, active, name }) => {
                return (
                  <div key={id} className="drawer_category_widget">
                    <input
                      type="checkbox"
                      className="drawer_active_widget_input"
                      id={id}
                      checked={active}
                      name={name}
                      onChange={() => handleCheckboxChange(id)}
                    />
                    <label className="drawer_category_widget_text" htmlFor={id}>
                      {name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="AddWidgetActionDrawerBodyButtons">
            <button
              className="AddWidgetActionDrawerBodyButton AddWidgetActionDrawerBodyButtonCancel"
              onClick={onClose}
            >
              cancel
            </button>
            <button
              className="AddWidgetActionDrawerBodyButton AddWidgetActionDrawerBodyButtonSubmit"
              onClick={handleDrawerSubmit}
            >
              confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AddWidgetActionDrawer.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default memo(AddWidgetActionDrawer);
