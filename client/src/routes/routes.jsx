import React from "react";

import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

import LandingRoute from "./LandingRoute.jsx";
import ErrorPage from "../components/miscellaneous/ErrorPage.jsx";
import HomeRoute from "./HomeRoute.jsx";
import FarmerShowRoute from "./farmer/FarmerShowRoute.jsx";
import FarmerIndexRoute from "./farmer/FarmerIndexRoute.jsx";
import FarmerLoginRoute from "./farmer/FarmerLoginRoute.jsx";
import FarmerSignUpRoute from "./farmer/FarmerSignUpRoute.jsx";
import CustomerLoginRoute from "./customer/CustomerLoginRoute.jsx";
import CustomerSignUpRoute from "./customer/CustomerSignUpRoute.jsx";
import CustomerIndexRoute from "./customer/CustomerIndexRoute.jsx";
import CustomerShowRoute from "./customer/CustomerShowRoute.jsx";
import FarmerNewRoute from "./farmer/FarmerNewRoute.jsx";
import CustomerNewRoute from "./customer/CustomerNewRoute.jsx";
import FarmerEditRoute from "./farmer/FarmerEditRoute.jsx";
import CustomerEditRoute from "./customer/CustomerEditRoute.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingRoute />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/home",
        element: <HomeRoute />,
    },
    //FARMER ROUTES
    {
        path: "/farmers",
        element: <FarmerIndexRoute />,
    },
    {
        path: "/farmers/new",
        element: <FarmerNewRoute />,
    },
    {
        path: "/farmers/:id",
        element: <FarmerShowRoute />,
    },
    {
        path: "/farmers/:id/edit",
        element: <FarmerEditRoute />,
    },
    {
        path: "/farmers/login",
        element: <FarmerLoginRoute />,
    },

    {
        path: "/farmers/signup",
        element: <FarmerSignUpRoute />,
    },
    //CUSTOMER ROUTES
    {
        path: "/customers",
        element: <CustomerIndexRoute />,
    },
    {
        path: "/customers/new",
        element: <CustomerNewRoute />,
    },

    {
        path: "/customers/:id",
        element: <CustomerShowRoute />,
    },
    {
        path: "/customers/:id/edit",
        element: <CustomerEditRoute />,
    },
    {
        path: "/customers/login",
        element: <CustomerLoginRoute />,
    },
    {
        path: "/customers/signup",
        element: <CustomerSignUpRoute />,
    },
]);

export default RouterProvider;
