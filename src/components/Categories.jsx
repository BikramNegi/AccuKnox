import { useSelector, useDispatch } from "react-redux";
import Widget from "./Widget";

const Categories = () => {
  const categories = useSelector((state) => state.dashboard.categories);

  return (
    <>
      {categories.map((eachCategory) => {
        return (
          <div key={eachCategory} className="category">
            <div className="category_header">
              <span>{eachCategory.name}</span>
            </div>

            <div className="category_widgets">
              {eachCategory.widgets.map((eachWidget) => {
                return (
                  eachWidget.active && (
                    <Widget
                      key={eachWidget.id}
                      widgetData={eachWidget}
                      categoryId={eachCategory.id}
                    />
                  )
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Categories;
