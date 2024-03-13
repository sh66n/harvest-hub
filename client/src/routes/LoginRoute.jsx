import React, { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/farmers";

function LoginRoute() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({ username: "", password: "" });
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
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                onChange={handleChange}
                value={formData.username}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
            />

            <button>Submit</button>
        </form>
    );
}

export default LoginRoute;
