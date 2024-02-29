const CoinTrending = ({coin}) => {
  return (
    <>
    <div>
      <div>
        <span>{coin.score+1}</span>
        <img src={coin.small} alt={coin.name}/>
        <p>{coin.name}</p>
        <small>({coin.symbol})</small>
      </div>
    </div>
    </>
  )
}

export default CoinTrending