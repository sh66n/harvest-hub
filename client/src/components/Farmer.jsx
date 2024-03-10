/* eslint-disable react/prop-types */
import React from "react";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";

function Farmer({ farmer, deleteFarmer }) {
    return (
        <div>
            <li>
                <Link to={`/users/${farmer._id}`} key={farmer._id}>
                    {farmer.name}
                </Link>
            </li>
            <DeleteButton handleClick={deleteFarmer} />
        </div>
    );
}

export default Farmer;
