import React from "react";

const CustomerDetailsTop = ({ customer }) => {
    // //console.log(customer);
    const { img, profession, name, address } = customer || {};
    return (
        <div class="bg-white rounded-lg shadow-xl pb-8 w-11/12 mx-auto my-5">
            <div class="w-full h-[250px]">
                <img
                    src="https://i.pinimg.com/originals/54/54/52/54545221509ad97d8632e5108e5d8d13.jpg"
                    /* src="https://freedesignfile.com/upload/2017/05/Flowers-green-leaves-spring-background.jpg" */
                    class="w-full h-full rounded-tl-lg rounded-tr-lg"
                    alt="banner img"
                />
            </div>
            <div class="flex flex-col items-center -mt-20">
                <img
                    src={img}
                    class="w-40 h-40 border-4 border-white rounded-full"
                    alt="profile-img"
                />
                <div class="flex items-center space-x-2 mt-2">
                    <p class="text-2xl text-primary">{name}</p>
                    <span class="bg-blue-500 rounded-full p-1" title="Verified">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="text-gray-100 h-2.5 w-2.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="4"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                    </span>
                </div>
                <p class="text-gray-700">{profession}</p>
                <p class="text-sm text-gray-500">{address}</p>
            </div>
        </div>
    );
};

export default CustomerDetailsTop;
