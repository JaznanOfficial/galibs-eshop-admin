import React from "react";

const ProductDetailsSpecifications = ({ location }) => {
    const { name, _id, price, monitor, brand, ram, ssd, hdd, processor, createdAt, quantity } =
        location.state || {};
    return (
        <>
            <div class="sm:w-8/12 w-full bg-white shadow-xl p-5 text-gray-800 relative md:text-left">
                <div class="overflow-x-auto relative">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <th class="py-3 px-6 bg-white mb-3">Specifications</th>
                            <tr>
                                <th scope="col" class="py-3 px-6 text-green-600">
                                    Main Features
                                </th>
                                <th scope="col" class="py-3 px-6"></th>
                                <th scope="col" class="py-3 px-6"></th>
                                <th scope="col" class="py-3 px-6"></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>Name</td>
                                <td class="py-4 px-6">{name}</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>Brand</td>
                                <td class="py-4 px-6">{brand}</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>Price</td>
                                <td class="py-4 px-6">{price}</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>Monitor</td>
                                <td class="py-4 px-6">{monitor}</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>Processor</td>
                                <td class="py-4 px-6">{processor}</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>Quantity</td>
                                <td class="py-4 px-6">{quantity}</td>
                            </tr>
                        </tbody>
                    </table>
                    

                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6 text-green-600">
                                    Physical spec
                                </th>
                                <th scope="col" class="py-3 px-6"></th>
                                <th scope="col" class="py-3 px-6"></th>
                                <th scope="col" class="py-3 px-6"></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>Product code</td>
                                <td class="py-4 px-6">{_id}</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>RAM</td>
                                <td class="py-4 px-6">{ram}</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>HDD</td>
                                <td class="py-4 px-6">{ hdd}</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>SSD</td>
                                <td class="py-4 px-6">{ ssd}</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>CreatedAt</td>
                                <td class="py-4 px-6">{ createdAt}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* <ProductDetailsTable title="Battery" /> */}

                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6 text-green-600">
                                    Warranty
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    {" "}
                                    1 years
                                </th>
                                <th scope="col" class="py-3 px-6"></th>
                                <th scope="col" class="py-3 px-6"></th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsSpecifications;
