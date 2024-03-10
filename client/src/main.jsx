import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//router
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

//routes
import Landing from "./routes/Landing.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./routes/Home.jsx";
import User from "./routes/User.jsx";
import UserList from "./routes/UserList.jsx";
import Login from "./routes/Login.jsx";
import SignUp from "./routes/SignUp.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/users",
        element: <UserList />,
    },
    {
        path: "/users/:id",
        element: <User />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
