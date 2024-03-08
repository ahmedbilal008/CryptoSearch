import { Link } from "react-router-dom";
import { IoMdTrendingDown } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";

const CoinMarket = ({ coin }) => {
  const priceChangeColor = coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500';

  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="grid grid-cols-3 gap-[2rem] p-4 rounded-md shadow-orange-400/50 shadow-md hover:shadow-lg hover:shadow-orange-500 transition duration-300">
        <div className="flex items-center">
          <img className="w-10 rounded-3xl mr-2" src={coin.image} alt={coin.name} />
          <div>
            <p className="font-semibold text-black dark:text-gray-400">{coin.name}</p>
            <span className="text-gray-500">{coin.symbol}</span>
          </div>
        </div>
        <span className={'flex font-semibold text-black dark:text-gray-400 justify-center'}>{coin.current_price}</span>

        <div className="flex items-center justify-center">
          <span className={`font-semibold ${priceChangeColor}`}>{coin.price_change_percentage_24h}%</span>
          <div className="ml-3">{coin.price_change_percentage_24h < 0 ? <IoMdTrendingDown className="text-red-500" style={{ fontSize: '1.5rem' }}/> : <IoMdTrendingUp className="text-green-500" style={{ fontSize: '1.5rem' }}/>}</div>
        </div>
      </div>
    </Link>
  );
};

export default CoinMarket;
