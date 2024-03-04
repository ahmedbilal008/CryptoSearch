import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const ExchangeDetail = () => {
  const { response } = useAxios('exchanges?per_page=10');
  console.log("Exchanges" ,response);
  const { id } = useParams();
  const SelectedExchange = response && response.find(exchange => exchange.id === id);

  return (
    <div>
      {response &&
        <div key={SelectedExchange.id}>
          <h2>{SelectedExchange.name}</h2>
          <p>Year Established: {SelectedExchange.year_established}</p>
          <p>Country: {SelectedExchange.country}</p>
          <p>Description: {SelectedExchange.description}</p>
          <p>Trade Volume (24h BTC): {SelectedExchange.trade_volume_24h_btc}</p>
          <p>Trust Score: {SelectedExchange.trust_score}</p>
          <p>Trust Score Rank: {SelectedExchange.trust_score_rank}</p>
          <p>URL: <a href={SelectedExchange.url} target="_blank" rel="noopener noreferrer">{SelectedExchange.url}</a></p>
          <img src={SelectedExchange.image} alt={SelectedExchange.name} style={{ maxWidth: '100px' }} />
          <hr />
        </div>
      }
    </div>
  );
}

export default ExchangeDetail;
