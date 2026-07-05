import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

import "./RevenueChart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RevenueChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

    datasets: [
      {
        label: "Revenue",

        data: [12000, 19000, 15000, 28000, 32000, 26000],

        borderColor: "#2563eb",

        backgroundColor: "rgba(37,99,235,.15)",

        tension: 0.4,

        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="chart-card">
      <h5 className="mb-4">Revenue Overview</h5>

      <Line data={data} options={options} />
    </div>
  );
};

export default RevenueChart;