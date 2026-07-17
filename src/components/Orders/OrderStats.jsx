import {
  FaShoppingCart,
  FaCheckCircle,
  FaClock,
  FaTruck,
  FaTimesCircle,
} from "react-icons/fa";

import "./OrderStats.scss";

const OrderStats = ({
  totalOrders,
  delivered,
  pending,
  processing,
  cancelled,
}) => {
  const stats = [
    {
      title: "Total Orders",
      value: totalOrders,
      icon: <FaShoppingCart />,
      color: "primary",
    },
    {
      title: "Delivered",
      value: delivered,
      icon: <FaCheckCircle />,
      color: "success",
    },
    {
      title: "Processing",
      value: processing,
      icon: <FaTruck />,
      color: "info",
    },
    {
      title: "Pending",
      value: pending,
      icon: <FaClock />,
      color: "warning",
    },
    {
      title: "Cancelled",
      value: cancelled,
      icon: <FaTimesCircle />,
      color: "danger",
    },
  ];

  return (
    <div className="row g-4 mb-4">
      {stats.map((item, index) => (
        <div
          className="col-xl col-lg-4 col-md-6 col-sm-6"
          key={index}
        >
          <div className="order-stat-card">
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

export default OrderStats;