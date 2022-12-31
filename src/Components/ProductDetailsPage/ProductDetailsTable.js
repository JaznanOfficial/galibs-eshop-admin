import React from "react";

const ProductDetailsTable = ({title}) => {
    return (
        <>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6 text-green-600">
                            {title}
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
                </tbody>
            </table>
        </>
    );
};

export default ProductDetailsTable;
