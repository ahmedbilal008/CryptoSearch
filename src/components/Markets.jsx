import useAxios from "../hooks/useAxios"
import CoinMarket from "./CoinMarket";
import LoadingBar from "./LoadingBar";
const Markets = () => {
    const {response,loading} = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc')
    console.log("markt cap",response);
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
        <div className=" mt-10 m-5 w-auto sm:w-auto xl:w-1/2" >
            <h1 className="text-2xl text-gray-400 font-bold mb-4">
              Markets
              </h1>
            {response && limitedCoins.map(coin =><CoinMarket key={coin.id} coin={coin}/>)}
        </div>

    </>
  )
}

export default Markets