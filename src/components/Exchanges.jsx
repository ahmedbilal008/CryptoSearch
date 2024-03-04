import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";
const Exchanges = () => {
  const { response } = useAxios('exchanges?per_page=10');
  return (
    <div>
      <h1>Exchanges</h1>
      {response && response.map((exchange) => (
         <Link to={`/exchange/${exchange.id}`}>
        <div key={exchange.id}>
          <h2>{exchange.name}</h2>
          <p>Year Established: {exchange.year_established}</p>
          <p>Country: {exchange.country}</p>
          <p>Description: {exchange.description}</p>
          <p>Trade Volume (24h BTC): {exchange.trade_volume_24h_btc}</p>
          <p>Trust Score: {exchange.trust_score}</p>
          <p>Trust Score Rank: {exchange.trust_score_rank}</p>
          <p>URL: <a href={exchange.url} target="_blank" rel="noopener noreferrer">{exchange.url}</a></p>
          <img src={exchange.image} alt={exchange.name} style={{ maxWidth: '100px' }} />
          <hr />
        </div>
        </Link>
      ))}
    </div>
  );
}

export default Exchanges;
