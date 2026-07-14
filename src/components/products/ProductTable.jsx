import { useState } from "react";
import "./ProductTable.scss";
import productsData from "../../data/products";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddProductModal from "./AddProductModal";

const ProductTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const [products, setProducts] = useState(productsData);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Categories
  const categories = [
    "All",
    ...new Set(products.map((p) => p.category)),
  ];

  // Filtering
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    const matchesStatus =
      status === "All" ||
      product.status === status;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus
    );
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort(
    (a, b) => {
      if (!sortBy) return 0;

      let valueA = a[sortBy];
      let valueB = b[sortBy];

      if (typeof valueA === "string") {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }

      if (valueA < valueB)
        return sortOrder === "asc" ? -1 : 1;

      if (valueA > valueB)
        return sortOrder === "asc" ? 1 : -1;

      return 0;
    }
  );

  // Pagination
  const totalPages = Math.ceil(
    sortedProducts.length / productsPerPage
  );

  const indexOfLast =
    currentPage * productsPerPage;

  const indexOfFirst =
    indexOfLast - productsPerPage;

  const currentProducts =
    sortedProducts.slice(
      indexOfFirst,
      indexOfLast
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

  const clearFilters = () => {
    setSearchTerm("");
    setCategory("All");
    setStatus("All");

    setSortBy("");
    setSortOrder("asc");
    setCurrentPage(1);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsEditing(false);
    setSelectedProduct(null);
  };

  const handleSaveProduct = (productData) => {
    if (isEditing && selectedProduct) {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === selectedProduct.id
            ? {
                ...product,
                ...productData,
                price: Number(productData.price),
                stock: Number(productData.stock),
                image:
                  productData.image ||
                  product.image ||
                  "https://via.placeholder.com/60",
              }
            : product
        )
      );
    } else {
      const nextId =
        Math.max(0, ...products.map((p) => p.id)) + 1;
      const product = {
        id: nextId,
        ...productData,
        price: Number(productData.price),
        stock: Number(productData.stock),
        image:
          productData.image ||
          "https://via.placeholder.com/60",
      };
      setProducts((prev) => [product, ...prev]);
    }

    handleCloseModal();
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prev) =>
      prev.filter((product) => product.id !== productId)
    );
  };

  return (
    <div className="product-table-card">

      {/* Toolbar */}

      <div className="row g-3 align-items-end mb-4">

        <div className="col-lg-3">
          <label className="form-label fw-semibold">
            Search
          </label>

          <input
            className="form-control"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>

        <div className="col-lg-2">
          <label className="form-label fw-semibold">
            Category
          </label>

          <select
            className="form-select"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >
            {categories.map((cat) => (
              <option key={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="col-lg-2">
          <label className="form-label fw-semibold">
            Status
          </label>

          <select
            className="form-select"
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            <option>All</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>

        <div className="col-lg-2">
          <label className="form-label fw-semibold">
            Sort By
          </label>

          <select
            className="form-select"
            value={`${sortBy}-${sortOrder}`}
            onChange={(e) => {
              const [field, order] =
                e.target.value.split("-");

              setSortBy(field);
              setSortOrder(order);
            }}
          >
            <option value="-asc">
              Default
            </option>

            <option value="name-asc">
              Name (A-Z)
            </option>

            <option value="name-desc">
              Name (Z-A)
            </option>

            <option value="price-asc">
              Price ↑
            </option>

            <option value="price-desc">
              Price ↓
            </option>

            <option value="stock-asc">
              Stock ↑
            </option>

            <option value="stock-desc">
              Stock ↓
            </option>
          </select>
        </div>

        <div className="col-lg-3 d-flex gap-2">

          <button
            className="btn btn-outline-secondary w-50"
            onClick={clearFilters}
          >
            Clear
          </button>

        <button
  className="btn btn-primary w-50"
  onClick={() => setShowModal(true)}
>
  + Add Product
</button>

        </div>

      </div>

      <div className="table-responsive">

        <table className="table align-middle">

          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th width="120">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
{currentProducts.length > 0 ? (
  currentProducts.map((product) => (
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
        <button
          className="btn btn-sm btn-outline-primary me-2"
          onClick={() => handleEditProduct(product)}
          type="button"
        >
          <FaEdit />
        </button>

        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => handleDeleteProduct(product.id)}
          type="button"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td
      colSpan="6"
      className="text-center py-5"
    >
      No products found.
    </td>
  </tr>
)}

</tbody>
</table>
</div>

{/* Footer */}

<div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-3">

  <small className="text-muted">
    Showing{" "}
    <strong>
      {sortedProducts.length === 0
        ? 0
        : indexOfFirst + 1}
    </strong>

    {" "}to{" "}

    <strong>
      {Math.min(
        indexOfLast,
        sortedProducts.length
      )}
    </strong>

    {" "}of{" "}

    <strong>
      {sortedProducts.length}
    </strong>{" "}
    products
  </small>

  <div className="d-flex align-items-center gap-2">

    <button
      className="btn btn-outline-secondary btn-sm"
      disabled={currentPage === 1}
      onClick={() =>
        setCurrentPage((prev) => prev - 1)
      }
    >
      Previous
    </button>

    {Array.from(
      { length: totalPages },
      (_, index) => (
        <button
          key={index}
          className={`btn btn-sm ${
            currentPage === index + 1
              ? "btn-primary"
              : "btn-outline-secondary"
          }`}
          onClick={() =>
            setCurrentPage(index + 1)
          }
        >
          {index + 1}
        </button>
      )
    )}

    <button
      className="btn btn-outline-secondary btn-sm"
      disabled={currentPage === totalPages}
      onClick={() =>
        setCurrentPage((prev) => prev + 1)
      }
    >
      Next
    </button>

  </div>

</div>

      <AddProductModal
        show={showModal}
        handleClose={handleCloseModal}
        handleSave={handleSaveProduct}
        product={selectedProduct}
        isEditing={isEditing}
      />
    </div>
  );
};

export default ProductTable;