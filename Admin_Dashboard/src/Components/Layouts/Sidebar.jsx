import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed z-50 inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 p-4
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:block
        `}
      >
        <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
          Admin Panel
        </h2>

        <nav className="space-y-3">
          {[
            { to: "/", label: "Dashboard" },
            { to: "/users", label: "Users" },
            { to: "/products", label: "Products" },
            { to: "/settings", label: "Settings" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
