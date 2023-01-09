import React from "react";

const ProductDescription = ({ location }) => {
    const { name, details_description } = location.state || {}
    
    return (
        <>
            <div class="w-full bg-white shadow-xl sm:p-5 p-2 text-gray-800 relative md:text-left">
                <h1 className="font-semibold mb-3">Descriptions</h1>
                <h2 className="font-medium  mb-3">
                    {name}
                </h2>
                <p className="text-sm">{details_description}</p>
            </div>
        </>
    );
};

export default ProductDescription;
