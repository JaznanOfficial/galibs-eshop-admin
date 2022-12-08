import React from 'react';
import BrandList from '../Components/BrandsPage/BrandList';
import BrandTopBar from '../Components/BrandsPage/BrandTopBar';

const BrandsPage = () => {
    return (
        <div className="py-10">
            <div>
                <h1 className="text-2xl  font-extrabold text-black">Brands</h1>
            </div>
            <BrandTopBar />
            <BrandList />
        </div>
    );
};

export default BrandsPage;