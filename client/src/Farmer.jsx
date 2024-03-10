/* eslint-disable react/prop-types */
import React from "react";
import DeleteButton from "./DeleteButton";

function Farmer({ farmer, deleteFarmer }) {
    return (
        <div>
            <li key={farmer._id}>{farmer.name}</li>
            <DeleteButton handleClick={deleteFarmer} />
        </div>
    );
}

export default Farmer;
