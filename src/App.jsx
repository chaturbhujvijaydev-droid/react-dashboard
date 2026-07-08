import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";
import Orders from "./pages/Orders/Orders";
import Settings from "./pages/Settings/Settings";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard />} />
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;