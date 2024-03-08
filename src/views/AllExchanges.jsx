import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";
import millify from "millify";

const AllExchanges = ({ darkMode }) => {
    const { response } = useAxios('exchanges?per_page=100');

    return (
        <div className={`${darkMode && "dark"}`}>
            <div className="light-mode-gradient dark:dark-mode-gradient">
                <div className="pt-10 m-5 mt-0 mb-0 pb-10">
                    <h1 className="text-2xl text-gray-400 font-bold mb-4">Top 100 Exchanges</h1>
                    {response && response.map((exchange) => (
                        <Link to={`/exchange/${exchange.id}`} key={exchange.id}>
                            <div className="grid grid-cols-3 lg:grid-cols-4 gap-[6rem] p-4 rounded-md shadow-orange-400/50 shadow-md hover:shadow-lg hover:shadow-orange-500 transition duration-300">
                                <div className="flex items-center">
                                    <img
                                        src={exchange.image}
                                        alt={exchange.name}
                                        className="w-10 rounded-3xl mr-2"
                                    />
                                    <div>
                                        <p className="font-semibold  text-black dark:text-gray-400">{exchange.name}</p>
                                    </div>
                                </div>
                                <span className="font-semibold text-black dark:text-gray-400">{millify(exchange.trade_volume_24h_btc)}</span>
                                <div className="flex">
                                    <span className="font-semibold text-black dark:text-gray-400">{exchange.trust_score_rank}</span>
                                </div>
                                <div className="hidden lg:block text-black dark:text-gray-400">
                                    <p>{exchange.country}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default AllExchanges