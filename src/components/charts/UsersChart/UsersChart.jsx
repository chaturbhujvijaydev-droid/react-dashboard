import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import "./UsersChart.scss";

const data = [
  { name: "Desktop", value: 58 },
  { name: "Mobile", value: 30 },
  { name: "Tablet", value: 12 },
];

const COLORS = [
  "#2563eb",
  "#22c55e",
  "#f59e0b",
];

const UsersChart = () => {
  return (
    <div className="users-chart-card">

      <div className="chart-header">
        <h5>Users by Device</h5>
        <span>Today</span>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={65}
            outerRadius={95}
            paddingAngle={4}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend
            verticalAlign="bottom"
            iconType="circle"
          />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default UsersChart;