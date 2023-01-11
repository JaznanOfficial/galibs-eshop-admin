import React from "react";
import useFetch from "../../Hooks/useFetch";

const CouponSingleList = ({ coupon }) => {
    console.log(coupon);
    const { deleteData } = useFetch();
    const { _id, name, code,percent, starting_date, ending_date} = coupon;
   
    const [showModal, setShowModal] = React.useState(false);

    const deleteHandler = (id) => {
        deleteData(`https://g-shop-server.onrender.com/api/v1/coupons?_id=${id}`);
    };


    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-16">{_id}</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap  text-center">{name}</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap  text-center">{code}</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap text-center w-24 mx-auto">{percent}</p>
            </td>
            {/* <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-24 mx-auto text-center">Asus ROG</p>
            </td> */}
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-24 mx-auto text-center">{starting_date}</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-24 mx-auto text-center">{ending_date}</p>
            </td>

            <td className="py-3 px-3 text-center">
                {/* <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs text-center">
                        Expired
                    </span> */}

                <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs text-center">
                    Active
                </span>
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
                    <>
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
                                                                CAMPAIGN NAME
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
                                                                CODE
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
                                                                PERCENTAGE
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
                                                                PRODUCT
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
                                                                STARTING DATE
                                                            </h1>
                                                        </div>
                                                        <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                            <div className=" w-full">
                                                                <input
                                                                    type="date"
                                                                    className="input w-full focus:bg-white bg-green-100 text-gray-400"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                        <div className="md:w-1/5">
                                                            <h1 className="text-md font-semibold text-primary">
                                                                ENDING DATE
                                                            </h1>
                                                        </div>
                                                        <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                            <div className=" w-full">
                                                                <input
                                                                    type="date"
                                                                    className="input w-full focus:bg-white bg-green-100 text-gray-400"
                                                                />
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
                        </>
                ) : null */}
            </td>
        </tr>
    );
};

export default CouponSingleList;
