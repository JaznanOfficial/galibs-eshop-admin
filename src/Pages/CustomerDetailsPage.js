import React from "react";
import { useLocation } from "react-router-dom";
import CustomerDetailsAbout from "../Components/CustomerDetailsPage/CustomerDetailsAbout";

import CustomerDetailsOrders from "../Components/CustomerDetailsPage/CustomerDetailsOrders";
import CustomerDetailsOrderSearch from "../Components/CustomerDetailsPage/CustomerDetailsOrderSearch";
import CustomerDetailsTop from "../Components/CustomerDetailsPage/CustomerDetailsTop";

const CustomerDetailsPage = ({ customer }) => {
    const { state } = useLocation();
    console.log(state);
    return (
        <div className="py-10">
            <CustomerDetailsTop customer={ state } />
            <CustomerDetailsAbout customer={ state }/>
            <CustomerDetailsOrderSearch customer={ state }/>
            <CustomerDetailsOrders customer={ state }/>
        </div>
    );
};

export default CustomerDetailsPage;
