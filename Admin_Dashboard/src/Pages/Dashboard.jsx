import StatCard from "../Components/Ui/StatCard";
import MetricCard from "../Components/Ui/MetricCard";
import ProgressBar from "../Components/Ui/ProgressBar";
import { emailStats, browserStats, metricCards, visitorsData } from "../Data/MockData";
import { MoreHorizontal } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Dashboards
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Home &gt; Analytics
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            DEC 01,25 - DEC 31,25
          </span>
          <button className="px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2">
            <span className="text-sm text-amber-50">🔍filter</span> 
          </button>
        </div>
      </div>

      {/* Email Reports Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Email Reports
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Email Campaign Reports
            </p>
          </div>
          <button className="bg-blue-50 px-4 py-2 text-xs  border border-gray-200 dark:border-gray-700 rounded-lg dark:hover:bg-gray-800">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {emailStats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Visitors Overview Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Visitors Overview
            </h2>
            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Simple Chart Visualization */}
          <div className="relative h-64">
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400">
              <span>100K</span>
              <span>80K</span>
              <span>60K</span>
              <span>40K</span>
              <span>20K</span>
              <span>0K</span>
            </div>
            <div className="ml-10 h-full flex items-end">
              <svg className="w-full h-56" viewBox="0 0 700 200" preserveAspectRatio="none">

                {/* Grid lines */}
                <line x1="0" y1="40" x2="700" y2="40" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="0" y1="80" x2="700" y2="80" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="0" y1="120" x2="700" y2="120" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="0" y1="160" x2="700" y2="160" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* Area fill for visitors */}
                <path
                  d="M0,180 Q50,160 100,140 T200,100 T300,80 T400,60 T500,40 T600,30 T700,20 L700,200 L0,200 Z"
                  fill="url(#blueGradient)"
                  opacity="0.3"
                />
                
                {/* Area fill for sessions */}
                <path
                  d="M0,190 Q50,170 100,150 T200,120 T300,100 T400,80 T500,60 T600,50 T700,40 L700,200 L0,200 Z"
                  fill="url(#greenGradient)"
                  opacity="0.3"
                />
                
                {/* Line for visitors */}
                <path
                  d="M0,180 Q50,160 100,140 T200,100 T300,80 T400,60 T500,40 T600,30 T700,20"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                />
                
                {/* Line for sessions */}
                <path
                  d="M0,190 Q50,170 100,150 T200,120 T300,100 T400,80 T500,60 T600,50 T700,40"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                />

                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* X-axis labels */}
            <div className="ml-10 flex justify-between text-xs text-gray-400 mt-2">
              {visitorsData.map((item) => (
                <span key={item.month}>{item.month}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Browser States */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Browser States
            </h2>
            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="space-y-4">
            {browserStats.map((browser) => (
              <div key={browser.name} className="flex items-center gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: browser.color }}
                >
                  {browser.name.charAt(0)}
                </div>
                <span className="flex-1 text-sm text-gray-700 dark:text-gray-300">
                  {browser.name}
                </span>
                <ProgressBar percentage={browser.percentage} color={browser.color} />
              </div>
            ))}
          </div>

          <button className="w-full mt-6 text-sm text-blue-600 dark:text-blue-400 hover:underline">
            EXPLORE DETAILS
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricCards.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
