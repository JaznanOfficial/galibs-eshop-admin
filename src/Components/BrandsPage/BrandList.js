import React, { useContext } from "react";
import { Watch } from "react-loader-spinner";
import { BrandsContext } from "../../Pages/BrandsPage";
import BrandSingleList from "./BrandSingleList";

const BrandList = () => {
    const { data, loading } = useContext(BrandsContext);

    return (
        <>
            <div>
                <div className="  flex items-top justify-center  font-sans overflow-auto">
                    <div className="w-11/12 mx-auto">
                        <div className="w-auto overflow-auto bg-white shadow-md rounded">
                            {loading ? (
                                <div className="flex justify-center items-center w-full mx-auto py-10">
                                    <Watch
                                        height="80"
                                        width="80"
                                        color="#4fa94d"
                                        ariaLabel="bars-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                        style={{ margin: "0 auto" }}
                                    />
                                </div>
                            ) : (
                                <table className="w-full table-auto">
                                    <thead>
                                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                            <th className="py-3 px-3 text-center">Id</th>
                                            <th className="py-3 px-3 text-center">Image</th>
                                            <th className="py-3 px-3 text-center">Brand Name</th>

                                            <th className="py-3 px-3 text-center">Hide</th>
                                            <th className="py-3 px-3 text-center">Status</th>
                                            <th className="py-3 px-3 text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        className={
                                            loading
                                                ? "text-gray-600 text-sm font-light flex justify-center"
                                                : "text-gray-600 text-sm font-light"
                                        }
                                    >
                                        {data.map((brand) => {
                                            return (
                                                <BrandSingleList
                                                    brand={brand}
                                                    key={brand?._id}
                                                />
                                            );
                                        })}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandList;
