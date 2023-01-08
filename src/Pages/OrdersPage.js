import React, { createContext, useEffect } from "react";
import OrdersList from "../Components/OrdersPage/OrdersList";
import OrdersTopBar from "../Components/OrdersPage/OrdersTopBar";
import useFetch from "../Hooks/useFetch";

const OrdersContext = createContext();

const OrdersPage = () => {
    const { getData, data, loading } = useFetch();

    useEffect(() => {
        getData("https://g-shop-server.onrender.com/api/v1/orders");
    }, []);
    console.log(data);
    return (
        <OrdersContext.Provider value={{ data, loading }}>
            <div className="py-10">
                <div>
                    <h1 className="text-2xl  font-extrabold text-black">Orders</h1>
                </div>
                {/* <OrdersTopBar /> */}
                <OrdersList />
            </div>
        </OrdersContext.Provider>
    );
};

export default OrdersPage;
export {OrdersContext}
