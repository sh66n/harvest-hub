import React from "react";
import FarmerForm from "../components/FarmerForm";
import FarmerList from "../components/FarmerList";

function UserListRoute() {
    return (
        <div>
            <FarmerList />
            <FarmerForm />
        </div>
    );
}

export default UserListRoute;
