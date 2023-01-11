import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import useFetch from "../../Hooks/useFetch";

const CouponTopBar = () => {
    const { postData } = useFetch();
    const [loading, setLoading] = useState(false);
    // //console.log(images);

    const nameRef = useRef();
    const codeRef = useRef();
    const percentRef = useRef();
    const starting_dateRef = useRef();
    const ending_dateRef = useRef();
    const handleSubmit = async () => {
        const name = nameRef.current.value;
        const code = codeRef.current.value;
        const percent = percentRef.current.value;
        const starting_date = starting_dateRef.current.value;
        const ending_date = ending_dateRef.current.value;
        const couponData = { name, code, percent, starting_date, ending_date };
        // //console.log(couponData);
        const couponUpload = await postData(
            "https://g-shop-server.onrender.com/api/v1/coupons",
            couponData
        );
        // //console.log(couponUpload);
        if (couponUpload.data.status === "Successful") {
            // setSuccess(true);

            // setDataLoading(false);

            toast.success(
                "Your data successfully added. If you can't see any update, please refresh the page. we're working on real-time data fetching. that's coming soon. inshallah!"
            );
        }
    };

    const [showModal, setShowModal] = React.useState(false);

    return (
        <div className="w-full  md:px-0 my-5 flex justify-center items-center">
            <div className="w-11/12 mx-auto p-5 bg-white border flex flex-col md:flex-row justify-center items-center gap-5">
                {/* <div className=" w-full">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input w-full focus:bg-white bg-green-100 text-black"
                    />
                </div> */}

                <div className=" w-full">
                    <button
                        className="btn btn-block bg-primary text-white hover:bg-white hover:text-primary hover:border-primary"
                        onClick={() => setShowModal(true)}
                    >
                        <i className="fa-solid fa-plus"></i>
                        <span className="ml-1">Add Coupon</span>
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
                                                                CAMPAIGN NAME
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
                                                    <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                        <div className="md:w-1/5">
                                                            <h1 className="text-md font-semibold text-primary">
                                                                CODE
                                                            </h1>
                                                        </div>
                                                        <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                            <div className=" w-full">
                                                                <input
                                                                    ref={codeRef}
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
                                                                    ref={percentRef}
                                                                    type="Number"
                                                                    placeholder="Type here"
                                                                    className="input w-full focus:bg-white bg-green-100 text-black"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
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
                                                    </div> */}

                                                    <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                                                        <div className="md:w-1/5">
                                                            <h1 className="text-md font-semibold text-primary">
                                                                STARTING DATE
                                                            </h1>
                                                        </div>
                                                        <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                                                            <div className=" w-full">
                                                                <input
                                                                    ref={starting_dateRef}
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
                                                                    ref={ending_dateRef}
                                                                    type="date"
                                                                    className="input w-full focus:bg-white bg-green-100 text-gray-400"
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
                                                <span className="ml-1">Add Coupon</span>
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

export default CouponTopBar;
