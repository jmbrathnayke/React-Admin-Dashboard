import { NavLink } from "react-router-dom";

const Sidebar = () => {
 return (
    <aside className="w-64 bg-white dark:bg-gray-800 p-4 hidden md:block">
      <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
        Admin
      </h2>

      <nav className="space-y-3">
        <NavLink to="/" className="block text-gray-600 dark:text-gray-300">
          Dashboard
        </NavLink>
        <NavLink to="/users" className="block text-gray-600 dark:text-gray-300">
          Users
        </NavLink>
        <NavLink to="/products" className="block text-gray-600 dark:text-gray-300">
          Products
        </NavLink>
        <NavLink to="/settings" className="block text-gray-600 dark:text-gray-300">
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;