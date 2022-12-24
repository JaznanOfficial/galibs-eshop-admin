import React from "react";
import ProductDetailsLeft from "../Components/ProductDetailsPage/ProductDetailsLeft";
import ProductDetailsRight from "../Components/ProductDetailsPage/ProductDetailsRight";

const ProductDetailsPage = () => {
    return (
        <>
            <div class="bg-green-300 flex items-center p-5">
                <div class="min-w-screen min-h-screen rounded-3xl bg-white shadow-xl sm:p-5 p-0 text-gray-800 relative md:text-left">
                    <div class="md:flex items-start mt-10">
                        <ProductDetailsLeft />

                        <ProductDetailsRight />
                    </div>
                </div>
            </div>

            {/* <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
            <a
                title="Buy me a beer"
                href="https://www.buymeacoffee.com/scottwindon"
                target="_blank"
                class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            >
                <img
                    class="object-cover object-center w-full h-full rounded-full"
                    src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
                />
            </a>
        </div>
    </div> */}
        </>
    );
};

export default ProductDetailsPage;
