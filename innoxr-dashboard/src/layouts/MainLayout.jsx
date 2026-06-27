import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (

    <div
      style={{
        display: "flex",
        background: "#f5f7fb"
      }}
    >

      <Sidebar />

      <div
        style={{
          flex: 1
        }}
      >

        <Navbar />

        <div
          style={{
            padding: "30px"
          }}
        >

          {children}

        </div>

      </div>

    </div>
  );
}

export default MainLayout;