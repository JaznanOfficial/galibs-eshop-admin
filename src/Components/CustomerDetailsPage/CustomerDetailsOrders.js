import React from "react";
import CustomerDetailsOrderList from "./CustomerDetailsOrderList";

const CustomerDetailsOrders = () => {
    return (
        <div>
            <div className="  flex items-top justify-center  font-sans overflow-auto">
                <div className="w-11/12 mx-auto">
                    <div className="w-auto overflow-auto bg-white shadow-md rounded">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-3 text-center">Id</th>
                                    <th className="py-3 px-3 text-center">Order Date</th>
                                    

                                    
                                    <th className="py-3 px-3 text-center">Price</th>
                                    <th className="py-3 px-3 text-center">Method</th>

                                    <th className="py-3 px-3 text-center">Status</th>
                                    
                                    <th className="py-3 px-3 text-center">Invoice</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                <CustomerDetailsOrderList />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetailsOrders;
