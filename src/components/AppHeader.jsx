
import Breadcrumbs from "./Breadcrumbs";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

const AppHeader = () => {
  return (
    <div className="appHeader">
      <Breadcrumbs items={["Home", "Dashboard"]} />
      <div className="app_header_right_Menu">
        <SearchBar />
        <UserMenu />
      </div>
    </div>
  );
};

export default AppHeader;
