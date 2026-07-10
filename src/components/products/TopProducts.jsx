import "./TopProducts.scss";

const products = [
  {
    id: 1,
    image: "https://picsum.photos/60?random=1",
    name: "Nike Shoes",
    sales: 900,
    progress: 90,
  },
  {
    id: 2,
    image: "https://picsum.photos/60?random=2",
    name: "MacBook Pro",
    sales: 820,
    progress: 82,
  },
  {
    id: 3,
    image: "https://picsum.photos/60?random=3",
    name: "AirPods Pro",
    sales: 750,
    progress: 75,
  },
  {
    id: 4,
    image: "https://picsum.photos/60?random=4",
    name: "iPhone 16",
    sales: 650,
    progress: 65,
  },
];

const TopProducts = () => {
  return (
    <div className="top-products-card">

      <div className="top-products-header">
        <h5>Top Selling Products</h5>

        <button className="btn btn-sm btn-primary">
          View All
        </button>
      </div>

      {products.map((product) => (

        <div
          className="product-item"
          key={product.id}
        >

          <img
            src={product.image}
            alt={product.name}
          />

          <div className="product-info">

            <div className="product-title">

              <h6>{product.name}</h6>

              <span>{product.sales} Sold</span>

            </div>

            <div className="progress">

              <div
                className="progress-bar"
                style={{
                  width: `${product.progress}%`,
                }}
              >
                {product.progress}%
              </div>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
};

export default TopProducts;