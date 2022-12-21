import React, { useState } from "react";

const Image = () => {
    const [images, setImages] = useState({});
    console.log(images);

    return (
        <>
            <div className="w-full flex flex-col md:flex-row justify-between items-start my-3">
                <div className="md:w-1/5">
                    <h1 className="text-md font-semibold text-primary">Product Picture</h1>
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
                                onChange={(e) => {
                                    setImages(e.target.files)
                                }}
                                multiple
                                id="dropzone-file"
                                type="file"
                                class="hidden" />
                        </label>
                    </div>
                    <div className="mt-5">
                        {
                            Array.from(images).map(image => {
                                
                            }
                            )}
                        <img
                            class="w-40 h-40  rounded-full"
                            src="https://i.ibb.co/0mKh0Zb/profile-1-removebg-preview-3.png"
                            alt="description"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Image;
