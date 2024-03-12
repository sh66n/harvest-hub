import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/farmers";



function User() {
    const [farmer, setFarmer] = useState([{ _id: "", name: "" }]);
    const {id} = useParams();
    useEffect(() => {
        async function getFarmerData() {
            const response = await axios.get(`${BASE_URL}/${id}`);
            setFarmer(response.data);
        }
        getFarmerData();
    });

    return (
        <div>
            {farmer.map((farmer) => {
                return <h1>Id: {farmer._id} Name: {farmer.name}</h1>
            })}
        </div>
    )
}

export default User;
