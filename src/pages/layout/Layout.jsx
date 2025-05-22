import React, { memo } from 'react';
import { Outlet } from "react-router-dom";
import Header from "@/components/header/Header.jsx";
import Sidebar from "@/components/sidebar/Sidebar.jsx"; // добавим сайдбар

const Layout = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="flex flex-col flex-1 overflow-auto bg-gray-100">
                <Header />
                <main className="p-4 flex-1">
                    <Outlet />
                </main>
                {/* Можно добавить Footer, если нужно */}
            </div>
        </div>
    );
};

export default memo(Layout);
