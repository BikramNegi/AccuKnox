import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { useState, useCallback, memo, lazy, Suspense } from "react";
import Widget from "./Widget";
import AddWidgetAction from "./AddWidgetAction";
const AddWidgetActionDrawer = lazy(() => import("./AddWidgetActionDrawer"));

const selectActiveWidgetsByCategory = createSelector(
  (state) => state.dashboard.categories,
  (categories) =>
    categories.map((category) => ({
      ...category,
      widgets: category.widgets.filter((widget) => widget.active),
    }))
);

const Categories = () => {
  const activeWidgetsByCategory = useSelector(selectActiveWidgetsByCategory);
  const [showAddWidgetActionDrawer, setShowAddWidgetActionDrawer] =
    useState(false);

  const showAddWidgetActionDrawerHandler = useCallback(() => {
    setShowAddWidgetActionDrawer((prev) => !prev);
  }, []);

  return (
    <>
      {showAddWidgetActionDrawer && (
        <Suspense fallback={<div>Loading AddWidgetActionDrawer...</div>}>
          <AddWidgetActionDrawer onClose={showAddWidgetActionDrawerHandler} />
        </Suspense>
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

export default memo(Categories);
