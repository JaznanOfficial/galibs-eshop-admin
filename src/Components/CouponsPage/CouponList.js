import React, { useContext } from "react";
import { CouponContext } from "../../Pages/CouponsPage";
import CouponSingleList from "./CouponSingleList";

const CouponList = () => {

    const { data, loading } = useContext(CouponContext); 
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
                                        <th className="py-3 px-3 text-center">Campaign Name</th>
                                        <th className="py-3 px-3 text-center">Code</th>
                                        <th className="py-3 px-3 text-center">Percentage</th>
                                        {/* <th className="py-3 px-3 text-center">Product</th> */}
                                        <th className="py-3 px-3 text-center">Starting Date</th>

                                        <th className="py-3 px-3 text-center">Ending Date</th>
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
                                        {data.reverse().map((coupon) => {
                                            return (
                                                <CouponSingleList
                                                    coupon={coupon}
                                                    key={coupon?._id}
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

export default CouponList;
