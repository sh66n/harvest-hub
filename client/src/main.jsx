import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//router
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

//routes
import LandingRoute from "./routes/LandingRoute.jsx";
import ErrorPage from "./components/miscellaneous/ErrorPage.jsx";
import HomeRoute from "./routes/HomeRoute.jsx";
import FarmerShowRoute from "./routes/farmer/FarmerShowRoute.jsx";
import FarmerIndexRoute from "./routes/farmer/FarmerIndexRoute.jsx";
import FarmerLoginRoute from "./routes/farmer/FarmerLoginRoute.jsx";
import FarmerSignUpRoute from "./routes/farmer/FarmerSignUpRoute.jsx";
import CustomerLoginRoute from "./routes/customer/CustomerLoginRoute.jsx";
import CustomerSignUpRoute from "./routes/customer/CustomerSignUpRoute.jsx";
import CustomerIndexRoute from "./routes/customer/CustomerIndexRoute.jsx";
import CustomerShowRoute from "./routes/customer/CustomerShowRoute.jsx";
import FarmerNewRoute from "./routes/farmer/FarmerNewRoute.jsx";
import CustomerNewRoute from "./routes/customer/CustomerNewRoute.jsx";
import FarmerEditRoute from "./routes/farmer/FarmerEditRoute.jsx";
import CustomerEditRoute from "./routes/customer/CustomerEditRoute.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingRoute />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/home",
        element: <HomeRoute />,
    },
    {
        path: "/farmers/login",
        element: <FarmerLoginRoute />,
    },
    {
        path: "/customers/login",
        element: <CustomerLoginRoute />,
    },
    {
        path: "/farmers/signup",
        element: <FarmerSignUpRoute />,
    },
    {
        path: "/customers/signup",
        element: <CustomerSignUpRoute />,
    },
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
