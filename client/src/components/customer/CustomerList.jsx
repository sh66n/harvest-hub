import React, { useState, useEffect } from "react";
import CustomerListItem from "./CustomerListItem";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

function CustomerList() {
    const [customers, setCustomers] = useState([{ _id: "", name: "" }]);
    useEffect(() => {
        async function getCustomerData() {
            const response = await axios.get(`${BASE_URL}/customers`);
            setCustomers(response.data);
        }
        getCustomerData();
    });

    const deleteCustomer = async (id) => {
        await axios.delete(`${BASE_URL}/customers/${id}`);
    };

    return (
        <div>
            <ul>
                {customers.map((customer) => (
                    <CustomerListItem
                        customer={customer}
                        key={customer._id}
                        deleteCustomer={() => deleteCustomer(customer._id)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default CustomerList;
