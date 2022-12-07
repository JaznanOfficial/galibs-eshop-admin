import React from "react";
import ProductsList from "../Components/ProductsPage/ProductsList";
import ProductsTopBar from "../Components/ProductsPage/ProductsTopBar";

const ProductsPage = () => {
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
