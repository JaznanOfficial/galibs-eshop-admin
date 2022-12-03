import React, { useState } from "react";
import { useProSidebar } from "react-pro-sidebar";

const TopNavigation = () => {
    const { collapseSidebar } = useProSidebar();
    const [collapsed, setCollapsed] = useState(true);
    // const {value} = collapseSidebar
    // console.log({collapseSidebar}, value);

    const collapsedFunction = (e) => {
        e.preventDefault();
        setCollapsed(!collapsed);
        console.log(collapsed);
    };

    return (
        <div>
            <div className="navbar border-b border-inherit md:pr-20 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                            onClick={(e) => {
                                collapseSidebar();
                                collapsedFunction(e);
                            }}
                        >
                            {collapsed ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7"
                                    />
                                </svg>
                            ) : (
                                <button className="btn btn-circle btn-outline text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            )}
                        </label>
                    </div>
                </div>
                <div className="navbar-center">
                    <h1 className="text-xl text-primary font-extrabold">G-shop Admin</h1>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <i class="fa-solid fa-moon text-xl text-primary md:text-2xl"></i>
                    </button>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                            <i class="fa-sharp fa-solid fa-bell  text-primary text-xl md:text-2xl"></i>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div
                            tabIndex={0}
                            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                        >
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavigation;
