import React from "react";
import FarmerForm from "../components/FarmerForm";
import FarmerList from "../components/FarmerList";

function UserList() {
    return (
        <div>
            <FarmerList />
            <FarmerForm />
        </div>
    );
}

export default UserList;
