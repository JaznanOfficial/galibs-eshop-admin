import React, { useState } from "react";
import useFetch from "../../Hooks/useFetch";

const StaffsSingleList = ({ staff }) => {
    console.log(staff);
    const { deleteData } = useFetch();   
    
    const { _id, name, img,email, phone,role} = staff;
    const [images, setImages] = useState({});
    console.log(images);

    const [showModal, setShowModal] = React.useState(false);

    
    const deleteHandler = (id) => {
        deleteData(`https://g-shop-server.onrender.com/api/v1/staffs?_id=${id}`);
    };

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="p-3 text-center font-medium">
                <h1 className="break-words whitespace-wrap w-full md:w-full  text-center">
                    {_id}
                </h1>
            </td>
            <td className="py-3 px-3 text-center">
                <div className="flex items-center justify-center">
                    <div className="">
                        <img
                            className="w-6 h-6 rounded-full"
                            src={img}
                            alt="user-img"
                        />
                    </div>
                    <p className="break-words whitespace-wrap w-20">{name}</p>
                </div>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-full text-center">
                    {email}
                </p>
            </td>

            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-full text-center">{phone}</p>
            </td>

            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-full text-center">{role}</p>
            </td>
            <td className="py-3 px-3 text-center">
                <div className="flex item-center justify-center">
                    {/* <div
                        className="w-4 mr-2 transform hover:text-primary hover:scale-110 cursor-pointer"
                        onClick={() => setShowModal(true)}
                    >
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div> */}

                    <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                    onClick={()=>deleteHandler(_id)}
                    >
                        <i className="fa-solid fa-trash-can"></i>
                    </div>
                </div>
                {/* showModal ? (
                    <div className="w-11/12 md:w-full mx-auto justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-full my-6 mx-auto max-w-6xl">
                            
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                
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
                                
                                <div className="h-96 overflow-y-scroll">
                                    <div className="w-full  md:px-0 my-5 flex justify-center items-center">
                                        <div className="w-11/12 mx-auto p-5 bg-white border ">
                                            
                                            <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                <div className="md:w-1/5">
                                                    <h1 className="text-md font-semibold text-primary">
                                                        Profile Picture
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
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <input
                                                                onChange={(e) => {
                                                                    setImages(e.target.files);
                                                                }}
                                                                id="dropzone-file"
                                                                type="file"
                                                                class="hidden"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="my-5 flex items-center justify-center gap-5">
                                                        {Array.from(images).map((image) => {
                                                            return (
                                                                <span>
                                                                    <img
                                                                        class="sm:w-40 w-10 sm:h-40 h-10  sm:rounded-lg rounded-3xl"
                                                                        src={
                                                                            image
                                                                                ? URL.createObjectURL(
                                                                                      image
                                                                                  )
                                                                                : null
                                                                        }
                                                                        alt="description"
                                                                    />
                                                                </span>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                <div className="md:w-1/5">
                                                    <h1 className="text-md font-semibold text-primary">
                                                        NAME
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
                                                        EMAIL
                                                    </h1>
                                                </div>
                                                <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                    <div className=" w-full">
                                                        <input
                                                            type="email"
                                                            placeholder="Type here"
                                                            className="input w-full focus:bg-white bg-green-100 text-black"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                <div className="md:w-1/5">
                                                    <h1 className="text-md font-semibold text-primary">
                                                        PHONE
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
                                                        ROLE
                                                    </h1>
                                                </div>

                                                <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                    <div className=" w-full">
                                                        <select className="select w-full focus:bg-white bg-green-100 text-black">
                                                            <option disabled selected>
                                                                Role
                                                            </option>
                                                            <option>Admin</option>
                                                            <option>Moderator</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="btn w-full md:w-1/5 bg-primary text-white hover:bg-white hover:text-primary hover:border-primary"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="ml-1">Save Changes</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null */}
            </td>
        </tr>
    );
};

export default StaffsSingleList;
