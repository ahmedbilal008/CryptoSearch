import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios"

const CoinDetail = () => {
    const { id } = useParams();
    const { response } = useAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false`);
    console.log(response);

    if (!response) return <div>Loading...</div>;
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
    )
}

export default CoinDetail