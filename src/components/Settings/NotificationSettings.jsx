import "./Settings.scss";

const NotificationSettings = () => {
  return (
    <div className="settings-card">

      <h5 className="mb-4">
        🔔 Notifications
      </h5>

      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          defaultChecked
        />
        <label className="form-check-label">
          Email Notifications
        </label>
      </div>

      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          defaultChecked
        />
        <label className="form-check-label">
          Order Updates
        </label>
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
        />
        <label className="form-check-label">
          Weekly Reports
        </label>
      </div>

    </div>
  );
};

export default NotificationSettings;