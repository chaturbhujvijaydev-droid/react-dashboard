import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding,
  FaUserShield,
  FaCalendarAlt,
} from "react-icons/fa";

const ViewUserModal = ({ show, onClose, user }) => {
  if (!show || !user) return null;

  const statusClass = {
    Active: "bg-success",
    Blocked: "bg-danger",
    Inactive: "bg-warning text-dark",
  };

  const roleClass = {
    Admin: "bg-primary",
    Manager: "bg-info text-dark",
    HR: "bg-warning text-dark",
    Employee: "bg-secondary",
  };

  return (
    <div
      className="modal fade show d-block"
      style={{
        background: "rgba(0,0,0,.55)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">

        <div className="modal-content border-0 rounded-4 shadow-lg">

          {/* Header */}

          <div
            className="text-white p-4"
            style={{
              background:
                "linear-gradient(135deg,#2563eb,#4f46e5)",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
          >
            <div className="d-flex justify-content-between align-items-start">

              <div className="d-flex align-items-center gap-4">

                <img
                  src={user.avatar}
                  alt={user.fullName}
                  width="90"
                  height="90"
                  className="rounded-circle border border-4 border-white shadow"
                />

                <div>

                  <h3 className="mb-1">
                    {user.fullName}
                  </h3>

                  <p className="mb-2 opacity-75">
                    {user.email}
                  </p>

                  <span
                    className={`badge me-2 ${
                      roleClass[user.role] || "bg-secondary"
                    }`}
                  >
                    {user.role}
                  </span>

                  <span
                    className={`badge ${
                      statusClass[user.status] ||
                      "bg-secondary"
                    }`}
                  >
                    {user.status}
                  </span>

                </div>

              </div>

              <button
                className="btn-close btn-close-white"
                onClick={onClose}
              ></button>

            </div>

          </div>

          {/* Body */}

          <div className="modal-body p-4">

            <div className="row g-4">

              <div className="col-md-6">

                <div className="border rounded-4 p-3 h-100">

                  <h6 className="fw-bold mb-4">
                    Personal Information
                  </h6>

                  <div className="mb-3">
                    <FaEnvelope className="me-2 text-primary" />
                    {user.email}
                  </div>

                  <div className="mb-3">
                    <FaPhone className="me-2 text-success" />
                    {user.phone}
                  </div>

                  <div>
                    <FaMapMarkerAlt className="me-2 text-danger" />
                    {user.city}
                  </div>

                </div>

              </div>

              <div className="col-md-6">

                <div className="border rounded-4 p-3 h-100">

                  <h6 className="fw-bold mb-4">
                    Work Information
                  </h6>

                  <div className="mb-3">
                    <FaBuilding className="me-2 text-warning" />
                    {user.department}
                  </div>

                  <div className="mb-3">
                    <FaUserShield className="me-2 text-info" />
                    {user.role}
                  </div>

                  <div>
                    <FaCalendarAlt className="me-2 text-secondary" />
                    {user.joinedDate || "N/A"}
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Footer */}

          <div className="modal-footer border-0">

            <button
              className="btn btn-light"
              onClick={onClose}
            >
              Close
            </button>

            <button className="btn btn-primary">
              Edit User
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ViewUserModal;