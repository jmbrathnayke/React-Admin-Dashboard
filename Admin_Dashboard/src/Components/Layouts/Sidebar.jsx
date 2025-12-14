import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, FolderKanban, Settings,ChevronDown,Download} from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [expandedMenus, setExpandedMenus] = useState(["dashboards"]);

  const toggleMenu = (menuId) => {
    setExpandedMenus((prev) =>
      prev.includes(menuId)
        ? prev.filter((id) => id !== menuId)
        : [...prev, menuId]
    );
  };

  const menuItems = [
    {
      id: "dashboards",
      label: "Dashboards",
      icon: LayoutDashboard,
      children: [
        { to: "/", label: "Analytics" },
      ],
    },
    {
      id: "customers",
      label: "Customers",
      icon: Users,
      children: [
        { to: "/users", label: "Customers View" },
      ],
    },
    {
      id: "projects",
      label: "Projects",
      icon: FolderKanban,
      children: [
        { to: "/products", label: "Projects" },
      ],
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      to: "/settings",
    },
    
  ];

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
        className={clsx(
          "fixed z-50 inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 overflow-y-auto",
          "transform transition-transform duration-300 flex flex-col",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          "md:relative md:translate-x-0 md:block"
        )}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              DURALUX
            </span>
          </div>
        </div>

        {/* Navigation Label */}
        <div className="px-4 pt-6 pb-2">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Navigation
          </span>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-3 space-y-1">
          {menuItems.map((item) => (
            <div key={item.id}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.id)}
                    className={clsx(
                      "w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors",
                      expandedMenus.includes(item.id)
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <ChevronDown
                      className={clsx(
                        "w-4 h-4 transition-transform",
                        expandedMenus.includes(item.id) ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  {expandedMenus.includes(item.id) && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          onClick={() => setSidebarOpen(false)}
                          className={({ isActive }) =>
                            clsx(
                              "block px-3 py-2 rounded-lg text-sm transition-colors",
                              isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                            )
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.to}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    )
                  }
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        {/* Download Center Card */}
        <div className="p-4 m-3 bg-linear-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-xl">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center mb-3 shadow-sm">
              <Download className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white text-sm">
              Downloading Center
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-3">
              Duralux is a production ready CRM to get started up and running easily.
            </p>
            <button className="w-full py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Download Now
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
