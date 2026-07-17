import ThemeToggle from "../common/ThemeToggle/ThemeToggle";
import "./Settings.scss";

const AppearanceSettings = () => {
  return (
    <div className="settings-card">

      <h5 className="mb-4">
        🎨 Appearance
      </h5>

      <div className="d-flex justify-content-between align-items-center">

        <span>Dark Mode</span>

        <ThemeToggle />

      </div>

    </div>
  );
};

export default AppearanceSettings;