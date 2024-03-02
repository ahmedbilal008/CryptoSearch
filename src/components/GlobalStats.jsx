import useAxios from "../hooks/useAxios";
import LoadingBar from "./LoadingBar";
const GlobalStats = () => {
    const { response } = useAxios('global');
    console.log(response);

    if (!response) {
        return (
            <div className="wrapper-container mt-10">
                <LoadingBar className="h-8 w-32" />
                <LoadingBar className="h-8 w-full mt-4" />
                <LoadingBar className="h-8 w-48 mt-4" />
                <LoadingBar className="h-8 w-full mt-4" />
                <LoadingBar className="h-8 w-full mt-4" />
            </div>
        );
    }
    const act_crypto = response.data.active_cryptocurrencies;
    console.log("active currencies:", act_crypto);

    const ongoing_ico = response.data.ongoing_icos;
    console.log("ongoing ico:", ongoing_ico);
    
    const ended_ico = response.data.ended_icos;
    console.log("ended ico:", ended_ico);
    
    const total_market_cap = response.data.total_market_cap.usd;
    console.log("total market cap:", total_market_cap);

    const markets = response.data.markets;
    console.log("markets:", markets);
  return (
    <div>GlobalStats</div>
  )
}
export default GlobalStats