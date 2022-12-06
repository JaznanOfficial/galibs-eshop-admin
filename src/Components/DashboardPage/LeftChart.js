import React from "react";
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip,Legend);

const LeftChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Sell and Order Chart",
            },
        },
    };

    const labels = ["January", "February", "March", "April", "May", "June"];

    

    const data = {
        labels,
        datasets: [
            
            {
                label: "Monthly orders",
                data: [0, 10, 5, 2, 20, 45],
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
                
                
            },
        ],
    };

    return (
        <div className="md:w-11/12 w-full bg-white border border-solid rounded-lg p-5 ">
            <Line options={options} data={data}  />
        </div>
    );
};

export default LeftChart;
