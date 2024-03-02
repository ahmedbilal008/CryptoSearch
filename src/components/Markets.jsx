import useAxios from "../hooks/useAxios"
import CoinMarket from "./CoinMarket";
import LoadingBar from "./LoadingBar";
const Markets = () => {
    const {response,loading} = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc')
    console.log(response);
    if (loading) {
      return (
        <div className="wrapper-container mt-10">
          <LoadingBar className="h-8 w-48 mt-4" />
          <LoadingBar className="h-8 w-full mt-4" />
          <LoadingBar className="h-8 w-full mt-4" />
        </div>
      )
    }
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