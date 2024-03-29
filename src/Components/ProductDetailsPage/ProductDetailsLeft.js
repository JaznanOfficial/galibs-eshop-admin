import React from "react";

const ProductDetailsLeft = ({ location }) => {
    // //console.log(location);
    const { img } = location.state;
    return (
        <div className="mr-10 sm:ml-10 ml-0">
            <div class="w-full px-5 mb-10 md:mb-0 border-2 border-green-200 flex justify-center items-center sm:mx-2 mx-5  ">
                {/* <img
                    src="https://media.istockphoto.com/id/1186325137/video/mens-hands-are-typing-on-the-laptop-keyboard-close-up.jpg?s=640x640&k=20&c=C_7_hQp7j472bs7tSN1ghMDoOi2U8gQqz7VxnkQnHFY="
                    class="h-80 my-32"
                    alt=""
                /> */}

                <img src={img} class="w-full h-80 my-32" alt="" />
            </div>

            <div className="flex flex-row gap-2 justify-center items-center sm:mr-16 ml-10 sm:ml-20  mt-5">
                <div class="w-28 p-5 mb-10 md:mb-0 border-2 border-green-200 flex justify-center items-center ">
                    <img
                        src="https://media.istockphoto.com/id/1186325137/video/mens-hands-are-typing-on-the-laptop-keyboard-close-up.jpg?s=640x640&k=20&c=C_7_hQp7j472bs7tSN1ghMDoOi2U8gQqz7VxnkQnHFY="
                        class="w-20 h-20 "
                        alt=""
                    />
                </div>

                <div class="w-28 p-5 mb-10 md:mb-0 border-2 border-green-200 flex justify-center items-center ">
                    <img
                        src="https://media.istockphoto.com/id/1186325137/video/mens-hands-are-typing-on-the-laptop-keyboard-close-up.jpg?s=640x640&k=20&c=C_7_hQp7j472bs7tSN1ghMDoOi2U8gQqz7VxnkQnHFY="
                        class="w-20 h-20 "
                        alt=""
                    />
                </div>

                <div class="w-28 p-5 mb-10 md:mb-0 border-2 border-green-200 flex justify-center items-center ">
                    <img
                        src="https://media.istockphoto.com/id/1186325137/video/mens-hands-are-typing-on-the-laptop-keyboard-close-up.jpg?s=640x640&k=20&c=C_7_hQp7j472bs7tSN1ghMDoOi2U8gQqz7VxnkQnHFY="
                        class="w-20 h-20 "
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsLeft;
