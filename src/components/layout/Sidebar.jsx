import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaUsers,
  FaBox,
  FaShoppingCart,
  FaCog,
  FaTimes,
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <>
      <div
        className={`sidebar-overlay ${
          sidebarOpen ? "show" : ""
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      <div
        className={`sidebar ${
          sidebarOpen ? "show" : ""
        }`}
      >

        <div className="sidebar-logo">

          <div>

            <h4>🚀 React Dashboard</h4>

            <small>Admin Panel</small>

          </div>

          <button
            className="close-btn"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>

        </div>

        <nav className="mt-4">

          <NavLink
            to="/dashboard"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            <FaHome />
            Dashboard
          </NavLink>

          <NavLink
            to="/users"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            <FaUsers />
            Users
          </NavLink>

          <NavLink
            to="/products"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            <FaBox />
            Products
          </NavLink>

          <NavLink
            to="/orders"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            <FaShoppingCart />
            Orders
          </NavLink>

          <NavLink
            to="/settings"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            <FaCog />
            Settings
          </NavLink>

        </nav>

        <div className="sidebar-footer">

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />

          <div>

            <h6>Vijay</h6>

            <small>Frontend Developer</small>

          </div>

        </div>

      </div>
    </>
  );
};

export default Sidebar;