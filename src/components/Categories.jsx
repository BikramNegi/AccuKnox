import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import Widget from "./Widget";
import AddWidgetAction from "./AddWidgetAction";
import AddWidgetActionDrawer from "./AddWidgetActionDrawer";

const Categories = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  const [showAddWidgetActionDrawer, setShowAddWidgetActionDrawer] =
    useState(false);

  const showAddWidgetActionDrawerHandler = () => {
    setShowAddWidgetActionDrawer((prev) => !prev);
  };

  const activeWidgetsByCategory = useMemo(() => {
    const active = categories.map((category) => ({
      ...category,
      widgets: category.widgets.filter((widget) => widget.active),
    }));
    return active;
  }, [categories]);

  return (
    <>
      {showAddWidgetActionDrawer && (
        <AddWidgetActionDrawer onClose={showAddWidgetActionDrawerHandler} />
      )}
      {activeWidgetsByCategory.map((eachCategory) => {
        return (
          <div key={eachCategory.id} className="category">
            <div className="category_header">
              <span>{eachCategory.name}</span>
            </div>

            <div className="category_widgets">
              {eachCategory.widgets.map((eachWidget) => (
                <Widget
                  key={eachWidget.id}
                  widgetData={eachWidget}
                  categoryId={eachCategory.id}
                />
              ))}
              <AddWidgetAction openDrawer={showAddWidgetActionDrawerHandler} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Categories;
