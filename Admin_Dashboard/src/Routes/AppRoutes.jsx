import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layouts/layout";
import Dashboard from "../Pages/Dashboard";
import Users from "../Pages/Users";
import Products from "../Pages/Products";
import Settings from "../Pages/Setting";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
