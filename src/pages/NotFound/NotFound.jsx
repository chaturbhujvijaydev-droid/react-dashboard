import { Link } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaExclamationTriangle,
} from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";

import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found">

      <div className="not-found-card">

        <div className="icon-wrapper">
          <TbLayoutDashboardFilled />
        </div>

        <h1>404</h1>

        <h2>Oops! Lost in the Dashboard?</h2>

        <p>
          The page you're looking for doesn't exist,
          has been moved, or is taking a coffee break ☕.
        </p>

        <div className="alert-box">
          <FaExclamationTriangle />
          <span>
            Don't worry! Let's get you back on track.
          </span>
        </div>

        <div className="button-group">

          <Link
            to="/dashboard"
            className="btn-home"
          >
            <FaHome />
            Dashboard
          </Link>

          {/* <button className="btn-search">
            <FaSearch />
            Search
          </button> */}

        </div>

        <div className="footer-text">
          ReactAdmin Dashboard • v1.0
        </div>

      </div>

    </div>
  );
};

export default NotFound;