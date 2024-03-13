import React from "react";
import CustomerList from "../../components/customer/CustomerList";
import { Link } from "react-router-dom";

function CustomerIndexRoute() {
    return (
        <div>
            <CustomerList />
            <Link to="/customers/new">Add new customer</Link>
        </div>
    );
}

export default CustomerIndexRoute;
