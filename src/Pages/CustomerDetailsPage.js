import React from "react";
import CustomerDetailsAbout from "../Components/CustomerDetailsPage/CustomerDetailsAbout";

import CustomerDetailsOrders from "../Components/CustomerDetailsPage/CustomerDetailsOrders";
import CustomerDetailsOrderSearch from "../Components/CustomerDetailsPage/CustomerDetailsOrderSearch";
import CustomerDetailsTop from "../Components/CustomerDetailsPage/CustomerDetailsTop";

const CustomerDetailsPage = () => {
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
