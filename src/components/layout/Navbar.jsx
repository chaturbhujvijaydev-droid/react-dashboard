import "./Navbar.css";
import ThemeToggle from "../common/ThemeToggle/ThemeToggle";
import ProfileDropdown from "../common/ProfileDropdown/ProfileDropdown";
import { FaBars } from "react-icons/fa";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <nav className="navbar-custom d-flex justify-content-between align-items-center">

      <div className="d-flex align-items-center gap-3">

        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>

        <h5 className="mb-0 fw-bold">
          
        </h5>

      </div>

      <div className="d-flex align-items-center gap-3">

        <input
          className="form-control navbar-search"
          placeholder="Search..."
        />

        <i className="bi bi-bell fs-5"></i>

        <ThemeToggle />

        <ProfileDropdown />

      </div>

    </nav>
  );
};

export default Navbar;