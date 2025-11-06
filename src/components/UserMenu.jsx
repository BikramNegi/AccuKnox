import { FaBell, FaCircleUser } from "react-icons/fa6";

const UserMenu = () => {
  return (
    <>
      <FaBell style={{ color: "#6e6e6e" }} aria-label="Notifications" />
      <FaCircleUser style={{ color: "#6e6e6e" }} aria-label="User profile" />
    </>
  );
};

export default UserMenu;
