import "./Analytics.css";
import { useNavigate } from "react-router-dom";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Analytics() {
  const navigate = useNavigate();

  const data = [
    { day: "Mon", interactions: 500 },
    { day: "Tue", interactions: 800 },
    { day: "Wed", interactions: 1200 },
    { day: "Thu", interactions: 1000 },
    { day: "Fri", interactions: 1800 },
    { day: "Sat", interactions: 2200 },
    { day: "Sun", interactions: 2600 }
  ];

  return (
    <div className="analytics-layout">

      {/* SIDEBAR */}

      <div className="sidebar">

        <h1 className="logo">
          Inno<span>XR</span>
        </h1>

        <ul>

          <li onClick={() => navigate("/dashboard")}>
            🏠 Dashboard
          </li>

          <li onClick={() => navigate("/devices")}>
            🖥 Devices
          </li>

          <li className="active">
            📊 Analytics
          </li>

          <li onClick={() => navigate("/settings")}>
⚙ Settings
</li>

        </ul>

        <button
          className="sidebar-logout"
          onClick={() => navigate("/")}
        >
          🚪 Logout
        </button>

      </div>

      {/* MAIN CONTENT */}

      <div className="analytics-page">

        <div className="analytics-top">

          <div>
            <h2>Analytics Dashboard</h2>
            <p>Monitor device engagement and campaign performance</p>
          </div>

        </div>

        {/* CARDS */}

        <div className="analytics-cards">

          <div className="analytics-card">
            <h4>Total Devices</h4>
            <h2>120</h2>
          </div>

          <div className="analytics-card">
            <h4>Active Devices</h4>
            <h2>95</h2>
          </div>

          <div className="analytics-card">
            <h4>Interactions</h4>
            <h2>4,320</h2>
          </div>

          <div className="analytics-card">
            <h4>Campaign Performance</h4>
            <h2>85%</h2>
          </div>

        </div>

        {/* CHART */}

        <div className="chart-section">

          <h3>Interactions Over Time</h3>

          <ResponsiveContainer width="100%" height={350}>

            <LineChart data={data}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="interactions"
                stroke="#7c3aed"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* BOTTOM */}

        <div className="bottom-grid">

          <div className="table-box">

            <h3>Top Performing Devices</h3>

            <table>

              <thead>

                <tr>
                  <th>Device</th>
                  <th>Interactions</th>
                  <th>Status</th>
                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>Meta Quest 3</td>
                  <td>1245</td>
                  <td>
                    <span className="online">
                      Online
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>Pico 4</td>
                  <td>980</td>
                  <td>
                    <span className="online">
                      Online
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>HTC Vive Pro</td>
                  <td>740</td>
                  <td>
                    <span className="offline">
                      Offline
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

          <div className="location-box">

            <h3>Campaign Performance</h3>

            <ul>
              <li>Campaign A - 40%</li>
              <li>Campaign B - 30%</li>
              <li>Campaign C - 20%</li>
              <li>Campaign D - 10%</li>
            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;