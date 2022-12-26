import React from "react";
import ProductDetailsTable from "./ProductDetailsTable";


const ProductDetailsSpecifications = () => {
    return (
        <>
            <div class="w-8/12 bg-white shadow-xl sm:p-5 p-0 text-gray-800 relative md:text-left">
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
                                <td>Display</td>
                                <td class="py-4 px-6">TFT</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>Display</td>
                                <td class="py-4 px-6">TFT</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>Display</td>
                                <td class="py-4 px-6">TFT</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>Display</td>
                                <td class="py-4 px-6">TFT</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>Display</td>
                                <td class="py-4 px-6">TFT</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>Display</td>
                                <td class="py-4 px-6">TFT</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>Display</td>
                                <td class="py-4 px-6">TFT</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>Display</td>
                                <td class="py-4 px-6">TFT</td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>Display</td>
                                <td class="py-4 px-6">TFT</td>
                            </tr>
                        </tbody>
                        </table>
                        
                    <ProductDetailsTable title="Physical spec" />
                    <ProductDetailsTable title="Camera" />
                    <ProductDetailsTable title="Camera" />
                    <ProductDetailsTable title="Battery"/>
                    <ProductDetailsTable title="Specific years" />
                    
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
                        
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6 text-green-600">
                                Warranty
                                </th>
                                <th scope="col" class="py-3 px-6"></th>
                                <th scope="col" class="py-3 px-6"></th>
                                <th scope="col" class="py-3 px-6"></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td>Display</td>
                                <td class="py-4 px-6">TFT</td>
                            </tr>
                        </tbody>
                        </table>
                        
                </div>
            </div>
        </>
    );
};

export default ProductDetailsSpecifications;
