import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddOrderModal = ({
  show,
  handleClose,
  handleSave,
}) => {
  const initialState = {
    customer: "",
    email: "",
    product: "",
    amount: "",
    quantity: "",
    payment: "Paid",
    status: "Pending",
    date: new Date().toLocaleDateString("en-GB"),
  };

  const [formData, setFormData] =
    useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSave = () => {
    if (
      !formData.customer ||
      !formData.product ||
      !formData.amount
    ) {
      alert("Please fill all required fields.");
      return;
    }

    handleSave(formData);

    setFormData(initialState);

    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Order</Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <div className="row g-3">

          <div className="col-md-6">
            <Form.Label>Customer</Form.Label>

            <Form.Control
              name="customer"
              value={formData.customer}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <Form.Label>Email</Form.Label>

            <Form.Control
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <Form.Label>Product</Form.Label>

            <Form.Control
              name="product"
              value={formData.product}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <Form.Label>Amount</Form.Label>

            <Form.Control
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <Form.Label>Quantity</Form.Label>

            <Form.Control
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <Form.Label>Payment</Form.Label>

            <Form.Select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <option>Paid</option>
              <option>Pending</option>
              <option>Refunded</option>
            </Form.Select>
          </div>

          <div className="col-md-6">
            <Form.Label>Status</Form.Label>

            <Form.Select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option>Pending</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </Form.Select>
          </div>

        </div>

      </Modal.Body>

      <Modal.Footer>

        <Button
          variant="secondary"
          onClick={handleClose}
        >
          Cancel
        </Button>

        <Button
          variant="primary"
          onClick={onSave}
        >
          Save Order
        </Button>

      </Modal.Footer>
    </Modal>
  );
};

export default AddOrderModal;