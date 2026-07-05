import Layout from "../../components/layout/Layout";
import StatCard from "../../components/ui/StatCard/StatCard";
import RevenueChart from "../../components/charts/RevenueChart";

import {
  FaUsers,
  FaBox,
  FaShoppingCart,
  FaRupeeSign,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <Layout>
      <h2 className="mb-4">Dashboard</h2>

      <div className="row g-4">

        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Users"
            value="1,245"
            change="+12%"
            icon={<FaUsers />}
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Products"
            value="324"
            change="+5%"
            icon={<FaBox />}
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Orders"
            value="842"
            change="+9%"
            icon={<FaShoppingCart />}
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Revenue"
            value="₹1,25,000"
            change="+18%"
            icon={<FaRupeeSign />}
          />
          <div className="row mt-4">
  <div className="col-12">
    <RevenueChart />
  </div>
</div>
        </div>

      </div>
    </Layout>
  );
};

export default Dashboard;