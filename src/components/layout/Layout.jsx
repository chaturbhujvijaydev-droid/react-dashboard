import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="d-flex">

      <Sidebar />

      <div className="flex-grow-1">

        <Navbar />

        <div className="container-fluid p-4">
          {children}
        </div>

        <Footer />

      </div>

    </div>
  );
};

export default Layout;