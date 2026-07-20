import {
  FaCamera,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

const ProfileHeader = () => {
  const user =
    JSON.parse(localStorage.getItem("user")) || {
      name: "Vijay Chaturbhuj",
      email: "admin@reactadmin.com",
    };

  return (
    <div className="profile-header">

      <div className="profile-avatar">

        <img
          src="https://i.pravatar.cc/200"
          alt="Profile"
        />

        <button className="camera-btn">
          <FaCamera />
        </button>

      </div>

      <div className="profile-info">

        <h2>{user.name}</h2>

        <h5>Senior Frontend Developer</h5>

        <p>
          Building scalable React applications with
          modern UI, reusable components and clean
          architecture.
        </p>

        <div className="profile-meta">

          <span>
            <FaEnvelope />
            {user.email}
          </span>

          <span>
            <FaPhone />
            +91 9876543210
          </span>

          <span>
            <FaMapMarkerAlt />
            Hyderabad, India
          </span>

          <span>
            <FaBriefcase />
            8+ Years Experience
          </span>

        </div>

      </div>

      <button className="edit-profile-btn">
        Edit Profile
      </button>

    </div>
  );
};

export default ProfileHeader;