import { useTheme } from "../Context/ThemeContext.jsx";
import { Sun, Moon, Bell, Lock, User, Globe, Palette } from "lucide-react";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  const settingsSections = [
    {
      title: "Appearance",
      icon: Palette,
      settings: [
        {
          name: "Theme Mode",
          description: "Switch between light and dark mode",
          action: (
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {theme === "light" ? (
                <>
                  <Moon className="w-4 h-4" /> Dark Mode
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4" /> Light Mode
                </>
              )}
            </button>
          ),
        },
      ],
    },
    {
      title: "Notifications",
      icon: Bell,
      settings: [
        {
          name: "Email Notifications",
          description: "Receive email notifications for updates",
          action: (
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          ),
        },
        {
          name: "Push Notifications",
          description: "Receive push notifications in browser",
          action: (
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          ),
        },
      ],
    },
    {
      title: "Privacy & Security",
      icon: Lock,
      settings: [
        {
          name: "Two-Factor Authentication",
          description: "Add an extra layer of security to your account",
          action: (
            <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">
              Enable
            </button>
          ),
        },
        {
          name: "Session Management",
          description: "Manage active sessions and devices",
          action: (
            <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">
              View Sessions
            </button>
          ),
        },
      ],
    },
    {
      title: "Account",
      icon: User,
      settings: [
        {
          name: "Profile Information",
          description: "Update your profile details and avatar",
          action: (
            <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">
              Edit Profile
            </button>
          ),
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Settings
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingsSections.map((section) => (
          <div
            key={section.title}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            {/* Section Header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
              <section.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="font-semibold text-gray-800 dark:text-white">
                {section.title}
              </h2>
            </div>

            {/* Settings Items */}
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {section.settings.map((setting, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4"
                >
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {setting.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {setting.description}
                    </p>
                  </div>
                  {setting.action}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
