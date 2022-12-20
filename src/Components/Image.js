import React, { useState } from "react";
import MultiImageInput from "react-multiple-image-input";

const Image = () => {
    const [images, setImages] = useState({});
    console.log(images);

    return (
        <>
            <div className="w-full flex flex-col md:flex-row justify-between items-start mt-10 mb-32">
                <div className="md:w-1/5">
                    <h1 className="text-md font-semibold text-primary">Product Picture</h1>
                </div>

                <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
                    <div class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <MultiImageInput
                            style={{ width: "300px", height: "300px" }}
                            theme="light"
                            max={4}
                            images={images}
                            setImages={setImages}
                            cropConfig={{ ruleOfThirds: true }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Image;
