import { Menu } from "lucide-react";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <header className="h-14 bg-white dark:bg-gray-800 border-b dark:border-gray-700 flex items-center px-4">
      <button
        className="md:hidden mr-3 text-gray-600 dark:text-gray-300"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu size={22} />
      </button>

      <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
        Admin Dashboard
      </h1>
    </header>
  );
};

export default Navbar;
