import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import "./SalesChart.scss";

const data = [
  { month: "Jan", sales: 180 },
  { month: "Feb", sales: 240 },
  { month: "Mar", sales: 320 },
  { month: "Apr", sales: 280 },
  { month: "May", sales: 390 },
  { month: "Jun", sales: 450 },
];

const SalesChart = () => {
  return (
    <div className="sales-chart-card">

      <div className="chart-header">
        <h5>Monthly Sales</h5>
        <span>Last 6 Months</span>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="sales"
            fill="#2563eb"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default SalesChart;