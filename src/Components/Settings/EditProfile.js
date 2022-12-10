import React from "react";

const EditProfile = () => {
    return (
        <div>
            <div className="w-full  md:px-0 my-5 flex justify-center items-center">
                <div className="w-11/12 mx-auto p-5 bg-white border ">
                    <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                        <div className="md:w-1/5">
                            <h1 className="text-md font-semibold text-primary">Profile Picture</h1>
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
                                            <span class="font-semibold">Click to upload</span> or
                                            drag and drop
                                        </p>
                                        {/* <p class="text-xs text-gray-500 dark:text-gray-400">
                                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                                        </p> */}
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" />
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
                            <h1 className="text-md font-semibold text-primary">Name</h1>
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
                            <h1 className="text-md font-semibold text-primary">Email</h1>
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
                            <h1 className="text-md font-semibold text-primary">Phone Number</h1>
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
                            <h1 className="text-md font-semibold text-primary">Your role</h1>
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
                    <div className=" w-full flex justify-end items-center">
                        <button className="btn w-full md:w-1/5 bg-primary text-white hover:bg-white hover:text-primary hover:border-primary">
                            <i className="fa-solid fa-plus"></i>{" "}
                            <span className="ml-1">Update Profile</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
