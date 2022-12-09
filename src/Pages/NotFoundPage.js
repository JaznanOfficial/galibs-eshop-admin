import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div class="relative">
                    <div>
                        <img src="https://i.ibb.co/rZRbb9F/not-found.png" alt="not found img" />
                    </div>
                    <div>
                        <div class="">
                            <h1 class="my-2 text-red-500 font-bold text-2xl">
                                Looks like you've found the doorway to the great nothing
                            </h1>
                            <p class="my-2 text-gray-800">
                                Sorry about that! Please visit our hompage to get where you need to
                                go.
                            </p>
                            <Link to="/">
                                <button class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-primary text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-opacity-50">
                                    Take me there!
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg" />
            </div>
        </div>
    );
};

export default NotFoundPage;
