import React from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";

const Login = () => {
    return (
        <>
            <div className="w-full px-5 md:px-0 my-5 flex justify-center items-center">
                <div className="md:w-11/12 w-full  mx-auto flex justify-center items-center">
                    <div className="card md:w-96 w-full h-96 bg-emerald-500 shadow-xl md:my-0">                       
                        <div className="card-body ">
                            <div className="flex flex-col justify-center items-center text-white">
                                <img src="" alt="" srcset="" />
                                <h1 className="card-title">
                                    <FaMoneyCheckAlt className=" text-5xl" />
                                </h1>
                                <h2 className="text-xl my-2">Today's Order</h2>
                                <h3 className="text-5xl font-extrabold">৳ 35000</h3>

                                <div className=" w-full m-20">
                                    <button
                                    className="input w-full focus:bg-white bg-green-100 text-gray-400"
                                        // onClick={() => setShowModal(false)}
                                    >                               
                                        <span className="ml-1">Login</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
