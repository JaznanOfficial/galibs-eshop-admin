import React, { useState } from 'react';

const BrandSingleList = () => {


    const [status, setStatus] = useState(false);
    const [showModal, setShowModal] = React.useState(false);


    const statusHandler = () => {

        setStatus(!status);
    };

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="p-3 text-center font-medium">
                <h1 className="break-words whitespace-wrap w-full md:w-full  text-center">
                    12345967894652163
                </h1>
            </td>
            <td className="py-3 px-3 text-center">
                <div className="flex justify-center items-center ">
                    <div className="mr-1">
                        <img
                            className="w-8 h-8 rounded-full"
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                            alt="product-img"
                        />
                    </div>
                    
                </div>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-full text-center">Lenovo</p>
            </td>
            
            <td className="p-3 text-center font-medium">
                <input
                    type="checkbox"
                    className="toggle checked:toggle-error"
                    onClick={statusHandler}
                />
            </td>

            <td className="py-3 px-3 text-center">
                {status ? (
                    <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs text-center">
                        Hidden
                    </span>
                ) : (
                    <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs text-center">
                        Published
                    </span>
                )}
            </td>
            <td className="py-3 px-3 text-center">
                <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-primary hover:scale-110"
                    onClick={() => setShowModal(true)}
                    >
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                    
                    <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                        <i className="fa-solid fa-trash-can"></i>
                    </div>
                </div>
                {showModal ? (
                    <>
                        <div className="w-11/12 md:w-full mx-auto justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-full my-6 mx-auto max-w-6xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-red-400  h-6 w-6 text-5xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="h-96 overflow-y-scroll">
                                        <div className="w-full  md:px-0 my-5 flex justify-center items-center">
                                            <div className="w-11/12 mx-auto p-5 bg-white border ">
                                                <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                    <div className="md:w-1/5">
                                                        <h1 className="text-md font-semibold text-primary">
                                                            Brand Picture
                                                        </h1>
                                                    </div>
                                                    <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                        <div class="flex items-center justify-center w-full">
                                                            <label
                                                                for="dropzone-file"
                                                                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                                            >
                                                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                                    <i class="fa-solid fa-cloud-arrow-up text-primary text-3xl"></i>
                                                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                                        <span class="font-semibold">
                                                                            Click to upload
                                                                        </span>{" "}
                                                                        or drag and drop
                                                                    </p>
                                                                    {/* <p class="text-xs text-gray-500 dark:text-gray-400">
                                                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                                                            </p> */}
                                                                </div>
                                                                <input
                                                                    id="dropzone-file"
                                                                    type="file"
                                                                    class="hidden"
                                                                />
                                                            </label>
                                                        </div>
                                                        <div className="mt-5">
                                                            <img
                                                                class="w-40 h-40  rounded-full"
                                                                src="https://i.ibb.co/0mKh0Zb/profile-1-removebg-preview-3.png"
                                                                alt="description"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                    <div className="md:w-1/5">
                                                        <h1 className="text-md font-semibold text-primary">
                                                            Brand Name
                                                        </h1>
                                                    </div>
                                                    <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                        <div className=" w-full">
                                                            <input
                                                                type="text"
                                                                placeholder="Type here"
                                                                className="input w-full focus:bg-white bg-green-100 text-black"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                    <div className="md:w-1/5">
                                                        <h1 className="text-md font-semibold text-primary">
                                                            Email
                                                        </h1>
                                                    </div>
                                                    <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                        <div className=" w-full">
                                                            <input
                                                                type="text"
                                                                placeholder="Type here"
                                                                className="input w-full focus:bg-white bg-green-100 text-black"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                    <div className="md:w-1/5">
                                                        <h1 className="text-md font-semibold text-primary">
                                                            Phone Number
                                                        </h1>
                                                    </div>
                                                    <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                        <div className=" w-full">
                                                            <input
                                                                type="Number"
                                                                placeholder="Type here"
                                                                className="input w-full focus:bg-white bg-green-100 text-black"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                    <div className="md:w-1/5">
                                                        <h1 className="text-md font-semibold text-primary">
                                                            Your role
                                                        </h1>
                                                    </div>
                                                    <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                        <div className=" w-full">
                                                            <input
                                                                type="text"
                                                                placeholder="Type here"
                                                                className="input w-full focus:bg-white bg-green-100 text-black"
                                                            />
                                                        </div>
                                                    </div>
                                                </div> */}
                                                
                                            </div>
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        {/* <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            
                                        >
                                            Save Changes
                                        </button> */}

                                        <button
                                            className="btn w-full md:w-1/5 bg-primary text-white hover:bg-white hover:text-primary hover:border-primary"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <i className="fa-solid fa-plus"></i>{" "}
                                            <span className="ml-1">Add Brand</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
            </td>
        </tr>
    );
};

export default BrandSingleList;