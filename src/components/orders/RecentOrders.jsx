import "./RecentOrders.scss";

const orders = [
  {
    id: "#1024",
    product: "MacBook Pro",
    customer: "Vijay",
    amount: "₹2,400",
    status: "Completed",
  },
  {
    id: "#1025",
    product: "iPhone 16",
    customer: "Rahul",
    amount: "₹1,200",
    status: "Pending",
  },
  {
    id: "#1026",
    product: "AirPods",
    customer: "Amit",
    amount: "₹450",
    status: "Processing",
  },
  {
    id: "#1027",
    product: "Monitor",
    customer: "Sneha",
    amount: "₹780",
    status: "Cancelled",
  },
];

const RecentOrders = () => {
  return (
    <div className="orders-card">

      <div className="orders-header">
        <h5>Recent Orders</h5>

        <button className="btn btn-primary btn-sm">
          View All
        </button>
      </div>

      <div className="table-responsive">

        <table className="table orders-table">

          <thead>

            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr key={order.id}>

                <td>{order.id}</td>

                <td>{order.product}</td>

                <td>{order.customer}</td>

                <td>{order.amount}</td>

                <td>
                  <span
                    className={`status ${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td>
                  <button className="btn btn-sm btn-outline-primary me-2">
                    View
                  </button>

                  <button className="btn btn-sm btn-outline-success me-2">
                    Edit
                  </button>

                  <button className="btn btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default RecentOrders;