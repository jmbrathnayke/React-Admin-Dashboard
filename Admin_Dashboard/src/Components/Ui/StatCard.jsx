import { Mail, Send, CheckCircle, Eye, MousePointer, XCircle } from "lucide-react";
import clsx from "clsx";

const iconMap = {
  mail: Mail,
  send: Send,
  check: CheckCircle,
  eye: Eye,
  cursor: MousePointer,
  x: XCircle,
};

const colorStyles = {
  blue: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
  yellow: "text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20",
  green: "text-green-500 bg-green-50 dark:bg-green-900/20",
  purple: "text-purple-500 bg-purple-50 dark:bg-purple-900/20",
  pink: "text-pink-500 bg-pink-50 dark:bg-pink-900/20",
  red: "text-red-500 bg-red-50 dark:bg-red-900/20",
};

const StatCard = ({ label, value, icon, color = "blue" }) => {
  const Icon = iconMap[icon] || Mail;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center">
      <div className={clsx("p-3 rounded-lg mb-3", colorStyles[color])}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{value}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</p>
    </div>
  );
};

export default StatCard;
