import "./Devices.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Devices() {
  const devices = [
    {
      name: "Meta Quest 3",
      location: "Chennai",
      status: "Online",
      battery: "94%",
      lastSeen: "2 mins ago",
    },
    {
      name: "HTC Vive Pro",
      location: "Bangalore",
      status: "Offline",
      battery: "21%",
      lastSeen: "15 mins ago",
    },
    {
      name: "Pico 4",
      location: "Hyderabad",
      status: "Online",
      battery: "82%",
      lastSeen: "1 min ago",
    },
    {
      name: "Valve Index",
      location: "Mumbai",
      status: "Online",
      battery: "73%",
      lastSeen: "5 mins ago",
    },
    {
      name: "Quest Pro",
      location: "Delhi",
      status: "Offline",
      battery: "18%",
      lastSeen: "20 mins ago",
    },
    {
      name: "Apple Vision Pro",
      location: "Pune",
      status: "Online",
      battery: "91%",
      lastSeen: "Just now",
    },
  ];

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="devices-page">
          <h1>XR Devices</h1>
          <p>Monitor and manage connected XR devices.</p>

          {/* Statistics */}
          <div className="stats-grid">
            <div className="stat-card">
              <h2>20</h2>
              <p>Total Devices</p>
            </div>

            <div className="stat-card">
              <h2>13</h2>
              <p>Online</p>
            </div>

            <div className="stat-card">
              <h2>7</h2>
              <p>Offline</p>
            </div>

            <div className="stat-card">
              <h2>4</h2>
              <p>Alerts</p>
            </div>
          </div>

          {/* Filters */}

          <div className="filters">
            <select>
              <option>All Status</option>
              <option>Online</option>
              <option>Offline</option>
            </select>

            <select>
              <option>All Locations</option>
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>

            <select>
              <option>All Device Types</option>
              <option>VR</option>
              <option>AR</option>
              <option>MR</option>
            </select>
          </div>

          {/* Recent Activity */}

          <div className="activity-box">
            <h2>Recent Activity</h2>

            <div className="activity-item">
              🟢 Meta Quest 3 Connected
              <span>2 mins ago</span>
            </div>

            <div className="activity-item">
              🔋 Pico 4 Battery Low
              <span>5 mins ago</span>
            </div>

            <div className="activity-item">
              🔴 HTC Vive Pro Disconnected
              <span>15 mins ago</span>
            </div>
          </div>

          {/* Device Cards */}

          <div className="device-grid">
            {devices.map((device, index) => (
              <div className="device-card" key={index}>
                <h3>{device.name}</h3>

                <p>📍 {device.location}</p>

                <p>
                  Status :
                  <span
                    className={
                      device.status === "Online"
                        ? "online"
                        : "offline"
                    }
                  >
                    {" "}
                    {device.status}
                  </span>
                </p>

                <p>🔋 Battery : {device.battery}</p>

                <p>⏰ Last Seen : {device.lastSeen}</p>

                <button>View Details</button>
              </div>
            ))}
          </div>

          {/* Health */}

          <div className="health-box">
            <h2>Overall Device Health</h2>

            <div className="progress">
              <div className="fill"></div>
            </div>

            <p>92% Devices Healthy</p>
          </div>

          {/* Alerts */}

          <div className="alerts-box">
            <h2>System Alerts</h2>

            <ul>
              <li>⚠ Pico 4 Battery below 20%</li>
              <li>⚠ HTC Vive Pro Offline</li>
              <li>⚠ Firmware Update Available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Devices;