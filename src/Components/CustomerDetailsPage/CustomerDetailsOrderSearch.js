import React from "react";

const CustomerDetailsOrderSearch = () => {
    return (
        <div className="w-full  md:px-0 my-5 flex justify-center items-center">
            <div className="w-11/12 mx-auto p-5 bg-white border flex flex-col justify-center items-center gap-5">
                <div>
                    <h1 className="text-2xl  font-extrabold text-black">Search customer's orders</h1>
                </div>
                <div className=" w-full">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input w-full focus:bg-white bg-green-100 text-black"
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomerDetailsOrderSearch;
