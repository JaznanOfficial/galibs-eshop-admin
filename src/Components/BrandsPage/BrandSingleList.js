import React, { useState } from 'react';

const BrandSingleList = () => {


    const [status, setStatus] = useState(false);


    const statusHandler = () => {

        setStatus(!status);
    };

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="p-3 text-center font-medium">
                <h1 className="break-words whitespace-wrap w-full md:w-full  text-center">
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
                    
                </div>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap w-full text-center">Lenovo</p>
            </td>
            
            <td className="p-3 text-center font-medium">
                <input
                    type="checkbox"
                    className="toggle checked:toggle-error"
                    onClick={statusHandler}
                />
            </td>

            <td className="py-3 px-3 text-center">
                {status ? (
                    <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs text-center">
                        Hidden
                    </span>
                ) : (
                    <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs text-center">
                        Published
                    </span>
                )}
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

export default BrandSingleList;