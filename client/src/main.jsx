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
import FarmerRoute from "./routes/farmer/FarmerRoute.jsx";
import FarmerIndexRoute from "./routes/farmer/FarmerIndexRoute.jsx";
import FarmerLoginRoute from "./routes/farmer/FarmerLoginRoute.jsx";
import FarmerSignUpRoute from "./routes/farmer/FarmerSignUpRoute.jsx";
import CustomerLoginRoute from "./routes/customer/CustomerLoginRoute.jsx";
import CustomerSignUpRoute from "./routes/customer/CustomerSignUpRoute.jsx";
import CustomerIndexRoute from "./routes/customer/CustomerIndexRoute.jsx";

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
        path: "customers/login",
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
        path: "/farmers/:id",
        element: <FarmerRoute />,
    },
    {
        path: "/customers",
        element: <CustomerIndexRoute />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
