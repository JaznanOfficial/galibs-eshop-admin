import React, { useContext } from "react";
import CustomerSingleList from "./CustomerSingleList";
import { CustomersContext } from "../../Pages/CustomersPage";


const CustomerList = () => {
    const { data, loading } = useContext(CustomersContext);

    return (
        <>
            <div>
                <div className="  flex items-top justify-center  font-sans overflow-auto">
                    <div className="w-11/12 mx-auto">
                        <div className="w-auto overflow-auto bg-white shadow-md rounded">
                            <table className="w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-3 text-center">Id</th>
                                        <th className="py-3 px-3 text-center">Name</th>
                                        <th className="py-3 px-3 text-center">Joining Date</th>
                                        <th className="py-3 px-3 text-center">Email</th>
                                        <th className="py-3 px-3 text-center">Phone</th>
                                        <th className="py-3 px-3 text-center">Details</th>

                                        <th className="py-3 px-3 text-center">Block</th>
                                        <th className="py-3 px-3 text-center">Status</th>
                                        <th className="py-3 px-3 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody
                                        className={
                                            loading
                                                ? "text-gray-600 text-sm font-light flex justify-center"
                                                : "text-gray-600 text-sm font-light"
                                        }
                                    >
                                        {data.map((customer) => {
                                            return (
                                                <CustomerSingleList
                                                    customer={customer}
                                                    key={customer?._id}
                                                />
                                            );
                                        })}
                                    </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerList;
