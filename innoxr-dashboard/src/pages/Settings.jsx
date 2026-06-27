import "./Settings.css";

function Settings() {
  return (
    <div className="settings-page">

      <h1>Settings & Advanced Features</h1>

      {/* Profile */}

      <div className="settings-card">
        <h2>Profile Settings</h2>

        <input
          type="text"
          placeholder="Admin Name"
        />

        <input
          type="email"
          placeholder="admin@innoxr.com"
        />

        <button>Save Changes</button>
      </div>

      {/* Notifications */}

      <div className="settings-card">
        <h2>Notifications</h2>

        <label>
          <input type="checkbox" />
          Email Alerts
        </label>

        <label>
          <input type="checkbox" />
          Device Offline Alerts
        </label>

        <label>
          <input type="checkbox" />
          Campaign Reports
        </label>
      </div>

      {/* Device Alerts */}

      <div className="settings-card">
        <h2>Device Alerts</h2>

        <ul>
          <li>⚠ Meta Quest 3 Offline</li>
          <li>⚠ HTC Vive Pro Battery Low</li>
          <li>⚠ Pico 4 Connection Lost</li>
        </ul>
      </div>

      {/* Campaign Scheduler */}

      <div className="settings-card">
        <h2>Campaign Scheduler</h2>

        <input
          type="text"
          placeholder="Campaign Name"
        />

        <input type="date" />

        <input type="date" />

        <button>
          Schedule Campaign
        </button>
      </div>

      {/* Device Health */}

      <div className="settings-card">
        <h2>Device Health Monitoring</h2>

        <p>Meta Quest 3</p>
        <progress value="95" max="100"></progress>

        <p>Pico 4</p>
        <progress value="88" max="100"></progress>

        <p>HTC Vive Pro</p>
        <progress value="72" max="100"></progress>
      </div>

    </div>
  );
}

export default Settings;