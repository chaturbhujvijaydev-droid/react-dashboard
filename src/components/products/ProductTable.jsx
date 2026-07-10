import { useState } from "react";
import "./ProductTable.scss";
import productsData from "../../data/products";
import { FaEdit, FaTrash } from "react-icons/fa";

const ProductTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = productsData;

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusClass = (status) => {
    switch (status) {
      case "In Stock":
        return "status-success";
      case "Low Stock":
        return "status-warning";
      case "Out of Stock":
        return "status-danger";
      default:
        return "";
    }
  };

  return (
    <div className="product-table-card">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <input
          type="text"
          className="form-control"
          style={{ maxWidth: "350px" }}
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="btn btn-primary">
          + Add Product
        </button>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th width="120">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="product-info">
                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      <div>
                        <h6>{product.name}</h6>
                        <small>ID #{product.id}</small>
                      </div>
                    </div>
                  </td>

                  <td>{product.category}</td>

                  <td>₹ {product.price.toLocaleString()}</td>

                  <td>{product.stock}</td>

                  <td>
                    <span
                      className={`status-badge ${getStatusClass(
                        product.status
                      )}`}
                    >
                      {product.status}
                    </span>
                  </td>

                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      <FaEdit />
                    </button>

                    <button className="btn btn-sm btn-outline-danger">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-5">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;