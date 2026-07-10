import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  // Mobile Sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Desktop Collapse
 const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="d-flex">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        collapsed={collapsed}
          setCollapsed={setCollapsed}
      />

      <div className="flex-grow-1">
        <Navbar
          setSidebarOpen={setSidebarOpen}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
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