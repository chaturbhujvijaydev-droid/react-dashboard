import {
  Modal,
  Button,
  Badge,
  Image,
} from "react-bootstrap";

import {
  FaUser,
  FaEnvelope,
  FaBoxOpen,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaShoppingBag,
} from "react-icons/fa";

const ViewOrderModal = ({
  show,
  handleClose,
  order,
}) => {
  if (!order) return null;

  const statusVariant = {
    Pending: "warning",
    Processing: "primary",
    Shipped: "info",
    Delivered: "success",
    Cancelled: "danger",
  };

  const paymentVariant = {
    Paid: "success",
    Pending: "warning",
    Refunded: "danger",
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
    >
      <Modal.Header
        closeButton
        className="border-0 pb-0"
      >
        <Modal.Title className="fw-bold">
          Order Details
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>

        {/* Customer Card */}

        <div className="card border-0 shadow-sm mb-4">

          <div className="card-body">

            <div className="d-flex align-items-center">

              <Image
                src={`https://i.pravatar.cc/100?u=${order.email}`}
                roundedCircle
                width={70}
                height={70}
              />

              <div className="ms-3">

                <h5 className="mb-1">
                  {order.customer}
                </h5>

                <div className="text-muted">

                  <FaEnvelope className="me-2" />

                  {order.email}

                </div>

                <div className="mt-2">

                  <Badge
                    bg={statusVariant[order.status]}
                    className="me-2"
                  >
                    {order.status}
                  </Badge>

                  <Badge
                    bg={paymentVariant[order.payment]}
                  >
                    {order.payment}
                  </Badge>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Information */}

        <div className="row g-4">

          <div className="col-md-6">

            <div className="card h-100 border-0 bg-light">

              <div className="card-body">

                <h6 className="fw-bold mb-4">
                  Product Information
                </h6>

                <p>
                  <FaBoxOpen className="me-2 text-primary" />
                  <strong>Product</strong>
                </p>

                <p className="text-muted">
                  {order.product}
                </p>

                <hr />

                <p>
                  <FaShoppingBag className="me-2 text-success" />
                  <strong>Quantity</strong>
                </p>

                <p className="text-muted">
                  {order.quantity}
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-6">

            <div className="card h-100 border-0 bg-light">

              <div className="card-body">

                <h6 className="fw-bold mb-4">
                  Order Information
                </h6>

                <p>
                  <FaMoneyBillWave className="me-2 text-success" />
                  <strong>Total Amount</strong>
                </p>

                <h4 className="text-success">
                  ₹ {order.amount.toLocaleString()}
                </h4>

                <hr />

                <p>
                  <FaCalendarAlt className="me-2 text-warning" />
                  <strong>Order Date</strong>
                </p>

                <p className="text-muted">
                  {order.date}
                </p>

              </div>

            </div>

          </div>

        </div>

      </Modal.Body>

      <Modal.Footer className="border-0">

        <Button
          variant="outline-secondary"
          onClick={handleClose}
        >
          Close
        </Button>

        <Button variant="primary">
          Edit Order
        </Button>

      </Modal.Footer>

    </Modal>
  );
};

export default ViewOrderModal;