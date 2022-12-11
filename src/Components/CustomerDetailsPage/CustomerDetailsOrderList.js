import React from "react";
import { Link } from "react-router-dom";

const CustomerDetailsOrderList = () => {
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap ">12345967894652163</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap  text-center">12-12-2022</p>
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

            
            <td className="py-3 px-3 text-center">
                <Link to={"/customers/orders/abc"} className="btn btn-circle hover:bg-green-500 hover:text-white hover:border-green-500 text-green-500">
                    <i class="fa-solid fa-magnifying-glass-plus"></i>
                </Link>
            </td>
        </tr>
    );
};

export default CustomerDetailsOrderList;
