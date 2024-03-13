import React, { useState, useEffect } from "react";
import FarmerListItem from "./FarmerListItem";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

function FarmerList() {
    const [farmers, setFarmers] = useState([{ _id: "", name: "" }]);
    useEffect(() => {
        async function getFarmerData() {
            const response = await axios.get(`${BASE_URL}/farmers`);
            setFarmers(response.data);
        }
        getFarmerData();
    });

    const deleteFarmer = async (id) => {
        await axios.delete(`${BASE_URL}/farmers/${id}`);
    };

    return (
        <div>
            <ul>
                {farmers.map((farmer) => (
                    <FarmerListItem
                        farmer={farmer}
                        key={farmer._id}
                        deleteFarmer={() => deleteFarmer(farmer._id)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default FarmerList;
