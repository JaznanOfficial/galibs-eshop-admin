import React from 'react';

const OrdersTopBar = () => {
    return (
        <div>
            <div className="w-full  md:px-0 my-5 flex justify-center items-center">
                <div className="w-11/12 mx-auto p-5 bg-white border flex flex-col md:flex-row justify-center items-center gap-5">
                    <div className=" w-full">
                        <input
                            type="text"
                            placeholder="Search by name/mobile"
                            className="input w-full focus:bg-white bg-green-100 text-black"
                        />
                    </div>
                    <div className=" w-full">
                        <select className="select w-full focus:bg-white bg-green-100 text-black">
                            <option disabled selected>
                                Status
                            </option>
                            <option>Pending</option>
                            <option>Processing</option>
                            <option>Shipping</option>
                            <option>Delivered</option>
                            <option>Cancelled</option>
                            
                        </select>
                    </div>
                    <div className=" w-full">
                        <select className="select w-full focus:bg-white bg-green-100 text-black">
                            <option disabled selected>
                                Orders Limit
                            </option>
                            <option>Low to high</option>
                            <option>High to low</option>
                        </select>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default OrdersTopBar;