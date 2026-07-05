import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-custom d-flex justify-content-between align-items-center">

      <h4 className="mb-0 fw-bold">Dashboard</h4>

      <div className="d-flex align-items-center gap-3">

        <input
          className="form-control"
          style={{ width: "250px" }}
          placeholder="Search..."
        />

        <i className="bi bi-bell fs-5"></i>

        <i className="bi bi-chat-left-text fs-5"></i>

        <div className="d-flex align-items-center gap-2">

          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="rounded-circle"
          />

          <span>Vijay</span>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;