import React from "react";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <>
            <div className="w-full px-5 md:px-0 flex justify-center items-center">
                <div className="md:w-11/12 w-full h-screen mx-auto flex justify-center items-center">
                    <div className="card md:w-96 h-96 bg-emerald-200 shadow-xl ">
                        <div className="card-body ">
                            <div className="flex flex-col justify-center items-center text-white">
                                <img
                                    className="w-52 h-52 rounded-full"
                                    
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc64rCnCx-jAUwswI3CHx8diq5psB3lbrHbr1RNhb9MFZkvD7-0n9qPhhsZEUIFoLCCkk&usqp=CAU"
                                    alt=""
                                />

                                <div className=" w-full mt-10">
                                    <button
                                        className="input w-full focus:bg-white bg-green-100 text-gray-400 flex flex-row justify-center items-center"
                                        // onClick={() => setShowModal(false)}
                                    >
                                        <FcGoogle />
                                        <span className="ml-5">Login With Google</span>
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
