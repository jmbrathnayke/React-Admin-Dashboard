import { useState } from "react";
import Table from "../Components/Ui/Table";
import Pagination from "../Components/Ui/Pagination";
import { users } from "../Data/MockData";

const Users = () => {
  const [page, setPage] = useState(1);
  const limit = 8;

  const start = (page - 1) * limit;
  const paginatedUsers = users.slice(start, start + limit);

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "status", label: "Status" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Users
      </h1>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
        <Table columns={columns} data={paginatedUsers} />
        <Pagination
          total={users.length}
          page={page}
          limit={limit}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default Users;
