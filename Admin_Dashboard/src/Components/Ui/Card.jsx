//card component
const Card = ({ title, value, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {value}
        </h2>
      </div>
      <div className="text-blue-600 dark:text-blue-400">{icon}</div>
    </div>
  );
};

export default Card;
