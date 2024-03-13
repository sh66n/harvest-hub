/* eslint-disable react/prop-types */
import React from "react";
import DeleteButton from "../miscellaneous/DeleteButton";
import { Link } from "react-router-dom";

function FarmerListItem({ farmer, deleteFarmer }) {
    return (
        <div>
            <li>
                <Link to={`/farmers/${farmer._id}`} key={farmer._id}>
                    {farmer.name}
                </Link>
            </li>
            <DeleteButton handleClick={deleteFarmer} />
        </div>
    );
}

export default FarmerListItem;
