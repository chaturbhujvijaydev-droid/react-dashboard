import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaReact,
  FaMobileAlt,
} from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  // If already logged in, redirect to dashboard
  if (localStorage.getItem("isAuthenticated")) {
    return <Navigate to="/dashboard" replace />;
    // If your dashboard route is "/dashboard", use:
    // return <Navigate to="/dashboard" replace />;
  }

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      if (
        email === "admin@reactadmin.com" &&
        password === "Admin@123"
      ) {
        localStorage.setItem("isAuthenticated", "true");

        localStorage.setItem(
          "user",
          JSON.stringify({
            name: "Admin User",
            email: "admin@reactadmin.com",
          })
        );

        navigate("/dashboard");
        // If your dashboard route is "/dashboard"
        // navigate("/dashboard");
      } else {
        alert("Invalid Email or Password");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Logo */}
        <div className="login-logo">
          <div className="logo-icon">
            <TbLayoutDashboardFilled />
          </div>

          <div>
            <h2>ReactAdmin</h2>
            <span>Enterprise Dashboard</span>
          </div>
        </div>

        {/* Heading */}
        <div className="login-header">
          <h1>Welcome Back 👋</h1>

          <p>Sign in to continue to your dashboard.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="form-group">
            <label>Email Address</label>

            <div className="input-box">
              <FaEnvelope />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>

            <div className="input-box">
              <FaLock />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Demo Credentials */}
          <div className="demo-login">
            <h6>Demo Credentials</h6>

            <p>
              <strong>Email:</strong> admin@reactadmin.com
            </p>

            <p>
              <strong>Password:</strong> Admin@123
            </p>
          </div>
        </form>

        {/* Features */}
        <div className="login-features">
          <div className="feature">
            <FaShieldAlt />
            <span>Secure Login</span>
          </div>

          <div className="feature">
            <FaReact />
            <span>React 19</span>
          </div>

          <div className="feature">
            <FaMobileAlt />
            <span>Responsive UI</span>
          </div>
        </div>

        {/* Footer */}
        <div className="login-footer">
          © 2026 ReactAdmin Dashboard
        </div>
      </div>
    </div>
  );
};

export default Login;