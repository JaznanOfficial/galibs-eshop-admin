import React from 'react';
import StaffsSingleList from './StaffsSingleList';

const StaffsList = () => {
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
                                        <th className="py-3 px-3 text-center">Name</th>
                                        <th className="py-3 px-3 text-center">Email</th>
                                        

                                        <th className="py-3 px-3 text-center">Phone</th>
                                        <th className="py-3 px-3 text-center">Role</th>
                                        <th className="py-3 px-3 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    <StaffsSingleList />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StaffsList;