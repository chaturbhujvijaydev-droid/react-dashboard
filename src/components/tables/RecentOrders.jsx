import "./RecentOrders.scss";
import { orders } from "../../data/dashboardData";

const getBadgeClass = (status) => {
  switch (status) {
    case "Delivered":
      return "bg-success";
    case "Pending":
      return "bg-warning text-dark";
    case "Processing":
      return "bg-primary";
    default:
      return "bg-secondary";
  }
};

const RecentOrders = () => {
  return (
    <div className="orders-card">
      <h5 className="mb-4">Recent Orders</h5>

      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>
                <span className={`badge ${getBadgeClass(order.status)}`}>
                  {order.status}
                </span>
              </td>
              <td>{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;