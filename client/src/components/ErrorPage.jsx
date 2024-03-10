import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    return (
        <div>
            <h1>OOPS</h1>
            <p>Couldn't get you there.</p>

            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default ErrorPage;
