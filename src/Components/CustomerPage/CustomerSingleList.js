import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const CustomerSingleList = ({ customer }) => {
    const { _id, name, img, email, role, status: userStatus, createdAt, phone } = customer || {};
    console.log(userStatus);
    const { deleteData } = useFetch();
    const [status, setStatus] = useState(false);

    const statusHandler = () => {
        setStatus(!status);
    };
    // console.log(status);

    const deleteHandler = (id) => {
        console.log(id);
        deleteData(`https://g-shop-server.onrender.com/api/v1/users?_id=${id}`);
    };

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-16">{_id}</p>
            </td>
            <td className="py-3 px-3 text-center">
                <div className="flex items-center justify-center">
                    <div className="">
                        <img className="w-6 h-6 rounded-full" src={img} alt="user-img" />
                    </div>
                    <p className="break-words whitespace-wrap w-20">{name}</p>
                </div>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap  text-center">
                    {" "}
                    {createdAt.slice(0, 10)}{" "}
                </p>
                <p className="break-words whitespace-wrap  text-center">
                    {" "}
                    {createdAt.slice(12, 19)}{" "}
                </p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap text-center w-24 mx-auto">{email}</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-24 mx-auto text-center">{phone}</p>
            </td>
            <td className="p-3 text-center font-medium">
                <Link
                    to={"customers-details"}
                    state={customer}
                    className="btn btn-circle text-primary hover:bg-primary hover:text-white hover:border-primary"
                >
                    <i className="fa-solid fa-file-lines"></i>
                </Link>
            </td>
            <td className="p-3 text-center font-medium">
                <input
                    type="checkbox"
                    className="toggle checked:toggle-error"
                    onClick={statusHandler}
                />
            </td>

            <td className="p-3  text-center">
                {status ? (
                    <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs text-center">
                        Blocked
                    </span>
                ) : (
                    <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs text-center">
                        Active
                    </span>
                )}
            </td>
            <td className="py-3 px-3 text-center">
                <button
                    className="btn btn-circle hover:bg-red-500 hover:text-white hover:border-red-500 text-red-500"
                    onClick={() => deleteHandler(_id)}
                >
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </td>
        </tr>
    );
};

export default CustomerSingleList;
