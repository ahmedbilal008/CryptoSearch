import React from 'react';
import { Link } from 'react-router-dom';
const CoinContainer = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}> 
    <div className="bg-gray-400 mb-1 p-2 rounded-xl shadow flex items-center">
      <img src={coin.large} alt={coin.name} className="w-10 object-cover rounded-3xl" />
      <h3 className="text-xl font-semibold mb-2">{coin.name}</h3>
      <p className="text-gray-500">{coin.symbol}</p>
      <p className="text-gray-500">Market Cap Rank: {coin.market_cap_rank}</p>
    </div>
    </Link>
  );
};

export default CoinContainer;
