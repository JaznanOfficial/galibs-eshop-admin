import React from "react";

const CustomerDetailsTop = () => {
    return (
        <div class="bg-white rounded-lg shadow-xl pb-8 w-11/12 mx-auto my-5">
            <div class="w-full h-[250px]">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKeFAXZs4gY-lgX6qzNJN3aJyQvkffdGALJKLoaAXYvxRvdYdNplnrBPn9U2FAJQ3GHk&usqp=CAU"
                    class="w-full h-full rounded-tl-lg rounded-tr-lg"
                    alt="banner img"
                />
            </div>
            <div class="flex flex-col items-center -mt-20">
                <img
                    src="https://i.ibb.co/0mKh0Zb/profile-1-removebg-preview-3.png"
                    class="w-40 h-40 border-4 border-white rounded-full"
                    alt="profile-img"
                />
                <div class="flex items-center space-x-2 mt-2">
                    <p class="text-2xl text-primary">Amanda Ross</p>
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
                <p class="text-gray-700">Senior Software Engineer at Tailwind CSS</p>
                <p class="text-sm text-gray-500">New York, USA</p>
            </div>
            <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                <div class="flex items-center space-x-4 mt-2">
                    <button class="btn bg-primary text-white hover:bg-white hover:text-primary hover:border-primary px-4 py-2 rounded text-sm space-x-2 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                        </svg>
                        Connect
                    </button>
                    <button class="btn bg-primary text-white hover:bg-white hover:text-primary hover:border-primary px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span>Message</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetailsTop;
