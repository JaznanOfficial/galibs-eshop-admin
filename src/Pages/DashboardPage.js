import React from "react";
import ChartComponent from "../Components/DashboardPage/ChartComponent";
import OrderMoneyMonitor from "../Components/DashboardPage/OrderMoneyMonitor";
import OrderMonitor from "../Components/DashboardPage/OrderMonitor";

const DashboardPage = () => {
    return (
        <div className="py-10">
            <div>
                <h1 className="text-2xl font-extrabold text-black">Dashboard Overview</h1>
            </div>
            <OrderMoneyMonitor />
            <OrderMonitor />
            <ChartComponent />
        </div>
    );
};

export default DashboardPage;
