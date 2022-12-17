import React from "react";
import { FcGoogle } from 'react-icons/fc';
import useFirebase from "../Hooks/useFirebase";

const Login = () => {
    const {signInWithGoogle} = useFirebase()
    return (
        <>
            <div className="w-full px-5 md:px-0 flex justify-center items-center">
                <div className="md:w-11/12 w-full h-screen mx-auto flex justify-center items-center">
                    <div className="card md:w-96 h-96 bg-emerald-400 shadow-xl ">
                        <div className="card-body ">
                            <div className="flex flex-col justify-center items-center text-white">
                                <img
                                    className="w-52 h-52 rounded-full"
                                    
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WI0fEmhyWbKPf37f3uMMvc3WUmN9sqJG0g&usqp=CAU"
                                    alt=""
                                />

                                <div className=" w-full mt-10">
                                    <button
                                        className="input w-full bg-white hover:bg-green-50 hover:shadow-xl text-gray-600 flex flex-row justify-center items-center"
                                        onClick={signInWithGoogle}
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
