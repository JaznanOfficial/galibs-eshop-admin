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
                            <option>Homer</option>
                            <option>Marge</option>
                            <option>Bart</option>
                            <option>Lisa</option>
                            <option>Maggie</option>
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
                    <div className=" w-full">
                        <button className="btn btn-wide bg-primary text-white hover:bg-white hover:text-primary hover:border-primary">
                            <i className="fa-solid fa-plus"></i>{" "}
                            <span className="ml-1">Download All Orders</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersTopBar;