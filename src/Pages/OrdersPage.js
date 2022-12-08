import React from 'react';
import OrdersList from '../Components/OrdersPage/OrdersList';
import OrdersTopBar from '../Components/OrdersPage/OrdersTopBar';

const OrdersPage = () => {
    return (
        <div className="py-10">
            <div>
                <h1 className="text-2xl  font-extrabold text-black">Orders</h1>
            </div>
            <OrdersTopBar />
            <OrdersList />
        </div>
    );
};

export default OrdersPage;