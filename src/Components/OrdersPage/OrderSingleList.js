import React from "react";
import { Link } from "react-router-dom";

const OrderSingleList = ({order}) => {
    

    const { _id, name, img, email, payment_method, products, status, createdAt, phone } = order || {};
    const price = []
     products.map(product => {
        return price.push(product.price)
        
    })
    console.log(price);
     for (const total_price in price) {
        console.log(total_price);
     }

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-16">{_id}</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap  text-center">{createdAt.slice(0,10)}</p>
            </td>
            <td className="py-3 px-3 text-center">
                <div className="flex items-center justify-center">
                    <div className="">
                        <img
                            className="w-6 h-6 rounded-full"
                            src={img}
                            alt="order-img"
                        />
                    </div>
                    <p className="break-words whitespace-wrap w-20">{ name}</p>
                </div>
            </td>

            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap text-center w-24 mx-auto">{phone}</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-24 mx-auto text-center">৳ 40000</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-24 mx-auto text-center">{payment_method}</p>
            </td>
            <td className="p-3 text-center font-medium">
                <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs text-center">
                    {status}
                </span>
            </td>

            <td className="p-3  text-center">
                <select className="select w-28 select-primary ">
                    <option selected disabled>Status</option>
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Shipping</option>
                    <option>Delivered</option>
                    <option>Cancel</option>
                </select>
            </td>
            <td className="py-3 px-3 text-center">
                <Link to={'/orders/12648'} className="btn btn-circle hover:bg-green-500 hover:text-white hover:border-green-500 text-green-500">
                    <i class="fa-solid fa-magnifying-glass-plus"></i>
                </Link>
            </td>
        </tr>
    );
};

export default OrderSingleList;
