import clsx from "clsx";
import { TrendingUp, TrendingDown } from "lucide-react";

const colorStyles = {
  blue: "from-blue-400 to-blue-600",
  purple: "from-purple-400 to-purple-600",
  green: "from-green-400 to-green-600",
  orange: "from-orange-400 to-orange-600",
};

const MetricCard = ({ title, value, change, trend, prevValue, color = "blue" }) => {
  const isUp = trend === "up";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{prevValue}</p>
        </div>
        <div className="text-right">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{value}</h3>
          <span
            className={clsx(
              "inline-flex items-center text-xs font-medium",
              isUp ? "text-green-500" : "text-red-500"
            )}
          >
            {isUp ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
            {change}
          </span>
        </div>
      </div>
      
      {
      /* Mini chart visualization */}
      <div className="h-12 flex items-end gap-1">
        {[40, 65, 45, 70, 55, 80, 60, 75, 50, 85].map((height, i) => (
          <div
            key={i}
            className={clsx(
              "flex-1 rounded-t bg-linear-to-t opacity-70",
              colorStyles[color]
            )}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default MetricCard;
