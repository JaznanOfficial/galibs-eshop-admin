import React from "react";

const BrandTopBar = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className="w-full  md:px-0 my-5 flex justify-center items-center">
            <div className="w-11/12 mx-auto p-5 bg-white border flex flex-col md:flex-row justify-center items-center gap-5">
                <div className=" w-full">
                    <input
                        type="text"
                        placeholder="Search by brand name"
                        className="input w-full focus:bg-white bg-green-100 text-black"
                    />
                </div>
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
                {/* <div className=" w-full">
                        <select className="select w-full focus:bg-white bg-green-100 text-black">
                            <option disabled selected>
                                Price
                            </option>
                            <option>Low to high</option>
                            <option>High to low</option>
                        </select>
                    </div> */}
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
                                <div className="relative w-full my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                            <h3 className="text-3xl font-semibold">Modal Title</h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span className="bg-transparent text-primary opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="h-96">
                                        
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
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Save Changes
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
