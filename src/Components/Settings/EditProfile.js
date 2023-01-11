import React, { useEffect, useState, useRef } from "react";
import useFetch from "../../Hooks/useFetch";
import useFirebase from "../../Hooks/useFirebase";
import { Watch } from "react-loader-spinner";
import { toast } from "react-toastify";

const EditProfile = () => {
    const { getData, data, postData, patchData } = useFetch();

    const [loading, setLoading] = useState(false);

    const { user } = useFirebase() || {};
    // //console.log(user.email);

    const [imageUpload, setImageUpload] = useState("") || {};

    useEffect(() => {
        getData(`https://g-shop-server.onrender.com/api/v1/users?email=${user?.email}`);
    }, [user, data]);
    // if (user) {
    //             getData(`https://g-shop-server.onrender.com/api/v1/users?email=${user?.email}`);

    // }
    // //console.log(data);
    const { name, email, phone, role } = data[0] || {};

    const handleImage = async (e) => {
        setLoading(true);
        const image = e.target.files[0];
        const formData = new FormData();
        formData.set("key", "1cbd6d1d311a1b351898b64918af6ef1");
        formData.append("image", image);

        const imgUpload = await postData("https://api.imgbb.com/1/upload", formData);
        if (imgUpload.status === 200) {
            setLoading(false);
            setImageUpload(imgUpload.data.data.url);
            // //console.log(imageUpload);
        }
    };

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const handleSubmit = async () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const img = imageUpload;
        const userData = { name, img, email, phone };
        // //console.log(userData);
        const userUpload = await patchData(
            `https://g-shop-server.onrender.com/api/v1/users?email=${user?.email}`,
            userData
        );
        // //console.log(userUpload);
        if (userUpload.data.status === "Successful") {
            // setSuccess(true);

            // setDataLoading(false);

            toast.success(
                "Your data successfully added. If you can't see any update, please refresh the page. we're working on real-time data fetching. that's coming soon. inshallah!"
            );
        }
    };

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
                                            <span class="font-semibold">Click to upload</span>
                                        </p>
                                    </div>
                                    <input
                                        onChange={handleImage}
                                        id="dropzone-file"
                                        type="file"
                                        class="hidden"
                                    />
                                </label>
                            </div>
                            <div className="my-5 flex items-center justify-center gap-5">
                                {loading ? (
                                    <div className="flex justify-center items-center w-full mx-auto py-10">
                                        <Watch
                                            height="80"
                                            width="80"
                                            color="#4fa94d"
                                            ariaLabel="bars-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                            style={{
                                                margin: "0 auto",
                                            }}
                                        />
                                    </div>
                                ) : (
                                    imageUpload && (
                                        <span>
                                            <img
                                                class="sm:w-40 w-10 sm:h-40 h-10  sm:rounded-lg rounded-3xl"
                                                src={imageUpload}
                                                alt="description"
                                            />
                                        </span>
                                    )
                                )}
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
                                    defaultValue={name}
                                    ref={nameRef}
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
                                    defaultValue={email}
                                    ref={emailRef}
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
                                    type="number"
                                    placeholder="Type here"
                                    className="input w-full focus:bg-white bg-green-100 text-black"
                                    defaultValue={phone}
                                    ref={phoneRef}
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
                                    className="input w-full  bg-green-100"
                                    defaultValue={role}
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" w-full flex justify-end items-center">
                        <button
                            className="btn w-full md:w-1/5 bg-primary text-white hover:bg-white hover:text-primary hover:border-primary"
                            onClick={handleSubmit}
                        >
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
