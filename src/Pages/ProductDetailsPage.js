import React from "react";
import ProductDetailsLeft from "../Components/ProductDetailsPage/ProductDetailsLeft";
import ProductDetailsRight from "../Components/ProductDetailsPage/ProductDetailsRight";
import ProductDetailsSpecifications from "../Components/ProductDetailsPage/ProductDetailsSpecifications";

const ProductDetailsPage = () => {
    return (
        <>
            <div class=" flex-col bg-green-50 flex items-center">
                <div class=" min-h-screen bg-white shadow-xl sm:p-5 p-0 text-gray-800 relative md:text-left">
                    <div class="md:flex items-start mt-10">
                        <ProductDetailsLeft />

                        <ProductDetailsRight />
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

                <div className="flex gap-5 w-full px-10 mb-5">
                    <ProductDetailsSpecifications />
                    

                    <div class="w-4/12 h-96 bg-white shadow-xl sm:p-5 p-0 text-gray-800 relative md:text-left">
                    </div>
                </div>

                <div className="flex gap-5 w-full px-10 mb-10">
                    
                    <div class="w-full bg-white shadow-xl sm:p-5 p-0 text-gray-800 relative md:text-left">
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsPage;
