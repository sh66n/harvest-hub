import React from "react";
import FarmerForm from "../../components/farmer/FarmerForm";
import FarmerList from "../../components/farmer/FarmerList";

function FarmerIndexRoute() {
    return (
        <div>
            <FarmerList />
            <FarmerForm />
        </div>
    );
}

export default FarmerIndexRoute;
