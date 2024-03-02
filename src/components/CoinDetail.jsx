import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import LoadingBar from "./LoadingBar";
import millify from "millify";

const CoinDetail = () => {
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
    console.log(firstNonEmptyUrl);

    const homepageUrls = response.links.homepage || [];
    const firstNonEmptyUrl_ = homepageUrls.find(url => url !== '');
    console.log(firstNonEmptyUrl_);

    const genesisDate = response["genesis_date"];
    console.log("Genesis Date:", genesisDate);
    
    const priceChangePercentage24h = response.market_data.price_change_percentage_24h;
    console.log("Price Change Percentage (24h):", priceChangePercentage24h);
    
    const priceChangePercentage30d = response.market_data.price_change_percentage_30d;
    console.log("Price Change Percentage (24h):", priceChangePercentage30d);
    //if percentage<0 then it is in negative 
    const priceChangePercentage60d = response.market_data.price_change_percentage_60d;
    console.log("Price Change Percentage (24h):", priceChangePercentage60d);
    
    const marketCapRank = response["market_cap_rank"];
    console.log("Market Cap Rank:", marketCapRank);

    const usdPrice = response.market_data.current_price.usd;
    console.log("USD Price:", usdPrice);

    const lowPrice = response.market_data.low_24h.usd;
    console.log("low Price:", lowPrice);

    const highPrice = response.market_data.high_24h.usd;
    console.log("high Price:", highPrice);

    const marketcap = response.market_data.market_cap.usd;
    console.log("USD market :", millify(marketcap));

    return (
        <div>
            <div>
                <img src={response.image.small} alt={response.name} />
                <h1>{response.name}</h1>
                <p>{response.symbol}</p>
            </div>
            <p
                className="[&>a]:text-blue-600 [&>a]:underline"
                dangerouslySetInnerHTML={{ __html: response.description.en }}
            ></p>
        </div>
    );
}

export default CoinDetail;
