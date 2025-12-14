import Card from "../Components/Ui/card";
import { Users, ShoppingCart, DollarSign, Activity } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Dashboard Overview
      </h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Total Users" value="1,245" icon={<Users size={28} />} />
        <Card title="Products" value="312" icon={<ShoppingCart size={28} />} />
        <Card title="Revenue" value="$24,500" icon={<DollarSign size={28} />} />
        <Card title="Active Sessions" value="87" icon={<Activity size={28} />} />
      </div>

      {/* Placeholder for future content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <p className="text-gray-600 dark:text-gray-300">
          Additional analytics and charts can be displayed here.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
