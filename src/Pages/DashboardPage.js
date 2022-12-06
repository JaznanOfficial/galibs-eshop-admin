import React from "react";
import ChartComponent from "../Components/DashboardPage/ChartComponent";
import OrderMoneyMonitor from "../Components/DashboardPage/OrderMoneyMonitor";
import OrderMonitor from "../Components/DashboardPage/OrderMonitor";

const DashboardPage = () => {
    return (
        <div>
            <OrderMoneyMonitor />
            <OrderMonitor />
            <ChartComponent />
        </div>
    );
};

export default DashboardPage;
