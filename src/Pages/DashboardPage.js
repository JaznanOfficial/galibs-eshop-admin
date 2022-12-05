import React from "react";
import OrderMoneyMonitor from "../Components/DashboardPage/OrderMoneyMonitor";
import OrderMonitor from "../Components/DashboardPage/OrderMonitor";

const DashboardPage = () => {
    return (
        <div>
            <OrderMoneyMonitor />
            <OrderMonitor />
        </div>
    );
};

export default DashboardPage;
