import React from 'react';
import StaffsList from '../Components/StaffsPage/StaffsList';
import StaffsTopBar from '../Components/StaffsPage/StaffsTopBar';

const StaffsPage = () => {
    return (
        <div className="py-10">
            <div>
                <h1 className="text-2xl  font-extrabold text-black">Our Staffs</h1>
            </div>
            <StaffsTopBar />
            <StaffsList />
        </div>
    );
};

export default StaffsPage;