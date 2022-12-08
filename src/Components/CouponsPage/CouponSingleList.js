import React from "react";

const CouponSingleList = () => {
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-16">12345967894652163</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap  text-center">2023 Eid Offer</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap  text-center">eid2023</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap text-center w-24 mx-auto">10%</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-24 mx-auto text-center">Asus ROG</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-24 mx-auto text-center">June 1, 2023</p>
            </td>
            <td className="p-3 text-center font-medium">
            <p className="break-words whitespace-wrap w-24 mx-auto text-center">June 5, 2023</p>
            </td>

            <td className="py-3 px-3 text-center">
                {/* <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs text-center">
                        Expired
                    </span> */}

                <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs text-center">
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

export default CouponSingleList;
