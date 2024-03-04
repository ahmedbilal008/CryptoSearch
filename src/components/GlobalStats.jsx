import React from 'react';
import useAxios from '../hooks/useAxios';
import StatsCard from './StatsCard';
import LoadingBar from './LoadingBar';
import millify from 'millify';

const GlobalStats = ({ darkMode }) => {
  const { response } = useAxios('global');
  console.log(response);

  if (!response) {
    return (
      <div className="wrapper-container mt-10">
        <LoadingBar className="h-8 w-32" />
        <LoadingBar className="h-8 w-full mt-4" />
        <LoadingBar className="h-8 w-48 mt-4" />
        <LoadingBar className="h-8 w-full mt-4" />
        <LoadingBar className="h-8 w-full mt-4" />
      </div>
    );
  }

  const { active_cryptocurrencies, ongoing_icos, ended_icos, total_market_cap, markets } = response.data;
  console.log('active currencies:', active_cryptocurrencies);
  console.log('ongoing ico:', ongoing_icos);
  console.log('ended ico:', ended_icos);
  console.log('total market cap:', total_market_cap);
  console.log('markets:', markets);

  return (
    <div className={`wrapper-container w-1/2 mt-10 m-5 ${darkMode ? "dark" : ""}`}>
      <div className="flex justify-between">
          <h1 className="text-2xl text-gray-400 font-bold">Global Statistics</h1>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-1 gap-4">
          <StatsCard title="Active Currencies" value={active_cryptocurrencies} darkMode={darkMode} />
          <StatsCard title="Ongoing ICOs" value={ongoing_icos} darkMode={darkMode} />
          <StatsCard title="Ended ICOs" value={ended_icos} darkMode={darkMode} />
          <StatsCard title="Markets" value={markets} darkMode={darkMode} />
          <StatsCard title="Total Market Cap" value={millify(total_market_cap.usd)} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default GlobalStats;
