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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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

    const labels_1 = ["January", "February", "March", "April", "May", "June"];
    

    const data = {
        labels: labels_1,
        datasets: [
            {
                label: "Monthly orders",
                data: [23, 100, 57, 24, 17, 45],
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },

            {
                label: "Monthly Sell",
                data: [52, 65, 89, 54, 85, 93],
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    return (
        <div className="md:w-full w-full bg-white border border-solid rounded-lg p-5 ">
            <Line options={options} data={data} />
        </div>
    );
};

export default LeftChart;
