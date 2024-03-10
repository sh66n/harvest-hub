import React, { useState, useEffect } from "react";
import Farmer from "./Farmer";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/farmers";

function FarmerList() {
    const [farmers, setFarmers] = useState([{ _id: "", name: "" }]);
    useEffect(() => {
        async function getFarmerData() {
            const response = await axios.get(BASE_URL);
            setFarmers(response.data);
        }
        getFarmerData();
    });

    const deleteFarmer = async (id) => {
        await axios.delete(`${BASE_URL}/${id}`);
    };

    return (
        <div>
            <ul>
                {farmers.map((farmer) => (
                    <Farmer
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
