import Layout from "../../components/layout/Layout";
import StatCard from "../../components/ui/StatCard/StatCard";
import RevenueChart from "../../components/charts/RevenueChart/RevenueChart";
import SalesChart from "../../components/charts/SalesChart/SalesChart";
import UsersChart from "../../components/charts/UsersChart/UsersChart";
import RecentOrders from "../../components/orders/RecentOrders";
import ActivityTimeline from "../../components/activity/ActivityTimeline";


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

    <div className="row mt-4">

  <div className="col-lg-7">
    <SalesChart />
  </div>

  <div className="col-lg-5">
       <UsersChart />
  </div>

</div>
  </div>
<div className="row">
  <div className="col-12">
    <RecentOrders />
  </div>
</div>
        </div>

      </div>
      <div className="row mt-4">

  <div className="col-lg-6 mb-4">
    <ActivityTimeline />
  </div>

  <div className="col-lg-6 mb-4">
    {/* Top Selling Products (Next Feature) */}
  </div>

</div>
    </Layout>
  );
};

export default Dashboard;