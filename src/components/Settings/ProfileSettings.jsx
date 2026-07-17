import "./Settings.scss";

const ProfileSettings = () => {
  return (
    <div className="settings-card">

      <h5 className="mb-4">👤 Profile</h5>

      <div className="mb-3">
        <label className="form-label">Full Name</label>

        <input
          type="text"
          className="form-control"
          defaultValue="John Doe"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>

        <input
          type="email"
          className="form-control"
          defaultValue="john@example.com"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone</label>

        <input
          type="text"
          className="form-control"
          defaultValue="+91 9876543210"
        />
      </div>

      <button className="btn btn-primary">
        Save Changes
      </button>

    </div>
  );
};

export default ProfileSettings;