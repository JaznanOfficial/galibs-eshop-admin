import React, { useState } from "react";
// import { useProSidebar } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";

const TopNavigation = () => {
    // const { collapseSidebar } = useProSidebar();
    // const [collapsed, setCollapsed] = useState(true);

    // const collapsedFunction = (e) => {
    //     e.preventDefault();
    //     setCollapsed(!collapsed);
    //     console.log(collapsed);
    // };

    const activeStyle = {
        backgroundColor: "#0E9F6E",
        color: "white",
    };

    return (
        <div>
            <div className="navbar border-b border-inherit md:px-16 ">
                <div className="navbar-start">
                    {/* small device */}
                    <div className="dropdown md:hidden">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
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
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border border-green-300"
                        >
                            <li>
                                <NavLink
                                    to={"/"}
                                    className="btn  rounded-none flex text-start  justify-start bg-white text-gray-500 border-none hover:bg-primary hover:text-white "
                                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                >
                                    <h1>
                                        <i class="fa-solid fa-table-cells-large"></i>
                                    </h1>
                                    <div className="w-2/3 mx-auto">
                                        <h1>Dashboard</h1>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/products"}
                                    className="btn  rounded-none flex text-start  justify-start bg-white text-gray-500 border-none hover:bg-primary hover:text-white "
                                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                >
                                    <h1>
                                        <i class="fa-solid fa-bag-shopping"></i>
                                    </h1>
                                    <div className="w-2/3 mx-auto">
                                        <h1>Products</h1>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/customers"}
                                    className="btn  rounded-none flex text-start  justify-start bg-white text-gray-500 border-none hover:bg-primary hover:text-white "
                                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                >
                                    <h1>
                                        <i class="fa-solid fa-users"></i>
                                    </h1>
                                    <div className="w-2/3 mx-auto">
                                        <h1>Customers</h1>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/orders"}
                                    className="btn  rounded-none flex text-start  justify-start bg-white text-gray-500 border-none hover:bg-primary hover:text-white "
                                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                >
                                    <h1>
                                        <i class="fa-solid fa-list"></i>
                                    </h1>
                                    <div className="w-2/3 mx-auto">
                                        <h1>Orders</h1>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/coupons"}
                                    className="btn  rounded-none flex text-start  justify-start bg-white text-gray-500 border-none hover:bg-primary hover:text-white "
                                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                >
                                    <h1>
                                        <i class="fa-solid fa-gift"></i>
                                    </h1>
                                    <div className="w-2/3 mx-auto">
                                        <h1>Coupons</h1>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/staffs"}
                                    className="btn  rounded-none flex text-start  justify-start bg-white text-gray-500 border-none hover:bg-primary hover:text-white "
                                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                >
                                    <h1>
                                        <i class="fa-solid fa-user"></i>
                                    </h1>
                                    <div className="w-2/3 mx-auto">
                                        <h1>Staffs</h1>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/settings"}
                                    className="btn  rounded-none flex text-start  justify-start bg-white text-gray-500 border-none hover:bg-primary hover:text-white "
                                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                >
                                    <h1>
                                        <i class="fa-solid fa-gear"></i>
                                    </h1>
                                    <div className="w-2/3 mx-auto">
                                        <h1>Settings</h1>
                                    </div>
                                </NavLink>
                            </li>
                            <div>
                                <button className="btn w-full flex text-start justify-start rounded-md">
                                    <h1>
                                        <i class="fa-solid fa-right-from-bracket"></i>
                                    </h1>
                                    <div className="w-2/3 mx-auto">
                                        <h1>Logout</h1>
                                    </div>
                                </button>
                            </div>
                        </ul>
                    </div>
                    {/* small device */}
                    {/* medium and above device */}
                    {
                        /* <div className="dropdown md:flex hidden">
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
                        </div> */
                    }
                    <h1 className="md:flex hidden text-xl text-primary font-extrabold">G-shop Admin</h1>
                    {/* medium and above device */}
                </div>
                
                <div className="navbar-center flex md:hidden">
                    <h1 className="text-xl text-primary font-extrabold">G-shop Admin</h1>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle text-center">
                        <label className="swap swap-rotate">
                            <input type="checkbox" />

                            <svg
                                className="swap-on text-yellow-400 fill-current w-8 h-8"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            <svg
                                className="swap-off fill-current w-8 h-8"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
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
