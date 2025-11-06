import PropTypes from "prop-types";
import { FaAngleRight } from "react-icons/fa6";

const Breadcrumbs = ({ items }) => {
  return (
    <div className="breadcrumbs">
      {items.map((item, index) => (
        <span key={index} className="breadcrumb">
          <p>{item}</p>
          {index < items.length - 1 && (
            <FaAngleRight
              style={{
                fontSize: "0.5rem",
              }}
            />
          )}
        </span>
      ))}
    </div>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

Breadcrumbs.defaultProps = {
  breadcrumbs: ["Home", "Dashboard v2"],
};

export default Breadcrumbs;
