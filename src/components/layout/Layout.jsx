import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="d-flex">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-grow-1">
        <Navbar
          setSidebarOpen={setSidebarOpen}
        />

        <div className="container-fluid p-4">
          {children}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;