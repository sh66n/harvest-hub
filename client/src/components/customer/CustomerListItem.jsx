/* eslint-disable react/prop-types */
import React from "react";
import DeleteButton from "../miscellaneous/DeleteButton";
import { Link } from "react-router-dom";

function CustomerListItem({ customer, deleteCustomer }) {
    return (
        <div>
            <li>
                <Link to={`/users/${customer._id}`} key={customer._id}>
                    {customer.name}
                </Link>
            </li>
            <DeleteButton handleClick={deleteCustomer} />
        </div>
    );
}

export default CustomerListItem;
