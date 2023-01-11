import React, { useEffect } from 'react';
import StaffsList from '../Components/StaffsPage/StaffsList';
import StaffsTopBar from '../Components/StaffsPage/StaffsTopBar';
import useFetch from '../Hooks/useFetch';

const StaffsPage = () => {
    const { getData, data, loading } = useFetch();

    useEffect(() => {
        getData("https://g-shop-server.onrender.com/api/v1/brands");
    }, []);
    console.log(data); 
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