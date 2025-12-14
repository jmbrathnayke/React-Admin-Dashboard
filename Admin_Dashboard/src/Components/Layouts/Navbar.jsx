import { Menu, Sun, Moon, Search, Bell, Maximize2, Settings } from "lucide-react";
import { useTheme } from "../../Context/ThemeContext";

const Navbar = ({ setSidebarOpen }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 h-16 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between px-4">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <button
          className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={20} />
        </button>

        <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <span className="text-lg">+</span>
          <span className="text-sm font-medium">Menu</span>
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
          <Search size={20} />
        </button>
        
        <button className="hidden sm:flex p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
          <Maximize2 size={20} />
        </button>
        
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <button className="relative p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="relative p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
          <Settings size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
        </button>

        {/* User Avatar */}
        <button className="ml-2 flex items-center gap-2">
          <img
            src="https://ui-avatars.com/api/?name=Admin&background=4F46E5&color=fff"
            alt="User"
            className="w-9 h-9 rounded-full"
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
