import Layout from "../../components/layout/Layout";
import OrderStats from "../../components/Orders/OrderStats";
import OrderTable from "../../components/Orders/OrderTable";

import ordersData from "../../data/orders";

const Orders = () => {
  const totalOrders = ordersData.length;

  const delivered = ordersData.filter(
    (o) => o.status === "Delivered"
  ).length;

  const pending = ordersData.filter(
    (o) => o.status === "Pending"
  ).length;

  const processing = ordersData.filter(
    (o) => o.status === "Processing"
  ).length;

  const cancelled = ordersData.filter(
    (o) => o.status === "Cancelled"
  ).length;

  return (
    <Layout>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Orders</h2>

          <p className="text-muted mb-0">
            Manage customer orders and track deliveries.
          </p>
        </div>
      </div>

      <OrderStats
        totalOrders={totalOrders}
        delivered={delivered}
        pending={pending}
        processing={processing}
        cancelled={cancelled}
      />

      <OrderTable />
    </Layout>
  );
};

export default Orders;