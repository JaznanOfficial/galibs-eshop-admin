import React, { useEffect } from "react";
import { createContext } from "react";
import ProductsList from "../Components/ProductsPage/ProductsList";
import ProductsTopBar from "../Components/ProductsPage/ProductsTopBar";
import useFetch from "../Hooks/useFetch";

const ProductsContext = createContext();
const ProductsPage = () => {
    const { getData, data, loading } = useFetch();

    useEffect(() => {
        getData("https://g-shop-server.onrender.com/api/v1/products");
    }, [data]);
    // //console.log(data);
    return (
        <ProductsContext.Provider value={{ data, loading }}>
            <div className="py-10">
                <div>
                    <h1 className="text-2xl  font-extrabold text-black">Products</h1>
                </div>
                <ProductsTopBar />
                <ProductsList />
            </div>
        </ProductsContext.Provider>
    );
};

export default ProductsPage;
export { ProductsContext };
