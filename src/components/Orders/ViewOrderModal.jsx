import { Modal, Button, Badge } from "react-bootstrap";

const ViewOrderModal = ({ show, handleClose, order }) => {
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
      <Modal.Header closeButton>
        <Modal.Title>
          Order #{order.id}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <div className="row g-4">

          <div className="col-md-6">
            <h6>Customer</h6>

            <p className="mb-1">
              <strong>{order.customer}</strong>
            </p>

            <p className="text-muted">
              {order.email}
            </p>
          </div>

          <div className="col-md-6">
            <h6>Product</h6>

            <p>{order.product}</p>
          </div>

          <div className="col-md-4">
            <h6>Amount</h6>

            <p>
              ₹ {order.amount.toLocaleString()}
            </p>
          </div>

          <div className="col-md-4">
            <h6>Payment</h6>

            <Badge bg={paymentVariant[order.payment]}>
              {order.payment}
            </Badge>
          </div>

          <div className="col-md-4">
            <h6>Status</h6>

            <Badge bg={statusVariant[order.status]}>
              {order.status}
            </Badge>
          </div>

          <div className="col-md-6">
            <h6>Order Date</h6>

            <p>{order.date}</p>
          </div>

          <div className="col-md-6">
            <h6>Quantity</h6>

            <p>{order.quantity}</p>
          </div>

        </div>

      </Modal.Body>

      <Modal.Footer>

        <Button
          variant="secondary"
          onClick={handleClose}
        >
          Close
        </Button>

      </Modal.Footer>
    </Modal>
  );
};

export default ViewOrderModal;