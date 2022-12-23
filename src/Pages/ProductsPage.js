import React, { useEffect } from "react";
import ProductsList from "../Components/ProductsPage/ProductsList";
import ProductsTopBar from "../Components/ProductsPage/ProductsTopBar";
import useFetch from "../Hooks/useFetch";

const ProductsPage = () => {
    const { getData, data } = useFetch()
    const fetchData = () => {
        
    }
    useEffect(() => {
        getData("https://g-shop-server.onrender.com/api/v1/products")
    }, [])
    console.log(data);
    return (
        <div className="py-10">
            <div>
                <h1 className="text-2xl  font-extrabold text-black">Products</h1>
            </div>
            <ProductsTopBar />
            <ProductsList />
        </div>
    );
};

export default ProductsPage;
