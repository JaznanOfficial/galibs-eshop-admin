import React from "react";
import { useLocation } from "react-router-dom";
import ProductDescription from "../Components/ProductDetailsPage/ProductDescription";
import ProductDetailsLeft from "../Components/ProductDetailsPage/ProductDetailsLeft";
import ProductDetailsRight from "../Components/ProductDetailsPage/ProductDetailsRight";
import ProductDetailsSpecifications from "../Components/ProductDetailsPage/ProductDetailsSpecifications";
import ProductRelated from "../Components/ProductDetailsPage/ProductRelated";

const ProductDetailsPage = ({ product }) => {
    const location = useLocation();
    // //console.log(location.state);
    return (
        <>
            <div class=" flex-col bg-green-50 flex items-center">
                <div class="w-full min-h-screen bg-white shadow-xl sm:p-5 p-0 text-gray-800 relative md:text-left">
                    <div class="md:flex items-start mt-10">
                        <ProductDetailsLeft location={location} />

                        <ProductDetailsRight location={location} />
                    </div>
                </div>

                <div class="flex flex-row  justify-start items-start gap-1 w-full my-10 mb-5 sm:px-10 px-4">
                    <div class="bg-green-100 text-green-900 hover:text-gray-900 rounded px-2 py-2">
                        Specifications
                    </div>

                    <div class="bg-green-100 text-green-900 hover:text-gray-900 rounded px-2 py-2">
                        Descriptions
                    </div>
                </div>

                <div className="flex sm:flex-row flex-col gap-5 w-full px-10 mb-5">
                    <ProductDetailsSpecifications location={location} />

                    <ProductRelated />
                </div>

                <div className=" w-full px-10 mb-5">
                    <ProductDescription location={location} />
                </div>
            </div>
        </>
    );
};

export default ProductDetailsPage;
