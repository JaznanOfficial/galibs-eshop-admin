import React from "react";

const ProductsSingleList = () => {
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="p-3 text-center font-medium">
                <h1 className="break-words whitespace-wrap w-16 md:w-20  text-center">
                    12345967894652163
                </h1>
            </td>
            <td className="py-3 px-3 text-center">
                <div className="flex justify-center items-center ">
                    <div className="mr-1">
                        <img
                            className="w-8 h-8 rounded-full"
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                            alt="product-img"
                        />
                    </div>
                    <p className="break-words whitespace-wrap w-20 text-center">
                        Lenovo Thinkpad t460s
                    </p>
                </div>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-16 text-center">Lenovo</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-16 text-center">৳ 25000</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-16 text-center">12</p>
            </td>
            <td className="p-3 text-center font-medium">
                <button className="btn btn-circle text-primary hover:bg-primary hover:text-white hover:border-primary">
                    <i className="fa-solid fa-file-lines"></i>
                </button>
            </td>
            <td className="p-3 text-center font-medium">
                <input type="checkbox" className="toggle checked:toggle-primary" />
            </td>

            <td className="py-3 px-3 text-center">
                <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs text-center">
                    Active
                </span>
            </td>
            <td className="py-3 px-3 text-center">
                <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-primary hover:scale-110">
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                        <i className="fa-solid fa-trash-can"></i>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default ProductsSingleList;
