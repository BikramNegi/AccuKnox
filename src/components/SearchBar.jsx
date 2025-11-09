import PropTypes from "prop-types";
import { useState, useCallback, useRef, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import { useSelector } from "react-redux";

const SearchBar = ({
  placeholder = "Search anything",
  className = "search_box",
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const categories = useSelector((state) => state.dashboard.categories);
  const categoriesRef = useRef(categories);

  useEffect(() => {
    categoriesRef.current = categories;
  }, [categories]);

  const searchHandler = useCallback((searchTerm) => {
    setSearchResults([]);
    categoriesRef.current.forEach((category) => {
      const filteredWidgets = category.widgets.filter((widget) =>
        widget.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults((prev) => [...prev, ...filteredWidgets]);
    });
  }, []);

  const handleSearch = useDebounce(searchHandler, 500);

  const handleSearchChange = useCallback(
    (e) => {
      const searchTerm = e.target.value;
      if (searchTerm.length > 0) {
        setSearchValue(searchTerm);
        handleSearch(searchTerm);
      } else {
        setSearchValue("");
        setSearchResults([]);
      }
    },
    [handleSearch]
  );

  return (
    <div className="search_box_container">
      <input
        type="text"
        placeholder={placeholder}
        className={className}
        name="search_box"
        aria-label="Search input"
        onChange={handleSearchChange}
        value={searchValue}
      />
      {searchResults.length > 0 && (
        <div className="search_box_result">
          {searchResults.map((result) => (
            <div key={result.id} className="search_box_result_item">
              {result.name}
            </div>
          ))}
        </div>
      )}
    </div>
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
