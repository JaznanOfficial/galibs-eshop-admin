import React from "react";
import LeftChart from "./LeftChart";
import RightChart from "./RightChart";

const ChartComponent = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto my-5 gap-5">
            <div className="flex flex-col justify-center items-center gap-5 w-full m-0">
                <LeftChart />
                <LeftChart />
            </div>

            <div className="flex flex-col justify-center items-center w-full m-0 h-full">
            <RightChart />
            </div>
            
        </div>
    );
};

export default ChartComponent;
