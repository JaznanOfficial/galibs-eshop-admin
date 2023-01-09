import React, { useEffect, useRef, useState } from "react";
import useFetch from "../../Hooks/useFetch";

const BrandTopBar = () => {

    const { postData, data, loading } = useFetch();
    // const [images, setImages] = useState({});
    // console.log(images);
    const [showModal, setShowModal] = React.useState(false);

    const [imageUpload, setImageUpload] = useState(null)||{};

    const handleImage = (e) => {
        const image = e.target.files[0];
        const formData = new FormData();
        formData.set("key", "1cbd6d1d311a1b351898b64918af6ef1");
        formData.append("image", image);


        postData("https://api.imgbb.com/1/upload", formData)
        console.log(data);
        // setImageUpload()
    };
    const nameRef = useRef();
    const handleSubmit = () => {
        const name = nameRef.current.value;
        const img = imageUpload;
        
        console.log(name);
        console.log(img);
    }

    return (
        <div className="w-full  md:px-0 my-5 flex justify-center items-center">
            <div className="w-11/12 mx-auto p-5 bg-white border flex flex-col md:flex-row justify-center items-center gap-5">
                {/* <div className=" w-full">
                    <input
                        type="text"
                        placeholder="Search by brand name"
                        className="input w-full focus:bg-white bg-green-100 text-black"
                    />
                </div> */}
                <div className=" w-full">
                    <select className="select w-full focus:bg-white bg-green-100 text-black">
                        <option disabled selected>
                            Brand
                        </option>
                        <option>Asus</option>
                        <option>Lenovo</option>
                        <option>Apple</option>
                        <option>Dell</option>
                        <option>Hp</option>
                    </select>
                </div>

                <div className=" w-full">
                    <button
                        className="btn btn-block bg-primary text-white hover:bg-white hover:text-primary hover:border-primary"
                        onClick={() => setShowModal(true)}
                    >
                        <i className="fa-solid fa-plus"></i> <span className="ml-1">Add Brand</span>
                    </button>
                    {/* modal */}

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
                                        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        
                                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                            <i class="fa-solid fa-cloud-arrow-up text-primary text-3xl"></i>
                                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span class="font-semibold">
                                                    Click to upload
                                                </span>
                                            </p>
                                        </div>
                                        
                                         <input
                                            onChange={handleImage}
                                            id="dropzone-file"
                                            type="file"
                                            class="hidden"
                                            accept="image/*"
                                        />
                                    </label>
                                </div>
                                <div className="my-5 flex items-center justify-center gap-5">
                                {
                                    imageUpload &&
                                    <span>
                                        <img
                                        class="sm:w-40 w-10 sm:h-40 h-10  sm:rounded-lg rounded-3xl"
                                        src={imageUpload}
                                        alt="description"/>
                                    </span>
                                }
                                    
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
                                                                    ref={nameRef}
                                                                    type="text"
                                                                    placeholder="Type here"
                                                                    className="input w-full focus:bg-white bg-green-100 text-black"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
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

                                            <button
                                                className="btn w-full md:w-1/5 bg-primary text-white hover:bg-white hover:text-primary hover:border-primary"
                                                onClick={() => {
                                                    setShowModal(false);
                                                    handleSubmit();
                                                }}
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
                </div>
            </div>
        </div>
    );
};

export default BrandTopBar;
