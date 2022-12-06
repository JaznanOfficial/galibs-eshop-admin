import React from "react";
import { useProSidebar } from "react-pro-sidebar";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";

const Navigation = () => {
    // const { collapseSidebar } = useProSidebar();
    return (
        <div>
        <TopNavigation />
        <SideNavigation />
        </div>
    );
};

export default Navigation;
