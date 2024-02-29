import { Link } from "react-router-dom"

const CoinMarket = ({coin}) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className="grid grid-cols-3">
        <div className="flex items-center w-full">
            <img className="w-6" src={coin.image} alt={coin.name} />
            <p>{coin.name}</p>
            <span>{coin.symbol}</span>
        </div>
        <span>{coin.current_price}</span>
    </div>
    </Link>
  )
}

export default CoinMarket