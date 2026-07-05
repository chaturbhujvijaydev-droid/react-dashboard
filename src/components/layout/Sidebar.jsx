import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaBox,
  FaShoppingCart,
  FaCog,
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="sidebar-logo">
        Admin Panel
      </div>

      <nav className="mt-3">

        <NavLink to="/dashboard" className="nav-link">
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink to="/users" className="nav-link">
          <FaUsers />
          Users
        </NavLink>

        <NavLink to="/products" className="nav-link">
          <FaBox />
          Products
        </NavLink>

        <NavLink to="/orders" className="nav-link">
          <FaShoppingCart />
          Orders
        </NavLink>

        <NavLink to="/settings" className="nav-link">
          <FaCog />
          Settings
        </NavLink>

      </nav>
    </div>
  );
};

export default Sidebar;