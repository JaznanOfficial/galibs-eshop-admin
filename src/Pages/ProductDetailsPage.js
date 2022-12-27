import React from "react";
import ProductDescription from "../Components/ProductDetailsPage/ProductDescription";
import ProductDetailsLeft from "../Components/ProductDetailsPage/ProductDetailsLeft";
import ProductDetailsRight from "../Components/ProductDetailsPage/ProductDetailsRight";
import ProductDetailsSpecifications from "../Components/ProductDetailsPage/ProductDetailsSpecifications";
import ProductRelated from "../Components/ProductDetailsPage/ProductRelated";

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

                <div className="flex sm:flex-row flex-col gap-5 sm:w-full px-10 mb-5">
                    <ProductDetailsSpecifications />

                    <ProductRelated />
                </div>

                <div className=" w-full px-10 mb-5">
                    <ProductDescription />
                </div>
            </div>
        </>
    );
};

export default ProductDetailsPage;
