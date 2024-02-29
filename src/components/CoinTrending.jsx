import { Link } from "react-router-dom"
const CoinTrending = ({coin}) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <div>
      <div>
        <span>{coin.score+1}</span>
        <img src={coin.small} alt={coin.name}/>
        <p>{coin.name}</p>
        <small>({coin.symbol})</small>
      </div>
    </div>
    </Link>
  )
}

export default CoinTrending