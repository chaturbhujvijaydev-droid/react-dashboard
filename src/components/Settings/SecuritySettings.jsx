import "./Settings.scss";

const SecuritySettings = () => {
  return (
    <div className="settings-card">

      <h5 className="mb-4">🔒 Security</h5>

      <div className="mb-3">
        <label className="form-label">
          Current Password
        </label>

        <input
          type="password"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          New Password
        </label>

        <input
          type="password"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Confirm Password
        </label>

        <input
          type="password"
          className="form-control"
        />
      </div>

      <button className="btn btn-danger">
        Update Password
      </button>

    </div>
  );
};

export default SecuritySettings;