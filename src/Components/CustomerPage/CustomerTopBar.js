import React from "react";

const CustomerTopBar = () => {


    
    return (
        
            <div className="w-full  md:px-0 my-5 flex justify-center items-center">
                <div className="w-11/12 mx-auto p-5 bg-white border flex flex-col md:flex-row justify-center items-center gap-5">
                    <div className=" w-full">
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input w-full focus:bg-white bg-green-100 text-black"
                        />
                    </div>
                    
                    {/* <div className=" w-full">
                        <button className="btn btn-block bg-primary text-white hover:bg-white hover:text-primary hover:border-primary">
                            <i className="fa-solid fa-plus"></i>{" "}
                            <span className="ml-1">Add Product</span>
                        </button>
                    </div> */}
                </div>
            </div>
        
    );
};

export default CustomerTopBar;
