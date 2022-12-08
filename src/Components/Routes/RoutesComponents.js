import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../../Pages/DashboardPage";
import ProductsPage from '../../Pages/ProductsPage';
import CustomersPage from '../../Pages/CustomersPage';
import OrdersPage from '../../Pages/OrdersPage';
import CouponsPage from '../../Pages/CouponsPage';
import StaffsPage from '../../Pages/StaffsPage';
import SettingsPage from '../../Pages/SettingsPage';
import BrandsPage from "../../Pages/BrandsPage";

const RoutesComponents = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route path="/customers" element={<CustomersPage />}></Route>
            <Route path="/brands" element={<BrandsPage />}></Route>
            <Route path="/orders" element={<OrdersPage />}></Route>
            <Route path="/coupons" element={<CouponsPage />}></Route>
            <Route path="/staffs" element={<StaffsPage />}></Route>
            <Route path="/settings" element={<SettingsPage />}></Route>
        </Routes>
    );
};

export default RoutesComponents;
