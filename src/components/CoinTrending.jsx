import { Link } from "react-router-dom";

const CoinTrending = ({ coin, darkMode }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className={`flex  mr-10 items-center ${darkMode && "dark"}`}>
        <span className="mr-2 text-md font-semibold">{coin.score + 1}</span>
        <img src={coin.small} alt={coin.name} className="w-10 h-10 mr-2 rounded-2xl" />
        <div>
          <p className="font-bold text-lg">{coin.name}</p>
          <small>({coin.symbol})</small>
        </div>
      </div>
    </Link>
  );
};

export default CoinTrending;