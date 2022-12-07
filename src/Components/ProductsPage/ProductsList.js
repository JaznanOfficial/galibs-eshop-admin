import React from "react";

const ProductsList = () => {
    return (
        <>
            <div class="">
                <div class="  flex items-top justify-center  font-sans overflow-auto">
                    <div class="w-11/12 mx-auto">
                        <div class="w-auto overflow-auto bg-white shadow-md rounded">
                            <table class="w-full table-auto">
                                <thead>
                                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th class="py-3 px-3 text-center">Id</th>
                                        <th class="py-3 px-3 text-center">Name</th>
                                        <th class="py-3 px-3 text-centerer">Category</th>
                                        <th class="py-3 px-3 text-centerer">Price</th>
                                        <th class="py-3 px-3 text-centerer">Stock</th>
                                        <th class="py-3 px-3 text-center">Details</th>
                                        {/* <th class="py-3 px-3 text-center">Discount</th> */}
                                        <th class="py-3 px-3 text-centerer">Published</th>
                                        <th class="py-3 px-3 text-centerer">Status</th>
                                        <th class="py-3 px-3 text-centerer">Actions</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-600 text-sm font-light">
                                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                                        <td class="p-3 text-center font-medium">
                                            <h1 className="break-words whitespace-wrap w-16 md:w-20  text-center">
                                                12345967894652163
                                            </h1>
                                        </td>
                                        <td class="py-3 px-3 text-center">
                                            <div class="flex justify-center items-center ">
                                                <div class="mr-1">
                                                    <img
                                                        class="w-8 h-8 rounded-full"
                                                        src="https://randomuser.me/api/portraits/men/1.jpg"
                                                    />
                                                </div>
                                                <p className="break-words whitespace-wrap w-20 text-center">
                                                    Lenovo Thinkpad t460s
                                                </p>
                                            </div>
                                        </td>
                                        <td class="p-3 text-center font-medium">
                                            <p className="break-words whitespace-wrap w-16 text-center">
                                                Lenovo
                                            </p>
                                        </td>
                                        <td class="p-3 text-center font-medium">
                                            <p className="break-words whitespace-wrap w-16 text-center">
                                                ৳ 25000
                                            </p>
                                        </td>
                                        <td class="p-3 text-center font-medium">
                                            <p className="break-words whitespace-wrap w-16 text-center">
                                                12
                                            </p>
                                        </td>
                                        <td class="p-3 text-center font-medium">
                                            <button className="btn btn-circle text-primary hover:bg-primary hover:text-white hover:border-primary">
                                                <i class="fa-solid fa-file-lines"></i>
                                            </button>
                                        </td>
                                        <td class="p-3 text-center font-medium">
                                            <input
                                                type="checkbox"
                                                className="toggle checked:toggle-primary"
                                            />
                                        </td>

                                        <td class="py-3 px-3 text-center">
                                            <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs text-center">
                                                Active
                                            </span>
                                        </td>
                                        <td class="py-3 px-3 text-center">
                                            <div class="flex item-center justify-center">
                                                <div class="w-4 mr-2 transform hover:text-primary hover:scale-110">
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                </div>
                                                <div class="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                                    <i class="fa-solid fa-trash-can"></i>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsList;
