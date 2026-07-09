import Layout from "../../components/layout/Layout";
import StatCard from "../../components/ui/StatCard/StatCard";
import RevenueChart from "../../components/charts/RevenueChart";
import RecentOrders from "../../components/tables/RecentOrders";


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
        change="+8 New Users"
            icon={<FaUsers />}
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Products"
            value="324"
       change="-2 inactive products"
            icon={<FaBox />}
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Orders"
            value="842"
             change="+18 Orders"
            icon={<FaShoppingCart />}
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Revenue"
            value="$54,240"
          change="+12.8% this month"
            icon={<FaRupeeSign />}
          />
      
</div>
    <div className="row mt-4">
  <div className="col-12">
    <RevenueChart />
  </div>
<div className="row">
  <div className="col-12">
    <RecentOrders />
  </div>
</div>
        </div>

      </div>
    </Layout>
  );
};

export default Dashboard;