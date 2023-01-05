import React from "react";

const ProductDetailsRight = ({ location }) => {
    console.log(location);
    const { name,_id,status, price,monitor,brand, ram,ssd, hdd, processor, short_details} = location.state || {};
    return (
        <>
            <div class="text-gray-700 body-font overflow-hidden bg-white">
                <div class="container px-5 sm:px-2 mt-16">
                    <div class="lg:w-full flex ">
                        <div class="lg:w-full w-full mt-6 lg:mt-0">
                            <h2 class="text-base  text-gray-500 font-bold mb-8">
                                {name}
                            </h2>

                            <div class="flex sm:flex-row flex-col justify-start items-start gap-1 w-full mb-8">
                                <div class="bg-green-100 text-green-900 hover:text-gray-900 rounded px-2 py-2">
                                    Price: {price}
                                </div>

                                <div class="bg-green-100 text-green-900 hover:text-gray-900 rounded px-2 py-2">
                                    Status: $145
                                </div>

                                <div class="bg-green-100 text-green-900 hover:text-gray-900 rounded px-2 py-2">
                                    Product code: {_id}
                                </div>
                            </div>

                            <div>
                                <p> Key Features </p>
                                <p> SSD: {ssd} </p>
                                <p> HDD: {hdd} </p>
                                <p> Model: {brand} </p>
                                <p> Display: {monitor} </p>
                                <p> Storage: {ram} RAM </p>
                                <p> Processor: {processor} </p>
                                <p> Short Details: {short_details}</p>
                                {/* <p class="text-blue-600 underline">View more info</p> */}
                            </div>

                            {/* <div>
                                <h3 class="mt-10 mb-5 text-lg font-medium text-gray-900 dark:text-white">
                                    Payment Method
                                </h3>

                                <div class="grid gap-8 w-full md:grid-cols-2">
                                    <label class="cursor-pointer">
                                        <input type="radio" class="peer sr-only" name="pricing" />

                                        <div
                                            class="w-64 h-28 max-w-xl shadow rounded-md bg-gray-100 p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-green-600 peer-checked:ring-green-400
                                        peer-checked:bg-green-100
                                        peer-checked:ring-offset-2"
                                        >
                                            <div class="flex flex-col gap-1">
                                                <div class="flex items-center justify-between">
                                                    <p class="text-sm font-semibold uppercase text-black">
                                                        $12378
                                                    </p>
                                                    <div>
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p>Pay on credit card/Debit card/Dbbl</p>
                                            </div>
                                        </div>
                                    </label>

                                    <label class="cursor-pointer">
                                        <input type="radio" class="peer sr-only" name="pricing" />

                                        <div
                                            class="w-64 h-28 max-w-xl shadow bg-gray-100 rounded-md p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-green-600 peer-checked:ring-green-400 
                                        peer-checked:bg-green-100
                                        peer-checked:ring-offset-2"
                                        >
                                            <div class="flex flex-col gap-1">
                                                <div class="flex items-center justify-between">
                                                    <p class="text-sm font-semibold uppercase text-black">
                                                        $12378
                                                    </p>

                                                    <div>
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p>Cash on delivery</p>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div> */}

                            <div className="my-10 flex gap-5 justify-start items-center">
                                <div class="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
                                    <button
                                        data-action="decrement"
                                        class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                                    >
                                        <span class="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input
                                        type="text"
                                        class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 "
                                        name="custom-input-number"
                                        value="1"
                                    ></input>

                                    <button
                                        data-action="increment"
                                        class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                    >
                                        <span class="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>

                                <div class="inline-block align-bottom">
                                    <button class="bg-green-300 opacity-75 hover:opacity-100 text-green-900 hover:text-gray-900 rounded px-10 py-2 font-semibold">
                                        BUY NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsRight;
