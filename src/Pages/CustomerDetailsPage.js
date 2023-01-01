import React from "react";
import { useLocation } from "react-router-dom";
import CustomerDetailsAbout from "../Components/CustomerDetailsPage/CustomerDetailsAbout";

import CustomerDetailsOrders from "../Components/CustomerDetailsPage/CustomerDetailsOrders";
import CustomerDetailsOrderSearch from "../Components/CustomerDetailsPage/CustomerDetailsOrderSearch";
import CustomerDetailsTop from "../Components/CustomerDetailsPage/CustomerDetailsTop";

const CustomerDetailsPage = () => {
    const { customer } = useLocation();
    console.log(customer);
    return (
        <div className="py-10">
            <CustomerDetailsTop />
            <CustomerDetailsAbout />
            <CustomerDetailsOrderSearch />
            <CustomerDetailsOrders />
        </div>
    );
};

export default CustomerDetailsPage;
