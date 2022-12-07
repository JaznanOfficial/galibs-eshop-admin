import React from "react";

const CustomerSingleList = () => {
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-16">12345967894652163</p>
            </td>
            <td className="py-3 px-3 text-center">
                <div className="flex items-center justify-center">
                    <div className="">
                        <img
                            className="w-6 h-6 rounded-full"
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                            alt="user-img"
                        />
                    </div>
                    <p className="break-words whitespace-wrap w-20">Abdur Rahman</p>
                </div>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap  text-center">12-12-2022</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap text-center w-24 mx-auto">
                    jaznanofficial@gmail.com
                </p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-24 mx-auto text-center">01643282147</p>
            </td>
            <td className="p-3 text-center font-medium">
                <button className="btn btn-circle text-primary hover:bg-primary hover:text-white hover:border-primary">
                    <i className="fa-solid fa-file-lines"></i>
                </button>
            </td>
            <td className="p-3 text-center font-medium">
                <input type="checkbox" className="toggle checked:toggle-error" />
            </td>

            <td className="p-3  text-center">
                <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                    Active
                </span>
            </td>
            <td className="py-3 px-3 text-center">
                <button className="btn btn-circle hover:bg-red-500 hover:text-white hover:border-red-500 text-red-500">
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </td>
        </tr>
    );
};

export default CustomerSingleList;
