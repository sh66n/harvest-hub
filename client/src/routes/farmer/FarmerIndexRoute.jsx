import React from "react";
// import FarmerForm from "../../components/farmer/FarmerForm";
import FarmerList from "../../components/farmer/FarmerList";
import { Link } from "react-router-dom";

function FarmerIndexRoute() {
    return (
        <div>
            <FarmerList />
            {/* <FarmerForm /> */}
            <Link to="/farmers/new">Add new farmer</Link>
        </div>
    );
}

export default FarmerIndexRoute;
