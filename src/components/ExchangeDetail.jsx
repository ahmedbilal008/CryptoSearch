import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";

const ExchangeDetail = () => {
  const { response } = useAxios('exchanges?per_page=10');
  const { id } = useParams();
  const selectedExchange = response && response.find(exchange => exchange.id === id);

  return (
    <div className="p-5">
      {response && selectedExchange && (
        <div>
          <h2 className="text-2xl font-bold mb-2">{selectedExchange.name}</h2>
          <p className="text-gray-500">Year Established: {selectedExchange.year_established}</p>
          <p className="text-gray-500">Country: {selectedExchange.country}</p>
          <p className="text-gray-500">Description: {selectedExchange.description}</p>
          <p className="text-gray-500">Trade Volume (24h BTC): {selectedExchange.trade_volume_24h_btc}</p>
          <p className="text-gray-500">Trust Score: {selectedExchange.trust_score}</p>
          <p className="text-gray-500">Trust Score Rank: {selectedExchange.trust_score_rank}</p>
          <p className="text-gray-500">
            URL: <a href={selectedExchange.url} target="_blank" rel="noopener noreferrer">{selectedExchange.url}</a>
          </p>
          <img src={selectedExchange.image} alt={selectedExchange.name} style={{ maxWidth: '100px' }} className="mt-4 mb-2" />
          <hr className="border-t-2 border-gray-300 mt-4 mb-4" />
        </div>
      )}
    </div>
  );
}

export default ExchangeDetail;
