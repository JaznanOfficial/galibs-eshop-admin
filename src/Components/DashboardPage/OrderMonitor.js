import React from "react";

const OrderMonitor = () => {
    return (
        <div className="flex items-center bg-sky-200 text-gray-800 w-11/12 mx-auto">
            <div className="p-4 w-full">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                            <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">Total orders</div>
                                <div className="font-bold text-xl">1259</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                            <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
                                <i className="fa-solid fa-repeat"></i>
                            </div>
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">Pending Orders</div>
                                <div className="font-bold text-xl">230</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                            <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500">
                                <i className="fa-solid fa-truck-fast"></i>
                            </div>
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">Order Processing</div>
                                <div className="font-bold text-lg">190</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                            <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500">
                                <i className="fa-solid fa-check-double"></i>
                            </div>
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">Order Complete</div>
                                <div className="font-bold text-lg">32</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderMonitor;
