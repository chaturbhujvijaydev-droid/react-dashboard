import Layout from "../../components/layout/Layout";
import ProfileSettings from "../../components/Settings/ProfileSettings";
import SecuritySettings from "../../components/Settings/SecuritySettings";
import NotificationSettings from "../../components/Settings/NotificationSettings";
import AppearanceSettings from "../../components/Settings/AppearanceSettings";

const Settings = () => {
  return (
    <Layout>

      <div className="mb-4">
        <h2 className="fw-bold">Settings</h2>

        <p className="text-muted">
          Manage your account preferences and dashboard settings.
        </p>
      </div>

      <div className="row g-4">

        <div className="col-lg-6">
          <ProfileSettings />
        </div>

        <div className="col-lg-6">
          <SecuritySettings />
        </div>

        <div className="col-lg-6">
          <NotificationSettings />
        </div>

        <div className="col-lg-6">
          <AppearanceSettings />
        </div>

      </div>

    </Layout>
  );
};

export default Settings;