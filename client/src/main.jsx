import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//router
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

//routes
import LandingRoute from "./routes/LandingRoute.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import HomeRoute from "./routes/HomeRoute.jsx";
import UserRoute from "./routes/UserRoute.jsx";
import UserListRoute from "./routes/UserListRoute.jsx";
import FarmerLoginRoute from "./routes/FarmerLoginRoute.jsx";
import FarmerSignUpRoute from "./routes/FarmerSignUpRoute.jsx";
import CustomerLoginRoute from "./routes/CustomerLoginRoute.jsx";
import CustomerSignUpRoute from "./routes/CustomerSignUpRoute.jsx";

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
        path: "/users",
        element: <UserListRoute />,
    },
    {
        path: "/users/:id",
        element: <UserRoute />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
