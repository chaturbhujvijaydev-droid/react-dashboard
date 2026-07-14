import "./Navbar.css";
import ThemeToggle from "../common/ThemeToggle/ThemeToggle";
import ProfileDropdown from "../common/ProfileDropdown/ProfileDropdown";
import { FaBars } from "react-icons/fa";

const Navbar = ({
  setSidebarOpen,
  collapsed,
  setCollapsed,
}) => {

  const handleMenu = () => {
    if (window.innerWidth <= 991) {
      setSidebarOpen(true);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <header className="navbar-custom">

      <button
        className="navbar-menu-btn"
        onClick={handleMenu}
      >
        <FaBars />
      </button>

      <div className="navbar-right">

        <input
          className="form-control navbar-search"
          placeholder="Search..."
        />

        <button className="icon-btn">
          <i className="bi bi-bell"></i>
        </button>

     <div className="navbar-theme">
  <ThemeToggle />
</div>

        <ProfileDropdown />

      </div>

    </header>
  );
};

export default Navbar;