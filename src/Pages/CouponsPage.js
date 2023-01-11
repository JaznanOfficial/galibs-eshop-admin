import React, { createContext, useEffect } from "react";
import CouponList from "../Components/CouponsPage/CouponList";
import CouponTopBar from "../Components/CouponsPage/CouponTopBar";
import useFetch from "../Hooks/useFetch";

const CouponContext = createContext();

const CouponsPage = () => {
    const { getData, data, loading } = useFetch();

    useEffect(() => {
        getData("https://g-shop-server.onrender.com/api/v1/coupons");
    }, [data]);
    //console.log(data);
    return (
        <CouponContext.Provider value={{ data, loading }}>
            <div className="py-10">
                <div>
                    <h1 className="text-2xl  font-extrabold text-black">Coupons</h1>
                </div>
                <CouponTopBar />
                <CouponList />
            </div>
        </CouponContext.Provider>
    );
};

export default CouponsPage;
export { CouponContext };
