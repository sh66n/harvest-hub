import React, { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/farmers";

function FarmerForm() {
    const [formData, setFormData] = useState({ name: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({ name: "" });
        try {
            const response = await axios.post(BASE_URL, formData);
        } catch (e) {
            console.log("something went wrong", e);
        }
    };

    const handleChange = (e) => {
        setFormData((currData) => {
            return {
                ...currData,
                [e.target.name]: e.target.value,
            };
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={formData.name}
                placeholder="name"
                onChange={handleChange}
            />
            <button>Add +</button>
        </form>
    );
}

export default FarmerForm;
