import "./Dashboard.css";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const devices = [
    { id:1,name:"Meta Quest 3",location:"Chennai",status:"Online",lastActive:"2 mins ago"},
    { id:2,name:"HTC Vive Pro",location:"Mumbai",status:"Offline",lastActive:"10 mins ago"},
    { id:3,name:"Pico 4",location:"Bangalore",status:"Online",lastActive:"5 mins ago"},
    { id:4,name:"Quest Pro",location:"Delhi",status:"Online",lastActive:"8 mins ago"},
    { id:5,name:"Valve Index",location:"Hyderabad",status:"Offline",lastActive:"20 mins ago"},
    { id:6,name:"Pico Neo 3",location:"Pune",status:"Online",lastActive:"1 min ago"},
    { id:7,name:"Quest 2",location:"Kolkata",status:"Offline",lastActive:"35 mins ago"},
    { id:8,name:"Vive XR Elite",location:"Ahmedabad",status:"Online",lastActive:"4 mins ago"},
    { id:9,name:"Meta Quest Pro",location:"Noida",status:"Online",lastActive:"6 mins ago"},
    { id:10,name:"Pico Ultra",location:"Jaipur",status:"Offline",lastActive:"50 mins ago"},
    { id:11,name:"Quest Enterprise",location:"Goa",status:"Online",lastActive:"3 mins ago"},
    { id:12,name:"XR Vision",location:"Kochi",status:"Online",lastActive:"11 mins ago"},
    { id:13,name:"Meta XR Lite",location:"Lucknow",status:"Offline",lastActive:"17 mins ago"},
    { id:14,name:"Quest Air",location:"Nagpur",status:"Online",lastActive:"9 mins ago"},
    { id:15,name:"Pico Vision",location:"Trichy",status:"Online",lastActive:"5 mins ago"},
    { id:16,name:"HTC Focus",location:"Madurai",status:"Offline",lastActive:"40 mins ago"},
    { id:17,name:"Vision XR",location:"Surat",status:"Online",lastActive:"8 mins ago"},
    { id:18,name:"XR Device X",location:"Coimbatore",status:"Online",lastActive:"2 mins ago"},
    { id:19,name:"Meta Vision",location:"Vizag",status:"Offline",lastActive:"15 mins ago"},
    { id:20,name:"XR Enterprise",location:"Mysore",status:"Online",lastActive:"7 mins ago"}
  ];

  return (

    <div className="dashboard-container">

      <Sidebar />

      <div className="main-content">

        <div className="topbar">

          <div>

            <h2>XR Devices Dashboard</h2>

            <p>
              Manage all connected XR devices
            </p>

          </div>

          <button
            className="logout-btn"
            onClick={() => navigate("/")}
          >
            Logout
          </button>

        </div>

        <div className="stats">

          <div className="card">
            <h3>Total Devices</h3>
            <p>20</p>
          </div>

          <div className="card">
            <h3>Online Devices</h3>
            <p>13</p>
          </div>

          <div className="card">
            <h3>Offline Devices</h3>
            <p>7</p>
          </div>

        </div>

        <input
          className="search-box"
          type="text"
          placeholder="Search Device..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <h3>All XR Devices</h3>

        <div className="devices-grid">

          {devices
            .filter(device =>
              device.name.toLowerCase().includes(search.toLowerCase())
            )
            .map(device => (

              <div
                className="device-card"
                key={device.id}
              >

                <h3>{device.name}</h3>

                <p>📍 {device.location}</p>

                <p>

                  Status :

                  <span
                    className={
                      device.status === "Online"
                        ? "status online"
                        : "status offline"
                    }
                  >

                    {device.status}

                  </span>

                </p>

                <p>

                  Last Active :

                  {device.lastActive}

                </p>

              </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default Dashboard;