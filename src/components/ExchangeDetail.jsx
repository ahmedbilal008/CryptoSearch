import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";

const ExchangeDetail = ({darkMode}) => {
  const { response } = useAxios('exchanges?per_page=10');
  const { id } = useParams();
  const selectedExchange = response && response.find(exchange => exchange.id === id);

  return (
    <div className={`${darkMode && "dark"}`}>
      {response && selectedExchange && (
        <div>
           <img src={selectedExchange.image} alt={selectedExchange.name} className="w-10 rounded-3xl mr-4" />
          <h2 className="text-2xl font-bold mb-2 text-black dark:text-gray-400">{selectedExchange.name}</h2>
          <p className="dark:text-gray-400 text-black">Year Established: {selectedExchange.year_established}</p>
          <p className="dark:text-gray-400 text-black">Country: {selectedExchange.country}</p>
          <p className="dark:text-gray-400 text-black">Description: {selectedExchange.description}</p>
          <p className="dark:text-gray-400 text-black">Trade Volume (24h BTC): {selectedExchange.trade_volume_24h_btc}</p>
          <p className="dark:text-gray-400 text-black">Trust Score: {selectedExchange.trust_score}</p>
          <p className="dark:text-gray-400 text-black">Trust Score Rank: {selectedExchange.trust_score_rank}</p>
          <p className="dark:text-gray-400 text-black">
            URL: <a href={selectedExchange.url} target="_blank" rel="noopener noreferrer">{selectedExchange.url}</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default ExchangeDetail;
