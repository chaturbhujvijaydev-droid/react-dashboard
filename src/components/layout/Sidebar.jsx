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
  collapsed,
}) => {
  // On mobile always show expanded sidebar
  const isMobile = window.innerWidth <= 991;

  const isExpanded = isMobile || !collapsed;

  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`sidebar ${
          isExpanded ? "expanded" : ""
        } ${sidebarOpen ? "show" : ""}`}
      >
        {/* Logo */}
        <div className="sidebar-logo">
          {isExpanded ? (
            <div className="logo-content">
              <h4>🚀 React Dashboard</h4>
              <small>Admin Panel</small>
            </div>
          ) : (
            <div className="sidebar-brand">
              🚀
            </div>
          )}

          {/* Mobile Close Button */}
          <button
            className="close-btn"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4">

          <NavLink
            to="/dashboard"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            <FaHome />
            {isExpanded && <span>Dashboard</span>}
          </NavLink>

          <NavLink
            to="/users"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            <FaUsers />
            {isExpanded && <span>Users</span>}
          </NavLink>

          <NavLink
            to="/products"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            <FaBox />
            {isExpanded && <span>Products</span>}
          </NavLink>

          <NavLink
            to="/orders"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            <FaShoppingCart />
            {isExpanded && <span>Orders</span>}
          </NavLink>

          <NavLink
            to="/settings"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            <FaCog />
            {isExpanded && <span>Settings</span>}
          </NavLink>

        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />

          {isExpanded && (
            <div className="sidebar-user-info">
              <h6>Vijay</h6>
              <small>Frontend Developer</small>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;