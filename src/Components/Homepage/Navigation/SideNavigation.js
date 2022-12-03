import React from "react";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from "react-pro-sidebar";

const SideNavigation = () => {
    
    return (
        <div className="flex">
            <Sidebar defaultCollapsed>
                <Menu>
                    <SubMenu label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
            <div>
                
            </div>
        </div>
    );
};

export default SideNavigation;
