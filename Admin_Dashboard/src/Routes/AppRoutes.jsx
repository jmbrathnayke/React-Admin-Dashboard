import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layouts/layout";
import Dashboard from "../Pages/Dashboard";
import Users from "../Pages/Users";
import Products from "../Pages/Products";
import Settings from "../Pages/Setting";
import Login from "../Pages/Login";
import ProtectedRoute from "./ProtectRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Login route without Layout */}
      <Route path="/login" element={<Login />} />
      
      {/* Protected routes with Layout */}
      <Route path="/*" element={
        <ProtectedRoute>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Layout>
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default AppRoutes;
