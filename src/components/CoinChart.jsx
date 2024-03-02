import useAxios from "../hooks/useAxios"
import { useParams } from "react-router-dom";
import LoadingBar from "./LoadingBar";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const CoinChart = () => {
    const { id } = useParams();
    const { response } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`);

    if (!response) {
        return (
            <div className="wrapper-container mt-10">
                <LoadingBar className="h-8 w-32" />
                <LoadingBar className="h-8 w-full mt-4" />
            </div>
        )
    }
    const chartData = response.prices.map(price => ({ time: price[0], price: price[1] }));
    const options = {
        responsive: true
    }
    const data = {
        labels: chartData.map(data => {
            const date = new Date(data.time);
            const month = date.toLocaleString('default', { month: 'short' });
            const day = date.getDate();
            return `${month}${day}`;
        }),
        datasets: [
            {
                fill: true,
                label: 'Price',
                data: chartData.map(data => data.price),
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
            }
        ]
    }

    return (
        <div>
            <Line options={options} data={data} />
        </div>
    )
}

export default CoinChart