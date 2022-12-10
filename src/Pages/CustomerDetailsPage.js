import React from "react";
import CustomerDetailsAbout from "../Components/CustomerDetailsPage/CustomerDetailsAbout";
import CustomerDetailsTop from "../Components/CustomerDetailsPage/CustomerDetailsTop";

const CustomerDetailsPage = () => {
    return (
        <div className="py-10">
            <CustomerDetailsTop />
            <CustomerDetailsAbout />
        </div>
    );
};

export default CustomerDetailsPage;
