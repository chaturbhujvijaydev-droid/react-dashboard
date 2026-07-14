import orders from "../../data/orders";
import {
  FaShoppingCart,
  FaRupeeSign,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";

import "./OrderStats.scss";

const OrderStats = () => {
  const totalOrders = orders.length;

  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.amount,
    0
  );

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  const stats = [
    {
      title: "Total Orders",
      value: totalOrders,
      icon: <FaShoppingCart />,
      color: "primary",
    },
    {
      title: "Revenue",
      value: `₹ ${totalRevenue.toLocaleString()}`,
      icon: <FaRupeeSign />,
      color: "success",
    },
    {
      title: "Pending",
      value: pendingOrders,
      icon: <FaTruck />,
      color: "warning",
    },
    {
      title: "Delivered",
      value: deliveredOrders,
      icon: <FaCheckCircle />,
      color: "info",
    },
  ];

  return (
    <div className="row g-4 mb-4">
      {stats.map((item, index) => (
        <div className="col-xl-3 col-md-6" key={index}>
          <div className="order-stat-card">

            <div className={`stat-icon ${item.color}`}>
              {item.icon}
            </div>

            <div>
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