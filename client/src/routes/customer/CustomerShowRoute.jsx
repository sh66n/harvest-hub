import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/customers";

function CustomerShowRoute() {
    const [customer, setCustomer] = useState([{ _id: "", name: "" }]);
    const { id } = useParams();
    useEffect(() => {
        async function getCustomerData() {
            const response = await axios.get(`${BASE_URL}/${id}`);
            setCustomer(response.data);
        }
        getCustomerData();
    });

    return (
        <div>
            <h1>Customer: {customer.name}</h1>
            <h1>Id: {customer._id}</h1>
        </div>
    );
}

export default CustomerShowRoute;
