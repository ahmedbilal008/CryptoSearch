import { Link } from "react-router-dom";

const CoinMarket = ({ coin }) => {
  const priceChangeColor = coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500';

  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="grid grid-cols-3 p-4 rounded-md shadow-orange-300 shadow-md hover:shadow-lg hover:shadow-orange-600 transition duration-300">
        <div className="flex items-center">
          <img className="w-10 rounded-3xl mr-2" src={coin.image} alt={coin.name} />
          <div>
            <p className="font-semibold">{coin.name}</p>
            <span className="text-gray-500">{coin.symbol}</span>
          </div>
        </div>
        <span className={`font-semibold ${priceChangeColor}`}>{coin.current_price}</span>
        <span className={`font-semibold ${priceChangeColor}`}>{coin.price_change_percentage_24h}%</span>
      </div>
    </Link>
  );
};

export default CoinMarket;
