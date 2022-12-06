import React from "react";
import LeftChart from "./LeftChart";
import RightChart from "./RightChart";

const ChartComponent = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto my-5 gap-5">
            <LeftChart />

            <RightChart />
            
        </div>
    );
};

export default ChartComponent;
