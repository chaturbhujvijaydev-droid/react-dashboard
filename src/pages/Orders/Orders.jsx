import Layout from "../../components/layout/Layout";
import orderStats from "../../components/Orders/OrderStats";
import OrderTable from "../../components/Orders/OrderTable";

const Orders = () => {
  return (
    <Layout>

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold mb-1">Orders</h2>
          <p className="text-muted mb-0">
            Manage customer orders and track deliveries.
          </p>
        </div>

      </div>

      {/* Statistics */}
      <OrderStats />

      {/* Orders Table */}
      <OrderTable />

    </Layout>
  );
};

export default Orders;