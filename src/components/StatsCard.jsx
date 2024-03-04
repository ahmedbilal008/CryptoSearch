import React from 'react';

const StatsCard = ({ title, value, darkMode }) => {
  return (
    <div className={`${darkMode && "dark"}`}>
    <div className={'p-4 shadow-lg dark:shadow-orange-500/50 shadow-slates-700 rounded-lg  dark:text-gray-400 dark:bg-gray-800 bg-gray-300 text-gray-800 flex'}>
      <h1 className="text-xl font-bold w-1/2">{title}</h1>
      <p className="text-2xl font-bold w-1/2">{value}</p>
    </div>
    </div>
  );
};

export default StatsCard;
