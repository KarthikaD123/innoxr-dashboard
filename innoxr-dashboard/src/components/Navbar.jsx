import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";

import {
  FaBell,
  FaSearch,
  FaUserCircle
} from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">

      {/* Search */}
      <div className="search">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search devices..."
        />
      </div>

      {/* Right Section */}
      <div className="right">

        {/* Theme Switch */}
        <ThemeToggle />

        {/* Notification */}
        <div className="icon-btn">
          <FaBell className="bell" />
          <span className="notification-dot"></span>
        </div>

        {/* Profile */}
        <div className="profile">
          <FaUserCircle className="profile-icon" />
          <div>
            <h4>Admin</h4>
            <p>Administrator</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Navbar;