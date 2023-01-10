import React, { createContext, useEffect } from 'react';
import BrandList from '../Components/BrandsPage/BrandList';
import BrandTopBar from '../Components/BrandsPage/BrandTopBar';
import useFetch from '../Hooks/useFetch';





const BrandsContext = createContext();

const BrandsPage = () => {
    const { getData, data, loading } = useFetch();

    useEffect(() => {
        getData("https://g-shop-server.onrender.com/api/v1/brands");
    }, []);
    console.log(data);
    return (
        <BrandsContext.Provider value={{data,loading}}>
        <div className="py-10">
        <div>
        <h1 className="text-2xl  font-extrabold text-black">Brands</h1>
        </div>
        <BrandTopBar />
        <BrandList />
        </div>
        </BrandsContext.Provider>
    );
};

export default BrandsPage;
export {BrandsContext}