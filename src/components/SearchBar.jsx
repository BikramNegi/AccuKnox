import PropTypes from "prop-types";

const SearchBar = ({
  placeholder = "Search anything",
  className = "search_box",
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={className}
      name="search_box"
      aria-label="Search input"
    />
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

SearchBar.defaultProps = {
  placeholder: "Search anything",
  className: "search_box",
};

export default SearchBar;
