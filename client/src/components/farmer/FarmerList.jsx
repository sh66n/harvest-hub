import React, { useState, useEffect } from "react";
import FarmerListItem from "./FarmerListItem";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASE_URL = "http://localhost:5000/api";

function FarmerList() {
    const [error, setError] = useState("");
    const [farmers, setFarmers] = useState([{ _id: "", name: "" }]);
    useEffect(() => {
        async function getFarmerData() {
            const response = await axios.get(`${BASE_URL}/farmers`);
            setFarmers(response.data);
        }
        getFarmerData();
    });

    const deleteFarmer = async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}/farmers/${id}`, {
                headers: {
                    authorization:
                        "Bearer " + localStorage.getItem("accessToken"),
                },
            });
            console.log(response);
        } catch (error) {
            setError(error.response.data);
        }
    };

    return (
        <div>
            {error && <span>{error}</span>}
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
