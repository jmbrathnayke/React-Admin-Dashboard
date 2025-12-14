import clsx from "clsx";

const statusStyles = {
  "In Progress": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Not Started": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  "On Hold": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  "Declined": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  "Finished": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Active": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Inactive": "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400",
};

const dotStyles = {
  "In Progress": "bg-blue-500",
  "Not Started": "bg-yellow-500",
  "On Hold": "bg-orange-500",
  "Declined": "bg-red-500",
  "Finished": "bg-green-500",
  "Active": "bg-green-500",
  "Inactive": "bg-gray-500",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full",
        statusStyles[status] || "bg-gray-100 text-gray-700"
      )}
    >
      <span
        className={clsx(
          "w-1.5 h-1.5 rounded-full",
          dotStyles[status] || "bg-gray-500"
        )}
      />
      {status}
    </span>
  );
};

export default StatusBadge;
