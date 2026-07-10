import products from "../../data/products";
import { FaBox, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from "react-icons/fa";
import "./ProductStats.scss";

const ProductStats = () => {

  const total = products.length;

  const inStock = products.filter(
    p => p.status === "In Stock"
  ).length;

  const lowStock = products.filter(
    p => p.status === "Low Stock"
  ).length;

  const outOfStock = products.filter(
    p => p.status === "Out of Stock"
  ).length;

  const stats = [
    {
      title: "Total Products",
      value: total,
      icon: <FaBox />,
      color: "#2563eb",
    },
    {
      title: "In Stock",
      value: inStock,
      icon: <FaCheckCircle />,
      color: "#16a34a",
    },
    {
      title: "Low Stock",
      value: lowStock,
      icon: <FaExclamationTriangle />,
      color: "#f59e0b",
    },
    {
      title: "Out of Stock",
      value: outOfStock,
      icon: <FaTimesCircle />,
      color: "#dc2626",
    },
  ];

  return (
    <div className="row">

      {stats.map((item, index) => (

        <div
          className="col-lg-3 col-md-6 mb-4"
          key={index}
        >
          <div className="product-stat-card">

            <div
              className="icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>

            <div>
              <h3>{item.value}</h3>
              <p>{item.title}</p>
            </div>

          </div>
        </div>

      ))}

    </div>
  );
};

export default ProductStats;