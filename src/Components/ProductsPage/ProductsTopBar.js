import React from "react";

const ProductsTopBar = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <div className="w-full  md:px-0 my-5 flex justify-center items-center">
                <div className="w-11/12 mx-auto p-5 bg-white border flex flex-col md:flex-row justify-center items-center gap-5">
                    <div className=" w-full">
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input w-full focus:bg-white bg-green-100 text-black"
                        />
                    </div>
                    <div className=" w-full">
                        <select className="select w-full focus:bg-white bg-green-100 text-black">
                            <option disabled selected>
                                Brands
                            </option>
                            <option>Asus</option>
                            <option>Lenovo</option>
                            <option>Dell </option>
                            <option>Apple</option>
                            <option>Msi</option>
                        </select>
                    </div>
                    <div className=" w-full">
                        <select className="select w-full focus:bg-white bg-green-100 text-black">
                            <option disabled selected>
                                Price
                            </option>
                            <option>Low to high</option>
                            <option>High to low</option>
                        </select>
                    </div>
                    <div className=" w-full">
                        <button
                            className="btn btn-block bg-primary text-white hover:bg-white hover:text-primary hover:border-primary"
                            onClick={() => setShowModal(true)}
                        >
                            <i className="fa-solid fa-plus"></i>{" "}
                            <span className="ml-1">Add Product</span>
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
                                                                    Product Picture
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
                                                                    Product Name
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
                                                                    Product Price
                                                                </h1>
                                                            </div>
                                                            <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                                <div className=" w-full">
                                                                    <input
                                                                        type="number"
                                                                        placeholder="Price"
                                                                        className="input w-full focus:bg-white bg-green-100 text-black"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                            <div className="md:w-1/5">
                                                                <h1 className="text-md font-semibold text-primary">
                                                                    Product Quantity
                                                                </h1>
                                                            </div>
                                                            <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                                <div className=" w-full">
                                                                    <input
                                                                        type="number"
                                                                        placeholder="Quantity"
                                                                        className="input w-full focus:bg-white bg-green-100 text-black"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                            <div className="md:w-1/5">
                                                                <h1 className="text-md font-semibold text-primary">
                                                                    Brand
                                                                </h1>
                                                            </div>

                                                            <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                                <div className=" w-full">
                                                                    <select className="select w-full focus:bg-white bg-green-100 text-black">
                                                                        <option disabled selected>
                                                                            Brand
                                                                        </option>
                                                                        <option>Admin</option>
                                                                        <option>Moderator</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                            <div className="md:w-1/5">
                                                                <h1 className="text-md font-semibold text-primary">
                                                                    SSD
                                                                </h1>
                                                            </div>

                                                            <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                                <div className=" w-full">
                                                                    <select className="select w-full focus:bg-white bg-green-100 text-black">
                                                                        <option disabled selected>
                                                                            SSD
                                                                        </option>
                                                                        <option>Admin</option>
                                                                        <option>Moderator</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                            <div className="md:w-1/5">
                                                                <h1 className="text-md font-semibold text-primary">
                                                                    HDD
                                                                </h1>
                                                            </div>

                                                            <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                                <div className=" w-full">
                                                                    <select className="select w-full focus:bg-white bg-green-100 text-black">
                                                                        <option disabled selected>
                                                                            HDD
                                                                        </option>
                                                                        <option>Admin</option>
                                                                        <option>Moderator</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                            <div className="md:w-1/5">
                                                                <h1 className="text-md font-semibold text-primary">
                                                                    RAM
                                                                </h1>
                                                            </div>

                                                            <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                                <div className=" w-full">
                                                                    <select className="select w-full focus:bg-white bg-green-100 text-black">
                                                                        <option disabled selected>
                                                                            RAM
                                                                        </option>
                                                                        <option>Admin</option>
                                                                        <option>Moderator</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                            <div className="md:w-1/5">
                                                                <h1 className="text-md font-semibold text-primary">
                                                                    Monitor
                                                                </h1>
                                                            </div>

                                                            <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                                <div className=" w-full">
                                                                    <select className="select w-full focus:bg-white bg-green-100 text-black">
                                                                        <option disabled selected>
                                                                            Monitor
                                                                        </option>
                                                                        <option>Admin</option>
                                                                        <option>Moderator</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                            <div className="md:w-1/5">
                                                                <h1 className="text-md font-semibold text-primary">
                                                                    Processor
                                                                </h1>
                                                            </div>
                                                            <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                                <div className=" w-full">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Processor"
                                                                        className="input w-full focus:bg-white bg-green-100 text-black"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                            <div className="md:w-1/5">
                                                                <h1 className="text-md font-semibold text-primary">
                                                                    Short Details
                                                                </h1>
                                                            </div>
                                                            <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                                <div className=" w-full">
                                                                    <textarea
                                                                        type="text"
                                                                        placeholder="Short Details"
                                                                        className="textarea w-full h-32 focus:bg-white bg-green-100 text-black"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                            <div className="md:w-1/5">
                                                                <h1 className="text-md font-semibold text-primary">
                                                                    Description
                                                                </h1>
                                                            </div>
                                                            <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                                <div className=" w-full">
                                                                    <textarea
                                                                        type="text"
                                                                        placeholder="Description"
                                                                        className="textarea w-full h-96 focus:bg-white bg-green-100 text-black"
                                                                        defaultValue={""}
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
                                                    <span className="ml-1">Add Product</span>
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
        </>
    );
};

export default ProductsTopBar;
