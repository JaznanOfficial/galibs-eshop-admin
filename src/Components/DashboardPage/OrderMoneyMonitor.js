import React from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";

const OrderMoneyMonitor = () => {
    return (
        <>
            
            <div className="w-full px-5 md:px-0 my-5 flex justify-center items-center">
                <div className="md:w-11/12 w-full mx-auto flex flex-col md:flex-row justify-center items-center gap-5 m-5 md:m-0">
                    <div className="card md:w-96 w-full bg-emerald-500 shadow-xl md:my-0">
                        <div className="card-body ">
                            <div className="flex flex-col justify-center items-center text-white">
                                <h1 className="card-title">
                                    <FaMoneyCheckAlt className=" text-5xl" />
                                </h1>
                                <h2 className="text-xl my-2">Today's Order</h2>
                                <h3 className="text-5xl font-extrabold">৳ 35000</h3>
                            </div>
                        </div>
                    </div>
                    <div className="card md:w-96 w-full  bg-indigo-500 shadow-xl  md:my-0">
                        <div className="card-body ">
                            <div className="flex flex-col justify-center items-center text-white">
                                <h1 className="card-title">
                                    <FaOpencart className=" text-5xl" />
                                </h1>
                                <h2 className="text-xl my-2">This week's Order</h2>
                                <h3 className="text-5xl font-extrabold">৳ 35000</h3>
                            </div>
                        </div>
                    </div>
                    <div className="card md:w-96 w-full bg-pink-500 shadow-xl  md:my-0">
                        <div className="card-body ">
                            <div className="flex flex-col justify-center items-center text-white">
                                <h1 className="card-title">
                                    <FaIdCard className=" text-5xl" />
                                </h1>
                                <h2 className="text-xl my-2">This month's Order</h2>
                                <h3 className="text-5xl font-extrabold">৳ 35000</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderMoneyMonitor;
