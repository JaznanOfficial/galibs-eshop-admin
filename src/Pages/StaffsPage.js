import React, { createContext, useEffect } from "react";
import StaffsList from "../Components/StaffsPage/StaffsList";
import StaffsTopBar from "../Components/StaffsPage/StaffsTopBar";
import useFetch from "../Hooks/useFetch";

const StaffsContext = createContext();

const StaffsPage = () => {
    const { getData, data, loading } = useFetch();

    useEffect(() => {
        getData("https://g-shop-server.onrender.com/api/v1/staffs");
    }, [data]);
    //console.log(data);
    return (
        <StaffsContext.Provider value={{ data, loading }}>
            <div className="py-10">
                <div>
                    <h1 className="text-2xl  font-extrabold text-black">Our Staffs</h1>
                </div>
                <StaffsTopBar />
                <StaffsList />
            </div>
        </StaffsContext.Provider>
    );
};

export default StaffsPage;
export { StaffsContext };
