import React from "react";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from "react-pro-sidebar";
import { NavLink, Route, Routes } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import DashboardPage from "../../Pages/DashboardPage";
import RoutesComponents from "../Routes/RoutesComponents";

const SideNavigation = () => {
    const {logOut} = useFirebase()
    const activeStyle = {
        backgroundColor: "#0E9F6E",
        color: "white",
    };
    return (
        <div className="md:flex hidden h-full relative">
            <div className="fixed left-0">
                <Sidebar collapsedWidth="50px" width="225px">
                    <Menu>
                        <MenuItem style={{ padding: "0px" }}>
                            <NavLink
                                to={"/"}
                                className="btn btn-wide mx-auto rounded-none flex text-start  justify-start bg-white text-gray-500 border-none border-white hover:bg-primary hover:text-white"
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                <h1>
                                    <i className="fa-solid fa-table-cells-large"></i>
                                </h1>
                                <div className="w-2/3 mx-auto">
                                    <h1>Dashboard</h1>
                                </div>
                            </NavLink>
                        </MenuItem>

                        <MenuItem style={{ padding: "0px" }}>
                            <NavLink
                                to={"/customers"}
                                className="btn btn-wide mx-auto rounded-none flex text-start  justify-start bg-white text-gray-500 border-none hover:bg-primary hover:text-white "
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                <h1>
                                    <i className="fa-solid fa-users"></i>
                                </h1>
                                <div className="w-2/3 mx-auto">
                                    <h1>Customers</h1>
                                </div>
                            </NavLink>
                        </MenuItem>

                        <MenuItem style={{ padding: "0px" }}>
                            <NavLink
                                to={"/orders"}
                                className="btn btn-wide mx-auto rounded-none flex text-start  justify-start bg-white text-gray-500 border-none hover:bg-primary hover:text-white "
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                <h1>
                                    <i className="fa-solid fa-list"></i>
                                </h1>
                                <div className="w-2/3 mx-auto">
                                    <h1>Orders</h1>
                                </div>
                            </NavLink>
                        </MenuItem>

                        <MenuItem style={{ padding: "0px" }}>
                            <NavLink
                                to={"/brands"}
                                className="btn btn-wide mx-auto rounded-none flex text-start  justify-start bg-white text-gray-500 border-none hover:bg-primary hover:text-white "
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                <h1>
                                    <i class="fa-solid fa-desktop"></i>
                                </h1>
                                <div className="w-2/3 mx-auto">
                                    <h1>Brands</h1>
                                </div>
                            </NavLink>
                        </MenuItem>

                        <MenuItem style={{ padding: "0px" }}>
                            <NavLink
                                to={"/products"}
                                className="btn btn-wide mx-auto rounded-none flex text-start  justify-start bg-white text-gray-500 border-none hover:bg-primary hover:text-white "
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                <h1>
                                    <i className="fa-solid fa-bag-shopping"></i>
                                </h1>
                                <div className="w-2/3 mx-auto">
                                    <h1>Products</h1>
                                </div>
                            </NavLink>
                        </MenuItem>

                        <MenuItem style={{ padding: "0px" }}>
                            <NavLink
                                to={"/coupons"}
                                className="btn btn-wide mx-auto rounded-none flex text-start  justify-start bg-white text-gray-500 border-none hover:bg-primary hover:text-white "
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                <h1>
                                    <i className="fa-solid fa-gift"></i>
                                </h1>
                                <div className="w-2/3 mx-auto">
                                    <h1>Coupons</h1>
                                </div>
                            </NavLink>
                        </MenuItem>

                        <MenuItem style={{ padding: "0px" }}>
                            <NavLink
                                to={"/staffs"}
                                className="btn btn-wide mx-auto rounded-none flex text-start  justify-start bg-white text-gray-500 border-none hover:bg-primary hover:text-white "
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                <h1>
                                    <i className="fa-solid fa-user"></i>
                                </h1>
                                <div className="w-2/3 mx-auto">
                                    <h1>Our Staffs</h1>
                                </div>
                            </NavLink>
                        </MenuItem>

                        <MenuItem style={{ padding: "0px" }}>
                            <NavLink
                                to={"/settings"}
                                className="btn btn-wide mx-auto rounded-none flex text-start  justify-start bg-white text-gray-500 border-none hover:bg-primary hover:text-white "
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                <h1>
                                    <i className="fa-solid fa-gear"></i>
                                </h1>
                                <div className="w-2/3 mx-auto">
                                    <h1>Edit Profile</h1>
                                </div>
                            </NavLink>
                        </MenuItem>

                        <MenuItem style={{ padding: "0px" }}>
                            <button
                                
                                className="btn btn-wide mx-auto rounded-none bg-rose-600 border-none hover:bg-rose-700 flex text-start justify-start"
                                onClick={logOut}
                            >
                                <h1>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </h1>
                                <div className="w-2/3 mx-auto">
                                    <h1>Logout</h1>
                                </div>
                            </button>
                        </MenuItem>
                    </Menu>
                    
                </Sidebar>
            </div>
            <div className=" bg-green-50 w-5/6 absolute right-0">
                <RoutesComponents />
            </div>
        </div>
    );
};

export default SideNavigation;
