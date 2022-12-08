import React from 'react';
import BrandSingleList from './BrandSingleList';

const BrandList = () => {
    return (
        <>
            <div>
                <div className="  flex items-top justify-center  font-sans overflow-auto">
                    <div className="w-11/12 mx-auto">
                        <div className="w-auto overflow-auto bg-white shadow-md rounded">
                            <table className="w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-3 text-center">Id</th>
                                        <th className="py-3 px-3 text-center">Image</th>
                                        <th className="py-3 px-3 text-center">Brand Name</th>
                                        

                                        <th className="py-3 px-3 text-center">Hide</th>
                                        <th className="py-3 px-3 text-center">Status</th>
                                        <th className="py-3 px-3 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    <BrandSingleList />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandList;