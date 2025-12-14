import { useState } from "react";
import Table from "../Components/Ui/Table";
import Pagination from "../Components/Ui/Pagination";
import { products } from "../Data/MockData";

const Products = () => {
  const [page, setPage] = useState(1);
  const limit = 8;

  const start = (page - 1) * limit;
  const paginatedProducts = products.slice(start, start + limit);

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Product Name" },
    { key: "category", label: "Category" },
    { key: "price", label: "Price" },
    { key: "stock", label: "Stock Status" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Products
      </h1>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
        <Table columns={columns} data={paginatedProducts} />
        <Pagination
          total={products.length}
          page={page}
          limit={limit}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default Products;
