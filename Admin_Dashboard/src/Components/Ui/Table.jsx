import StatusBadge from "./StatusBadge";
import Avatar from "./Avatar";
import { Eye, MoreHorizontal } from "lucide-react";

const Table = ({ columns, data, renderCell }) => {
  const defaultRenderCell = (row, col) => {
    const value = row[col.key];

    // Handle status column
    if (col.key === "status") {
      return <StatusBadge status={value} />;
    }

    // Handle customer column with avatar
    if (col.key === "customer" && typeof value === "object") {
      return (
        <div className="flex items-center gap-3">
          <Avatar src={value.avatar} alt={value.name} size="sm" />
          <span>{value.name}</span>
        </div>
      );
    }

    // Handle project name with logo
    if (col.key === "projectName" && row.logo) {
      return (
        <div className="flex items-center gap-3">
          <img src={row.logo} alt={value} className="w-8 h-8 rounded-lg" />
          <div>
            <p className="font-medium text-gray-800 dark:text-white">{value}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-50">
              {row.description}
            </p>
          </div>
        </div>
      );
    }

    // Handle assigned email with avatar
    if (col.key === "assigned") {
      return (
        <div className="flex items-center gap-2">
          <Avatar
            src={`https://ui-avatars.com/api/?name=${value.split("@")[0]}&background=E0E7FF&color=4F46E5&size=32`}
            alt={value}
            size="sm"
          />
          <span className="text-blue-600 dark:text-blue-400">{value}</span>
        </div>
      );
    }

    return value;
  };

  return (
    <div className="relative overflow-x-auto rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 dark:bg-gray-700/50">
          <tr>
            <th className="px-4 py-3 w-10">
              <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
            </th>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                {col.label}
              </th>
            ))}
            <th className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
          {data.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <td className="px-4 py-3">
                <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
              </td>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300"
                >
                  {renderCell ? renderCell(row, col) : defaultRenderCell(row, col)}
                </td>
              ))}
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <Eye className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
