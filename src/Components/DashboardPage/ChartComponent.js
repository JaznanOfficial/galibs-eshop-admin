import React from "react";
import LeftChart from "./LeftChart";
import RightChart from "./RightChart";

const ChartComponent = () => {
    const labels_1 = ["January", "February", "March", "April", "May", "June"];
    const labels_2 = [ "July", "August", "September", "October", "November", "December"];

    
    
    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto my-5 gap-5">
            <div className="flex flex-col justify-center items-center gap-5 w-full m-0">
                <LeftChart label={ labels_1} />
                <LeftChart label={ labels_2} />
            </div>

            <div className="flex flex-col justify-center items-center w-full m-0 h-full">
                <RightChart />
            </div>
        </div>
    );
};

export default ChartComponent;
