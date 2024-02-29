import useAxios from "../hooks/useAxios"
import CoinMarket from "./CoinMarket";

const Markets = () => {
    const {response} = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc')
    console.log(response);
    const limitedCoins = response ? response.slice(0, 10) : [];
  return (
    <>
        <h1>
            Markets
            {response && limitedCoins.map(coin =><CoinMarket key={coin.id} coin={coin}/>)}
        </h1>

    </>
  )
}

export default Markets