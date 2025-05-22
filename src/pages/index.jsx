import React, {lazy, memo} from 'react';
import {useRoutes} from "react-router-dom";
import { Suspense } from 'react';
import Layout from "@/pages/layout/Layout.jsx";

const Home = lazy(() => import("./home/Home.jsx"));
const Dashboard = lazy(() => import("./dashboard/Dashboard.jsx"));

const MainRouters = () => {
    return useRoutes([
        {
            path: "/",
            element: <Suspense><Layout/></Suspense>,
            children: [
                {
                    path: "/",
                    element: <Suspense><Home/></Suspense>
                },
                {
                    path: "/dashboard",
                    element: <Suspense><Dashboard /></Suspense>
                }
            ]
        }
    ]);
};

export default memo(MainRouters);
