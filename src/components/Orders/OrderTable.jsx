import { useState } from "react";
import ordersData from "../../data/orders";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import "./OrderTable.scss";
import AddOrderModal from "./AddOrderModal";
import ViewOrderModal from "./ViewOrderModal";


const OrderTable = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
const [showViewModal, setShowViewModal] = useState(false);
const [orders, setOrders] = useState(ordersData);
const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("All");
  const [payment, setPayment] = useState("All");

  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const [currentPage, setCurrentPage] = useState(1);

  const ordersPerPage = 10;

  // Filtering
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      order.product
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      order.id
        .toString()
        .includes(searchTerm);

    const matchesStatus =
      status === "All" ||
      order.status === status;

    const matchesPayment =
      payment === "All" ||
      order.payment === payment;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPayment
    );
  });

  // Sorting
  const sortedOrders = [...filteredOrders].sort(
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
    sortedOrders.length / ordersPerPage
  );

  const indexOfLast =
    currentPage * ordersPerPage;

  const indexOfFirst =
    indexOfLast - ordersPerPage;

  const currentOrders =
    sortedOrders.slice(
      indexOfFirst,
      indexOfLast
    );

  const getStatusClass = (status) => {
    switch (status) {
      case "Delivered":
        return "status-success";

      case "Pending":
        return "status-warning";

      case "Processing":
        return "status-primary";

      case "Cancelled":
        return "status-danger";

      case "Shipped":
        return "status-info";

      default:
        return "";
    }
  };

  const getPaymentClass = (payment) => {
    switch (payment) {
      case "Paid":
        return "status-success";

      case "Pending":
        return "status-warning";

      case "Refunded":
        return "status-danger";

      default:
        return "";
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setStatus("All");
    setPayment("All");
    setSortBy("");
    setSortOrder("asc");
    setCurrentPage(1);
  };

  const handleSaveOrder = (newOrder) => {
  const order = {
    id: orders.length + 1,
    ...newOrder,
    amount: Number(newOrder.amount),
    quantity: Number(newOrder.quantity),
  };

  setOrders((prev) => [order, ...prev]);
};

  return (
    <div className="order-table-card">

      {/* Toolbar */}

      <div className="row g-3 align-items-end mb-4">

        <div className="col-lg-3">
          <label className="form-label fw-semibold">
            Search
          </label>

          <input
            className="form-control"
            placeholder="Search order..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />
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
            <option>Pending</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
        </div>

        <div className="col-lg-2">
          <label className="form-label fw-semibold">
            Payment
          </label>

          <select
            className="form-select"
            value={payment}
            onChange={(e) =>
              setPayment(e.target.value)
            }
          >
            <option>All</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Refunded</option>
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

            <option value="customer-asc">
              Customer A-Z
            </option>

            <option value="customer-desc">
              Customer Z-A
            </option>

            <option value="amount-asc">
              Amount ↑
            </option>

            <option value="amount-desc">
              Amount ↓
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
  + New Order
</button>

        </div>

      </div>

      {/* Table */}

      <div className="table-responsive">

        <table className="table align-middle">

          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Date</th>
              <th width="150">Actions</th>
            </tr>
          </thead>

          <tbody>

            {currentOrders.length > 0 ? (

              currentOrders.map((order) => (

                <tr key={order.id}>

                  <td>#{order.id}</td>

                  <td>
                    <strong>{order.customer}</strong>
                    <br />
                    <small>{order.email}</small>
                  </td>

                  <td>{order.product}</td>

                  <td>
                    ₹ {order.amount.toLocaleString()}
                  </td>

                  <td>
                    <span
                      className={`status-badge ${getPaymentClass(order.payment)}`}
                    >
                      {order.payment}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`status-badge ${getStatusClass(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>{order.date}</td>

                  <td>

                   <button
  className="btn btn-sm btn-outline-info me-2"
  onClick={() => {
    setSelectedOrder(order);
    setShowViewModal(true);
  }}
>
  <FaEye />
</button>

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
                <td
                  colSpan="8"
                  className="text-center py-5"
                >
                  No Orders Found
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

      {/* Footer */}

      <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-3">

        <small className="text-muted">

          Showing

          <strong> {sortedOrders.length === 0 ? 0 : indexOfFirst + 1}</strong>

          {" "}to{" "}

          <strong>
            {Math.min(
              indexOfLast,
              sortedOrders.length
            )}
          </strong>

          {" "}of{" "}

          <strong>{sortedOrders.length}</strong>

          {" "}orders

        </small>

        <div className="d-flex gap-2">

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
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() =>
              setCurrentPage((prev) => prev + 1)
            }
          >
            Next
          </button>

        </div>

      </div>
    <AddOrderModal
  show={showModal}
  handleClose={() => setShowModal(false)}
  handleSave={handleSaveOrder}
/>
  <ViewOrderModal
      show={showViewModal}
      handleClose={() => setShowViewModal(false)}
      order={selectedOrder}
    />
    </div>

    

 
  );
 
};

export default OrderTable;