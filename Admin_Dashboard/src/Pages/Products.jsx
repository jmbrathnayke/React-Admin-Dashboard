import { useState } from "react";
import Table from "../Components/Ui/Table";
import Pagination from "../Components/Ui/Pagination";
import SearchInput from "../Components/Ui/SearchInput";
import { projects } from "../Data/MockData";
import { Filter, BarChart3, Paperclip, Plus } from "lucide-react";

const Products = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const limit = entriesPerPage;

  // Filter projects based on search
  const filteredProjects = projects.filter(
    (project) =>
      project.projectName.toLowerCase().includes(search.toLowerCase()) ||
      project.customer.name.toLowerCase().includes(search.toLowerCase()) ||
      project.assigned.toLowerCase().includes(search.toLowerCase())
  );

  const start = (page - 1) * limit;
  const paginatedProjects = filteredProjects.slice(start, start + limit);

  const columns = [
    { key: "projectName", label: "Project-Name" },
    { key: "customer", label: "Customer" },
    { key: "startDate", label: "Start Date" },
    { key: "endDate", label: "End Date" },
    { key: "assigned", label: "Assigned" },
    { key: "status", label: "Status" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Projects
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Home &gt; List
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
            <BarChart3 className="w-4 h-4 text-gray-500" />
          </button>
          <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
            <Filter className="w-4 h-4 text-gray-500" />
          </button>
          <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
            <Paperclip className="w-4 h-4 text-gray-500" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            Create Project
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        {/* Table Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Show</span>
            <select
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setPage(1);
              }}
              className="px-2 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="text-sm text-gray-500 dark:text-gray-400">entries</span>
          </div>
          <div className="w-full sm:w-64">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Table */}
        <Table columns={columns} data={paginatedProjects} />

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing {start + 1} to {Math.min(start + limit, filteredProjects.length)} of {filteredProjects.length} entries
            </p>
            <Pagination
              total={filteredProjects.length}
              page={page}
              limit={limit}
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
