import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import LoadingBar from "./LoadingBar";
import millify from "millify";

const CoinDetail = ({ darkMode }) => {
    const { id } = useParams();
    const { response } = useAxios(`coins/${id}?localization=false&tickers=false&community_data=false`);
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
    const officialForumUrls = response.links.official_forum_url || [];
    const firstNonEmptyUrl = officialForumUrls.find(url => url !== '');
    const homepageUrls = response.links.homepage || [];
    const firstNonEmptyUrl_ = homepageUrls.find(url => url !== '');
    const genesisDate = response["genesis_date"];
    const priceChangePercentage24h = response.market_data.price_change_percentage_24h;
    const priceChangePercentage30d = response.market_data.price_change_percentage_30d;
    const priceChangePercentage60d = response.market_data.price_change_percentage_60d;
    const marketCapRank = response["market_cap_rank"];
    const usdPrice = response.market_data.current_price.usd;
    const lowPrice = response.market_data.low_24h.usd;
    const highPrice = response.market_data.high_24h.usd;
    const marketcap = response.market_data.market_cap.usd;

    return (
        <div className={`${darkMode && "dark"}`}>
            <div className="p-5">
                <div className="flex mb-4">
                    <img src={response.image.small} alt={response.name} className="w-10 min-w-[70px] rounded-3xl mr-4" />
                    <div className="flex sm:flex-row flex-col">
                        <h1 className="text-black dark:text-gray-400 text-2xl font-bold mr-2">{response.name}</h1>
                        <p className="text-black dark:text-gray-400 mr-6">({response.symbol})</p>
                        <p className="text-black dark:text-gray-400">Genesis Date: {genesisDate}</p>
                    </div>
                </div>

                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 sm:ml-5 md:ml-10 lg:ml-20 sm:text-lg lg:text-lg gap-2">
                    <div className="">
                        <p className="text-black dark:text-gray-400">Market Cap Rank: {marketCapRank}</p>
                        <p className="text-black dark:text-gray-400">USD Price: ${usdPrice}</p>
                        <p className="text-black dark:text-gray-400">Market Cap: {millify(marketcap)}</p>
                    </div>

                    <div className="">
                        <p className={`text-${priceChangePercentage24h < 0 ? 'red' : 'green'}-500`}>
                            Price Change (24h): {priceChangePercentage24h}%
                        </p>
                        <p className={`text-${priceChangePercentage30d < 0 ? 'red' : 'green'}-500`}>
                            Price Change (30d): {priceChangePercentage30d}%
                        </p>
                        <p className={`text-${priceChangePercentage60d < 0 ? 'red' : 'green'}-500`}>
                            Price Change (60d): {priceChangePercentage60d}%
                        </p>
                    </div>


                    <div className="flex flex-col">
                        <p className="text-black dark:text-gray-400">24h Low: ${lowPrice}</p>
                        <p className="text-black dark:text-gray-400">24h High: ${highPrice}</p>
                        {firstNonEmptyUrl && (
                            <a
                                href={firstNonEmptyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 "
                            >
                                {firstNonEmptyUrl}
                            </a>
                        )}
                        {firstNonEmptyUrl_ && (
                            <a
                                href={firstNonEmptyUrl_}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" text-blue-600"
                            >
                                {firstNonEmptyUrl_}
                            </a>
                        )}
                    </div>
                </div>

                <div className="sm:m-5 md:m-10 lg:m-20">
                    <p
                        className="text-black dark:text-gray-400 leading-relaxed sm:text-md lg:text-lg"
                        dangerouslySetInnerHTML={{ __html: response.description.en }}
                    ></p>
                </div>
            </div>
        </div>
    );
}

export default CoinDetail;