import React from "react";

const OrderSingleList = () => {
    // {<span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs text-center">
    //     Blocked
    // </span>

    // <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs text-center">
    //     Active
    // </span>}

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-16">12345967894652163</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap  text-center">12-12-2022</p>
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
                <p className="break-words whitespace-wrap text-center w-24 mx-auto">01643282147</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-24 mx-auto text-center">৳ 40000</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-24 mx-auto text-center">cod</p>
            </td>
            <td className="p-3 text-center font-medium">
                <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs text-center">
                    Active
                </span>
            </td>

            <td className="p-3  text-center">
                <select className="select w-28 select-primary ">
                    <option selected>Pending</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
            </td>
            <td className="py-3 px-3 text-center">
                <button className="btn btn-circle hover:bg-green-500 hover:text-white hover:border-green-500 text-green-500">
                    <i class="fa-solid fa-magnifying-glass-plus"></i>
                </button>
            </td>
        </tr>
    );
};

export default OrderSingleList;
