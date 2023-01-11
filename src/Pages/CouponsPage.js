import React, { useEffect } from 'react';
import CouponList from '../Components/CouponsPage/CouponList';
import CouponTopBar from '../Components/CouponsPage/CouponTopBar';
import useFetch from '../Hooks/useFetch';

const CouponsPage = () => {

    const { getData, data, loading } = useFetch();

    useEffect(() => {
        getData("https://g-shop-server.onrender.com/api/v1/brands");
    }, []);
    console.log(data);
    return (
        <div className="py-10">
            <div>
                <h1 className="text-2xl  font-extrabold text-black">Coupons</h1>
            </div>
            <CouponTopBar />
            <CouponList />
        </div>
    );
};

export default CouponsPage;