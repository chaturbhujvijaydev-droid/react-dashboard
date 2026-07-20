import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaIdBadge,
  FaUserTie,
} from "react-icons/fa";

const PersonalInfoCard = () => {
  const user = {
    employeeId: "EMP-1001",
    email: "vijay@example.com",
    phone: "+91 9876543210",
    location: "Hyderabad, India",
    company: "Indegene Pvt Ltd",
    department: "Engineering",
    designation: "Senior Frontend Developer",
    experience: "8+ Years",
    joiningDate: "15 Oct 2021",
  };

  const details = [
    {
      icon: <FaIdBadge />,
      label: "Employee ID",
      value: user.employeeId,
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: user.email,
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: user.phone,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: user.location,
    },
    {
      icon: <FaBuilding />,
      label: "Company",
      value: user.company,
    },
    {
      icon: <FaUserTie />,
      label: "Department",
      value: user.department,
    },
    {
      icon: <FaBriefcase />,
      label: "Experience",
      value: user.experience,
    },
    {
      icon: <FaCalendarAlt />,
      label: "Joining Date",
      value: user.joiningDate,
    },
  ];

  return (
    <div className="profile-card">

      <div className="profile-card-header">

        <h4>Personal Information</h4>

        <span>Employee Details</span>

      </div>

      <div className="personal-info-grid">

        {details.map((item, index) => (

          <div
            className="personal-info-item"
            key={index}
          >

            <div className="info-icon">
              {item.icon}
            </div>

            <div>

              <small>{item.label}</small>

              <h6>{item.value}</h6>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default PersonalInfoCard;