import {
  FaProjectDiagram,
  FaBriefcase,
  FaCodeBranch,
  FaAward,
} from "react-icons/fa";

const StatsCard = () => {
  const stats = [
    {
      title: "Projects",
      value: "28+",
      icon: <FaProjectDiagram />,
      color: "primary",
    },
    {
      title: "Experience",
      value: "8+ Years",
      icon: <FaBriefcase />,
      color: "success",
    },
    {
      title: "Repositories",
      value: "35",
      icon: <FaCodeBranch />,
      color: "warning",
    },
    {
      title: "Certificates",
      value: "12",
      icon: <FaAward />,
      color: "danger",
    },
  ];

  return (
    <div className="profile-card">

      <div className="profile-card-header">
        <h4>Professional Statistics</h4>
        <span>Career Highlights</span>
      </div>

      <div className="stats-grid">

        {stats.map((item, index) => (
          <div className="stats-item" key={index}>

            <div className={`stats-icon ${item.color}`}>
              {item.icon}
            </div>

            <div>
              <h3>{item.value}</h3>
              <p>{item.title}</p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default StatsCard;