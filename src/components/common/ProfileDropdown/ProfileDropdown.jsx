import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaMoon,
} from "react-icons/fa";

import useTheme from "../../../hooks/useTheme";
import "./ProfileDropdown.scss";

const ProfileDropdown = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const { toggleTheme } = useTheme();

  const dropdownRef = useRef(null);

  // Get logged in user
  const user =
    JSON.parse(localStorage.getItem("user")) || {
      name: "Admin",
    };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");

    setOpen(false);

    navigate("/");
  };

  const goToSettings = () => {
    setOpen(false);

    navigate("/settings");
  };

  const goToDashboard = () => {
    setOpen(false);

    navigate("/settings");
  };

  return (
    <div
      className="profile-dropdown"
      ref={dropdownRef}
    >
      <button
        className="profile-btn"
        onClick={() => setOpen(!open)}
      >
        <FaUserCircle size={28} />

        <span>{user.name}</span>
      </button>

      {open && (
        <div className="dropdown-menu-custom">

          <button onClick={goToDashboard}>
            <FaUser />
            My Profile
          </button>

          <button onClick={goToSettings}>
            <FaCog />
            Settings
          </button>

          <button
            onClick={() => {
              toggleTheme();
              setOpen(false);
            }}
          >
            <FaMoon />
            Toggle Theme
          </button>

          <hr />

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;