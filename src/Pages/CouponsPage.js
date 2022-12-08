import React from 'react';
import CouponList from '../Components/CouponsPage/CouponList';
import CouponTopBar from '../Components/CouponsPage/CouponTopBar';

const CouponsPage = () => {
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