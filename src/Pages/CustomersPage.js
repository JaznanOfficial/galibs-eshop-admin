import React, { useEffect } from "react";
import CustomerTopBar from "../Components/CustomerPage/CustomerTopBar";
import CustomerList from "../Components/CustomerPage/CustomerList";
import { createContext } from "react";
import useFetch from "../Hooks/useFetch";

const CustomersContext = createContext();
const CustomersPage = () => {
    const { getData, data, loading } = useFetch();

    useEffect(() => {
        getData("https://g-shop-server.onrender.com/api/v1/users");
    }, [data]);
    console.log(data);

    return (
        <CustomersContext.Provider value={{ data, loading }}>
            <div className="py-10">
                <div>
                    <h1 className="text-2xl  font-extrabold text-black">Customers</h1>
                </div>
                {/* <CustomerTopBar /> */}
                <CustomerList />
            </div>
        </CustomersContext.Provider>
    );
};

export default CustomersPage;
export { CustomersContext };
