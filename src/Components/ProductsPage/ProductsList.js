import React from "react";
import ProductsSingleList from "./ProductsSingleList";

const ProductsList = () => {
    return (
        <>
            <div className="">
                <div className="  flex items-top justify-center  font-sans overflow-auto">
                    <div className="w-11/12 mx-auto">
                        <div className="w-auto overflow-auto bg-white shadow-md rounded">
                            <table className="w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-3 text-center">Id</th>
                                        <th className="py-3 px-3 text-center">Name</th>
                                        <th className="py-3 px-3 text-center">Category</th>
                                        <th className="py-3 px-3 text-center">Price</th>
                                        <th className="py-3 px-3 text-center">Stock</th>
                                        <th className="py-3 px-3 text-center">Details</th>
                                        {/* <th className="py-3 px-3 text-center">Discount</th> */}
                                        <th className="py-3 px-3 text-center">Hide</th>
                                        <th className="py-3 px-3 text-center">Status</th>
                                        <th className="py-3 px-3 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    <ProductsSingleList />
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
