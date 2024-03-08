import useAxios from "../hooks/useAxios"
import CoinMarket from "../components/CoinMarket";
import LoadingBar from "../components/LoadingBar";
const AllCoins = ({darkMode}) => {
    const { response, loading } = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100    ')
    console.log("markt cap", response);
    if (loading) {
        return (
            <div className="wrapper-container mt-10">
                <LoadingBar className="h-8 w-48 mt-4" />
                <LoadingBar className="h-8 w-full mt-4" />
                <LoadingBar className="h-8 w-full mt-4" />
            </div>
        )
    }
    return (
        <div className={`${darkMode && "dark"}`}>
            <div className="light-mode-gradient dark:dark-mode-gradient">
            <div className=" pt-10 pb-10 m-5 mb-0 mt-0 w-auto sm:w-auto xl:w-1/2" >
                <h1 className="text-2xl text-gray-400 font-bold mb-4">
                    Top 100 Coins
                </h1>
                {response && response.map(coin => <CoinMarket key={coin.id} coin={coin} />)}
            </div>
            </div>
        </div>
    )
}
export default AllCoins