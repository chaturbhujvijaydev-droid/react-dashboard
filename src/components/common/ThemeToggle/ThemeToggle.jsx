import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../../../hooks/useTheme";
import "./ThemeToggle.scss";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switch" onClick={toggleTheme}>
      <div className={`switch-slider ${theme}`}>
        {theme === "light" ? (
          <FaMoon className="icon" />
        ) : (
          <FaSun className="icon" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;