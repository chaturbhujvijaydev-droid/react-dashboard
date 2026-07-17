import {
  FaUsers,
  FaUserCheck,
  FaUserSlash,
  FaUserShield,
} from "react-icons/fa";

import "./UserStats.scss";

const UserStats = ({
  totalUsers,
  activeUsers,
  blockedUsers,
  adminUsers,
}) => {
  const stats = [
    {
      title: "Total Users",
      value: totalUsers,
      icon: <FaUsers />,
      color: "primary",
    },
    {
      title: "Active Users",
      value: activeUsers,
      icon: <FaUserCheck />,
      color: "success",
    },
    {
      title: "Blocked Users",
      value: blockedUsers,
      icon: <FaUserSlash />,
      color: "danger",
    },
    {
      title: "Admins",
      value: adminUsers,
      icon: <FaUserShield />,
      color: "info",
    },
  ];

  return (
    <div className="row g-4 mb-4">
      {stats.map((item, index) => (
        <div
          className="col-xl-3 col-lg-6 col-md-6"
          key={index}
        >
          <div className="user-stat-card">

            <div className={`stat-icon ${item.color}`}>
              {item.icon}
            </div>

            <div className="stat-content">
              <small>{item.title}</small>
              <h3>{item.value}</h3>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default UserStats;