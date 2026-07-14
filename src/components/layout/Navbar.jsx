import "./Navbar.css";
import ThemeToggle from "../common/ThemeToggle/ThemeToggle";
import ProfileDropdown from "../common/ProfileDropdown/ProfileDropdown";
import { FaBars } from "react-icons/fa";

const Navbar = ({
  setSidebarOpen,
  collapsed,
  setCollapsed,
}) => {

  const handleSidebarToggle = () => {
    if (window.innerWidth <= 991) {
      setSidebarOpen(true);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <nav className="navbar-custom d-flex justify-content-between align-items-center">

      <div className="d-flex align-items-center gap-3">

        <button
          className="navbar-menu-btn"
          onClick={handleSidebarToggle}
        >
          <FaBars />
        </button>

        <h5 className="mb-0 fw-bold">
          
        </h5>

      </div>

      <div className="d-flex align-items-center gap-3 navbar-actions">
        <div className="navbar-search-wrapper">
          <i className="bi bi-search search-icon"></i>
          <input
            className="form-control navbar-search"
            placeholder="Search..."
          />
        </div>

        <i className="bi bi-bell fs-5 navbar-icon"></i>

        <ThemeToggle />

        <ProfileDropdown />
      </div>

    </nav>
  );
};

export default Navbar;