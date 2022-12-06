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

    const labels = ["Asus", "Lenovo", "Hp", "Dell", "Apple", "Msi"];

    const data = {
        labels,
        datasets: [
            {
                label: "Monthly orders",
                data: [54, 10, 87,41,95,49,],
                borderColor: "white",
                backgroundColor: ["red", "blue", "green", "purple", "ske", "orange",],
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
