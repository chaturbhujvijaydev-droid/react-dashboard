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
  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`sidebar ${
          !collapsed ? "expanded" : ""
        } ${sidebarOpen ? "show" : ""}`}
      >
        {/* Logo */}
        <div className="sidebar-logo">

  {collapsed ? (
    <div className="sidebar-brand">
      🚀
    </div>
  ) : (
    <div className="logo-content">
      
      <h4> 🚀 React Dashboard</h4>
      <small>Admin Panel</small>
    </div>
  )}

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
            {!collapsed && <span>Dashboard</span>}
          </NavLink>

          <NavLink
            to="/users"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            <FaUsers />
            {!collapsed && <span>Users</span>}
          </NavLink>

          <NavLink
            to="/products"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            <FaBox />
            {!collapsed && <span>Products</span>}
          </NavLink>

          <NavLink
            to="/orders"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            <FaShoppingCart />
            {!collapsed && <span>Orders</span>}
          </NavLink>

          <NavLink
            to="/settings"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            <FaCog />
            {!collapsed && <span>Settings</span>}
          </NavLink>

        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />

          {!collapsed && (
            <div className="sidebar-user-info">
              <h6>Vijay</h6>
              <small>Frontend Developer</small>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;