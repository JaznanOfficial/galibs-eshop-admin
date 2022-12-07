import React from 'react';
import CustomerTopBar from '../Components/CustomerPage/CustomerTopBar';
import CustomerList from '../Components/CustomerPage/CustomerList';

const CustomersPage = () => {
    return (
        <div className="py-10">
            <div>
                <h1 className="text-2xl  font-extrabold text-black">Customers</h1>
            </div>
            <CustomerTopBar />
            <CustomerList />
        </div>
    );
};

export default CustomersPage;