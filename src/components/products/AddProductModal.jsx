import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddProductModal = ({
  show,
  handleClose,
  handleSave,
  product,
  isEditing,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    status: "In Stock",
    image: "",
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      category: "",
      price: "",
      stock: "",
      status: "In Stock",
      image: "",
    });
    setValidated(false);
  };

  useEffect(() => {
    if (show && product) {
      setFormData({
        name: product.name || "",
        category: product.category || "",
        price: product.price != null ? String(product.price) : "",
        stock: product.stock != null ? String(product.stock) : "",
        status: product.status || "In Stock",
        image: product.image || "",
      });
      setValidated(false);
      return;
    }

    if (!show) {
      resetForm();
    }
  }, [show, product]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    handleSave({
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
    });
    resetForm();
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
        <Modal.Title>
          {isEditing ? "Edit Product" : "Add New Product"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form
          id="add-product-form"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-md-6 mb-3">
              <Form.Label>
                Product Name
              </Form.Label>

              <Form.Control
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <Form.Label>
                Category
              </Form.Label>

              <Form.Control
                required
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <Form.Label>
                Price
              </Form.Label>

              <Form.Control
                required
                type="number"
                min="0"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <Form.Label>
                Stock
              </Form.Label>

              <Form.Control
                required
                type="number"
                min="0"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <Form.Label>
                Status
              </Form.Label>

              <Form.Select
                required
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>In Stock</option>
                <option>Low Stock</option>
                <option>Out of Stock</option>
              </Form.Select>
            </div>

            <div className="col-md-6 mb-3">
              <Form.Label>
                Image URL
              </Form.Label>

              <Form.Control
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
          </div>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            resetForm();
            handleClose();
          }}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          form="add-product-form"
          variant="primary"
        >
          {isEditing ? "Update Product" : "Save Product"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProductModal;