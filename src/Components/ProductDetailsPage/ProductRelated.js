import React from "react";

const ProductRelated = () => {
    return (
        <>
            <div class="flex flex-col sm:w-4/12 w-full  h-96 bg-white shadow-xl p-5  text-black ">
                <h1 className="font-semibold">Related Product</h1>

                <div className="flex justify-center items-center border-t gap-4">
                    <div class="w-28 p-3 mb-5 mt-10 border-2 border-green-200">
                        <img
                            src="https://media.istockphoto.com/id/1186325137/video/mens-hands-are-typing-on-the-laptop-keyboard-close-up.jpg?s=640x640&k=20&c=C_7_hQp7j472bs7tSN1ghMDoOi2U8gQqz7VxnkQnHFY="
                            class="w-16 h-16 "
                            alt=""
                        />
                    </div>
                    <div className="w-full text-left text-sm">
                        <p>
                            ASUS VivoBook 15*515EA-EJ2454W 11TH Gen Core i3 4GB RAM 1TB HDD Slate
                            Grey Laptop
                        </p>
                        <span className="font-semibold">$123567</span>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-4">
                    <div class="w-28 p-3 mb-10 mt-5 border-2 border-green-200">
                        <img
                            src="https://media.istockphoto.com/id/1186325137/video/mens-hands-are-typing-on-the-laptop-keyboard-close-up.jpg?s=640x640&k=20&c=C_7_hQp7j472bs7tSN1ghMDoOi2U8gQqz7VxnkQnHFY="
                            class="w-16 h-16 "
                            alt=""
                        />
                    </div>
                    <div className="w-full text-left text-sm">
                        <p>
                            ASUS VivoBook 15*515EA-EJ2454W 11TH Gen Core i3 4GB RAM 1TB HDD Slate
                            Grey Laptop
                        </p>
                        <span className="font-semibold">$123567</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductRelated;
