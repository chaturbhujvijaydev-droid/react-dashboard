import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const { toggleTheme } = useTheme();

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      <button
        className="profile-btn"
        onClick={() => setOpen(!open)}
      >
        <FaUserCircle size={28} />
        <span>Vijay</span>
      </button>

      {open && (
        <div className="dropdown-menu-custom">

          <button>
            <FaUser />
            My Profile
          </button>

          <button>
            <FaCog />
            Settings
          </button>

          <button onClick={toggleTheme}>
            <FaMoon />
            Toggle Theme
          </button>

          <hr />

          <button>
            <FaSignOutAlt />
            Logout
          </button>

        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;