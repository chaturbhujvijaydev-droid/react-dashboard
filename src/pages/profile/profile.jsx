import Layout from "../../components/layout/Layout";
import ProfileHeader from "../../components/profile/ProfileHeader";
import PersonalInfoCard from "../../components/profile/PersonalInfoCard";
import AboutCard from "../../components/profile/AboutCard";

import "./profile.scss";
import SkillsCard from "../../components/profile/SkillsCard";
import StatsCard from "../../components/profile/StatsCard";
import SocialLinks from "../../components/profile/SocialLinks";

const Profile = () => {
  return (
    <Layout>

      <div className="profile-page">

        <ProfileHeader />
        <PersonalInfoCard />
        <AboutCard />
        <SkillsCard />
        <StatsCard />
        <SocialLinks />



      </div>

    </Layout>
  );
};

export default Profile;