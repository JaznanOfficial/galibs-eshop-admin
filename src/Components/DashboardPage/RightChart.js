import React from "react";
import { Pie } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const RightChart = () => {
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
                borderColor: ["red", "blue", "green", "purple", "ske", "orange"],
                backgroundColor: ["red", "blue", "green", "purple", "ske", "orange"],
            },
        ],
    };
    return (
        <div className=" w-full bg-white border border-solid rounded-lg p-5 ">
            
                <Pie options={options} data={data} />
            
        </div>
    );
};

export default RightChart;
