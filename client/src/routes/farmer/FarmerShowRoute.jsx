import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:5000/api/farmers";

function FarmerShowRoute() {
    const [farmer, setFarmer] = useState([{ _id: "", name: "" }]);
    const { id } = useParams();
    useEffect(() => {
        async function getFarmerData() {
            const response = await axios.get(`${BASE_URL}/${id}`);
            setFarmer(response.data);
        }
        getFarmerData();
    });

    return (
        <div>
            <h1>Farmer: {farmer.name}</h1>
            <h1>Id: {farmer._id}</h1>
            <Link to={`/farmers/${farmer._id}/edit`}>Edit</Link>
        </div>
    );
}

export default FarmerShowRoute;
