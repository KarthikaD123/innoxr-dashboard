import "./Sidebar.css";
import { useNavigate, Link, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="sidebar">

      <Link
        to="/dashboard"
        style={{ textDecoration: "none" }}
      >
        <h2 className="logo">
          Inno<span>XR</span>
        </h2>
      </Link>

      <ul className="menu">

        <li
          className={location.pathname === "/dashboard" ? "active" : ""}
          onClick={() => navigate("/dashboard")}
        >
          🏠 Dashboard
        </li>

        <li
          className={location.pathname === "/devices" ? "active" : ""}
          onClick={() => navigate("/devices")}
        >
          🖥 Devices
        </li>

        <li
          className={location.pathname === "/analytics" ? "active" : ""}
          onClick={() => navigate("/analytics")}
        >
          📊 Analytics
        </li>

        <li
          className={location.pathname === "/settings" ? "active" : ""}
          onClick={() => navigate("/settings")}
        >
          ⚙ Settings
        </li>

      </ul>

      <button
        className="logout-btn"
        onClick={() => navigate("/")}
      >
        🚪 Logout
      </button>

    </div>
  );
}

export default Sidebar;