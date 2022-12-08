import React from "react";

const StaffsSingleList = () => {
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="p-3 text-center font-medium">
                <h1 className="break-words whitespace-wrap w-full md:w-full  text-center">
                    12345967894652163
                </h1>
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
                <p className="break-words whitespace-wrap w-full text-center">jaznanofficial@gmail.com</p>
            </td>

            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-full text-center">+8801643282147</p>
            </td>

            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-full text-center">Admin</p>
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

export default StaffsSingleList;
