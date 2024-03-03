import React from 'react';

const StatsCard = ({ title, value, darkMode }) => {
  return (
    <div className={`${darkMode && "dark"}`}>
    <div className={'p-4 shadow-lg dark:shadow-orange-500/50 shadow-slate-700 rounded-lg  dark:text-white dark:bg-gray-800 bg-gray-300 text-gray-800'}>
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-2xl font-bold">{value}</p>
    </div>
    </div>
  );
};

export default StatsCard;
